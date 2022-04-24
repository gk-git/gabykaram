import { graphql, Link } from "gatsby"
import { GatsbyImage, StaticImage } from "gatsby-plugin-image"
import React from "react"
import Intro from "../components/Global/Intro"
import LayoutContainer from "../containers/LayoutContainer"

export const query = graphql
  `
    query SITE_INDEX_QUERY {
        site {
            siteMetadata {
                title
                description
            }
        }
        blogPostsFeautured: allMdx(
            sort: { fields: [frontmatter___date], order: DESC }
            filter: { frontmatter: { published: { eq: true },  featured:{eq: true} } }
        ) {
            nodes {
                id
                excerpt(pruneLength: 250)
                frontmatter {
                    title
                    date(formatString: "Do MMMM YYYY"),
                    published
                    featured
                    featuredImage {
                        childImageSharp {
                            gatsbyImageData(
                                width: 200
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
        blogPostsRegular: allMdx(
            sort: { fields: [frontmatter___date], order: DESC }
            filter: { frontmatter: { published: { eq: true }, featured:{ne: true} } }
        ) {
            nodes {
                id
                excerpt(pruneLength: 250)
                frontmatter {
                    title
                    date(formatString: "Do MMMM YYYY"),
                    published
                    featured
                    featuredImage {
                      childImageSharp {
                        gatsbyImageData(
                          width: 200
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
    <LayoutContainer
      showIntro={true}
      introComponent={<Intro />}
      seo={{
        title: "Blog | Gaby Karam",
      }}
    >
      {
        data.blogPostsFeautured.nodes.length >= 0 || data.blogPostsRegular.length > 0? (

          <div>
            {[...data.blogPostsFeautured.nodes, ...data.blogPostsRegular.nodes].map(({ excerpt, frontmatter, fields }) => {
              let featuredImgFluid =frontmatter?.featuredImage?.childImageSharp?.gatsbyImageData ||undefined;

              return (
                <Link key={excerpt} to={fields.slug} className="blog-post-item">
                  <div className="blog-feature-image">
                    {
                      featuredImgFluid ? (
                        <GatsbyImage image={featuredImgFluid}  alt={frontmatter.title} />
                      ): <StaticImage src="../assets/images/gaby-logo.png" alt="Gaby's Logo" className="blog-feature-image blog-feature-image--default"
                                      placeholder="blurred"

                      />
                    }
                  </div>
                  <h2 className="post-title">{frontmatter.title}</h2>
                  <p className="post-date">{frontmatter.date}{frontmatter.featured ? ' - Featured': ''}</p>
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


    </LayoutContainer>
  )
}
