import { graphql, Link } from "gatsby"
import { MDXRenderer } from 'gatsby-plugin-mdx'
import React from 'react'
import Intro from "../components/Global/Intro"
import Layout from "../components/Global/Layout"

export const query = graphql
  `
    query PostsByID($slug: String!) {
        mdx(
          fields: { slug: { eq: $slug } }
        ){
            body
            frontmatter {
                title
                date(formatString: "Do MMMM YYYY")
            }
        }
    }
`

const BlogSinglePostPage =  ({ data }) => {
  const { frontmatter, body } = data.mdx
  return (
    <Layout
      showIntro={true}
      introComponent={<Intro />}
      className={'blog-post'}
    >
      <div className="navigation">
        <Link to={'/blog'}>Go Back</Link>
      </div>
      <h1>{frontmatter.title}</h1>
      <p className="date">{frontmatter.date}</p>
      <MDXRenderer>{body}</MDXRenderer>
    </Layout>
  )
}

export default BlogSinglePostPage;
