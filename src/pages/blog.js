import { graphql, Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import React from "react"
import Intro from "../components/Global/Intro"
import Layout from "../components/Global/Layout"
import { GatsbyImage } from "gatsby-plugin-image"
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
                    featuredImage {
                      childImageSharp {
                        gatsbyImageData(
                          layout: FIXED
                          placeholder: BLURRED
                          formats: [AUTO, WEBP, AVIF]
                        )
                      }
                    }
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
      introComponent={<Intro />}
    >
      {
        data.allMdx.nodes.length > 0 ? (
        
          <div>
            {data.allMdx.nodes.map(({ excerpt, frontmatter, fields }) => {
              let featuredImgFluid =frontmatter?.featuredImage?.childImageSharp?.fluid ||undefined;
  
              return (
                <Link key={excerpt} to={fields.slug} className="blog-post-item">
                  {
                    featuredImgFluid ? (
                      <GatsbyImage image={featuredImgFluid} className="blog-feature-image" alt={frontmatter.title} />
                    ): <StaticImage src="../assets/images/gaby-logo.png" alt="Gaby's Logo" className="blog-feature-image blog-feature-image--default"
                                    placeholder="blurred"
                                   
                    />
                  }
                  <h2 className="post-title">{frontmatter.title}</h2>
                  <p className="post-date">{frontmatter.date}</p>
                  <p className="post-excerpt">{excerpt}</p>
                </Link>
              )
            })}
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
