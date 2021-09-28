const { createFilePath } = require(`gatsby-source-filesystem`)
const path = require("path")

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions
  
  if (node.internal.type === `Mdx`) {
    const value = createFilePath({ node, getNode })
    
    createNodeField({
      name: `slug`,
      node,
      value: `/blogs${value}`
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
  
  posts.forEach(({ node }, index) => {
    createPage({
      path: node.fields.slug,
      component: path.resolve(`./src/templates/blog-post-page-template.js`),
      context: {slug: node.fields.slug, },
    })
  })
}
