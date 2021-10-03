import { graphql, Link } from "gatsby"
import React from "react"
import { BlogIntro } from "../components/Global/Intro"
import Layout from "../components/Global/Layout"

export const query = graphql
  `
    query SITE_INDEX_QUERY {
        site {
            siteMetadata {
                title
                description
            }
        }
        allMdx(
            sort: { fields: [frontmatter___date], order: DESC }
            filter: { frontmatter: { published: { eq: true } } }
        ) {
            nodes {
                id
                excerpt(pruneLength: 250)
                frontmatter {
                    title
                    date(formatString: "Do MMMM YYYY"),
                    published
                }
                fields {
                    slug
                }
            }
        }
    }
`

export default function BlogPage ({ data }) {
  return (
    <Layout
      showIntro={true}
      introComponent={<BlogIntro />}
    >
      {
        data.allMdx.nodes.length > 0 ? (
        
          <div>
            {data.allMdx.nodes.map(({ excerpt, frontmatter, fields }) => (
              <Link key={frontmatter} to={fields.slug}>
                <h1>{frontmatter.title}</h1>
                <p>{frontmatter.date}</p>
                <p>{excerpt}</p>
              </Link>
            ))}
          </div>
        ) : (
          <div style={{ display: "flex", alignItems: "center", height: "100%" }}>
            <p style={{ fontSize: "2rem" }}>
              I will be writing some short blog in the upcoming days.
              <br />
              If you would like to offer some help, please don't hesitate, thank you.
            </p>
          </div>
        )
      }
    
    </Layout>
  )
}
