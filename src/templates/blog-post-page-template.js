import { graphql } from 'gatsby'
import { MDXRenderer } from 'gatsby-plugin-mdx'
import React from 'react'

export const query = graphql
  `
    query PostsByID($slug: String!) {
        mdx(
          fields: { slug: { eq: $slug } }
        ){
            body
            frontmatter {
                title
                date(formatString: "YYYY MMMM Do")
            }
        }
    }
`

const BlogSinglePostPage =  ({ data }) => {
  const { frontmatter, body } = data.mdx
  return (
    <div>
      <h1>{frontmatter.title}</h1>
      <p>{frontmatter.date}</p>
      <MDXRenderer>{body}</MDXRenderer>
    </div>
  )
}

export default BlogSinglePostPage;
