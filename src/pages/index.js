import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import React from "react"
import Helmet from "react-helmet"
import Intro from "../components/Global/Intro"
import Layout from "../components/Global/Layout"

export default function Home () {
  return (
    <Layout
      navigationProps={{
        isTransparent: false
      }}
      showIntro={true}
      introComponent={<Intro />}
    >
      <Helmet title="Gaby Karam | Digital Producer & Developer" defer={false}  >
      </Helmet>
      <Helmet>
        <meta charSet="utf-8" />
        <meta name="description" content="I don’t find myself defined by who I am currently. I define myself by what I am looking to be." />
      </Helmet>
      <div>
        <h1>Let's build something that make a difference.</h1>
        
        <section>
          <div className="projects">
            <div className="project">
              <a href="https://concertforafghanistan.com/" rel="noopener noreferrer" target="_blank">
                <StaticImage src="../assets/images/projects/concertforafghanistan.com.png" alt="A dinosaur"
                             placeholder="blurred"
                />
                <span className="project__content">
                  <span className="project__title ">Concert For Afghanistan</span>
                </span>
              </a>
            </div>
            <div className="project">
              <a href="https://www.mehnati.org/" rel="noopener noreferrer" target="_blank">
                <StaticImage src="../assets/images/projects/mehnati.org.png" alt="A dinosaur"
                             placeholder="blurred"
                />
                <span className="project__content">
                  <span className="project__title ">Mehnati</span>
                </span>
              </a>
            </div>
            
            
          </div>
          <div className="align-center" >
            <Link to="/portfolio" className="cta">
              Check my portfolio
            </Link>
          </div>
        </section>
      </div>
    </Layout>
  )
}
