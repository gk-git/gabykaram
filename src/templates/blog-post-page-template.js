import { graphql, navigate } from "gatsby"
import { MDXRenderer } from "gatsby-plugin-mdx"
import React, { useEffect } from "react"
import Helmet from "react-helmet"
import Intro from "../components/Global/Intro"
import Layout from "../components/Global/Layout"
import NewsSlider from "../components/NewsSlider"

export const query = graphql
    `
        query PostsByID($slug: String!) {
            mdx(
                fields: { slug: { eq: $slug } }
            ){
                body
                excerpt(pruneLength: 250)
                frontmatter {
                    title
                    date(formatString: "Do MMMM YYYY")
                }
            }

            allMdx(
                sort: {fields: [frontmatter___date], order: DESC}
                filter: {frontmatter: {published: {eq: true}}, fields: {slug: {ne: $slug}}}
            ) {
                nodes {
                    id
                    excerpt(pruneLength: 250)
                    frontmatter {
                        title
                        date(formatString: "Do MMMM YYYY")
                        published
                        featuredImage {
                            childImageSharp {
                                gatsbyImageData(width: 200, placeholder: BLURRED, formats: [AUTO, WEBP, AVIF])
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

const BlogSinglePostPage =  ({ data }) => {
  const { frontmatter, body, excerpt } = data.mdx
  const blogPosts = data.allMdx.nodes.map(blog => {
    return {
      id: blog.id,
      content: blog.excerpt,
      name: blog.frontmatter.title,
      date: blog.frontmatter.date,
      url: blog.fields.slug
    }
  })
  useEffect(() => {
    if(document) {
      document.querySelector("header").scrollIntoView({behavior: "smooth", block: "start"})
    }
  }, [data])
  
  const handleBackButtonClick = () => {
    navigate('/blog')
  }
  return (
    <Layout
      showIntro={true}
      introComponent={<Intro />}
      className={"blog-post"}
      isSinglePost={true}
      seo={{
        title:`${frontmatter.title} | Gaby Karam`,
        description: excerpt
      }}
    >
      <div id="content">
        <div className="navigation">
          <button className="navigation__back" onClick={handleBackButtonClick}>Go Back</button>
        </div>
        <p className="date">{frontmatter.date}</p>
        <h1>{frontmatter.title}</h1>
        <MDXRenderer>{body}</MDXRenderer>
      </div>
      <NewsSlider news={blogPosts} />
    </Layout>
  )
}

export default BlogSinglePostPage;
