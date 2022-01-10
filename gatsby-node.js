const { createFilePath } = require(`gatsby-source-filesystem`)
const path = require("path")
const fs = require("fs");
const fetch = require('cross-fetch')
function ensureDirectoryExistence(filePath) {
  var dirname = path.dirname(filePath);
  if (fs.existsSync(dirname)) {
    return true;
  }
  ensureDirectoryExistence(dirname);
  fs.mkdirSync(dirname);
}
exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions
  
  if (node.internal.type === `Mdx`) {
    const value = createFilePath({ node, getNode })
    
    createNodeField({
      name: `slug`,
      node,
      value: `/blog${value}`
    })
  }
}

exports.createPages = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions
  
  const result = await graphql
  (`
        query {
            allMdx {
                edges {
                    node {
                        id
                        fields {
                            slug
                        }
                    }
                }
            }
        }
    `)
  
  if (result.errors) {
    reporter.panicOnBuild('🚨  ERROR: Loading "createPages" query')
  }
  
  // Create blog post pages.
  const posts = result.data.allMdx.edges
  
  fetch('https://cdn.heapanalytics.com/js/heap-2943585873.js')
    .then(response => response.text())
    .then(data => {
      const dateObj = new Date();
      const month = dateObj.getUTCMonth() + 1; //months from 1-12
      const day = dateObj.getUTCDate();
      const year = dateObj.getUTCFullYear();
  
      const scriptHash = `${year}-${month}-${day}`;
      ensureDirectoryExistence(`./public/heapanalytics.com/script-${scriptHash}.js`)
      fs.writeFileSync(`./public/heapanalytics.com/script-${scriptHash}.js`, data);
    }).catch(error => {
      console.log('error fetch', error)
  })
  posts.forEach(({ node }, index) => {
    createPage({
      path: node.fields.slug,
      component: path.resolve(`./src/templates/blog-post-page-template.tsx`),
      context: {slug: node.fields.slug, },
    })
  })
}
