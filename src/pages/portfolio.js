import { StaticImage } from "gatsby-plugin-image"
import React from "react"
import Intro from "../components/Global/Intro"
import Layout from "../components/Global/Layout"

export default function PortfolioPage () {
  return (
    <Layout
      navigationProps={{
        isTransparent: false
      }}
      showIntro={true}
      introComponent={<Intro />}
    >
      <h1>Let's build something that make a difference.</h1>
      
      <section>
        <div className="projects">
          <div className="project">
            <a href="https://concertforafghanistan.com/" rel="noopener noreferrer" target="_blank">
              <StaticImage src="../assets/images/projects/concertforafghanistan.com.png" alt="A dinosaur"
                           placeholder="blurred"
              />
              <span className="project__content">
                  <span className="project__title">Concert For Afghanistan</span>
              </span>
            </a>
          </div>
          <div className="project">
            <a href="https://www.mehnati.org/" rel="noopener noreferrer" target="_blank">
              <StaticImage src="../assets/images/projects/mehnati.org.png" alt="A dinosaur"
                           placeholder="blurred"
              />
              <span className="project__content">
                  <span className="project__title">Mehnati</span>
              </span>
            </a>
          </div>
          <div className="project">
            <a href="https://abouhanna.com" rel="noopener noreferrer" target="_blank">
              <StaticImage src="../assets/images/projects/abouhanna.com.png" alt="A dinosaur"
                           placeholder="blurred"
              />
              <span className="project__content">
                  <span className="project__title">Kevin Abou Hanna </span>
              </span>
            </a>
          </div>
          <div className="project">
            <a href="https://mmfidawla.com" rel="noopener noreferrer" target="_blank">
              <StaticImage src="../assets/images/projects/mmfidawla.com.png" alt="A dinosaur"
                           placeholder="blurred"
              />
              <span className="project__content">
                  <span className="project__title">Mouwatinoun wa Mouwatinat fi Dawla</span>
              </span>
            </a>
          </div>
          <div className="project">
            <a href="https://codebravetutors.org" rel="noopener noreferrer" target="_blank">
              <StaticImage src="../assets/images/projects/codebravetutors.org.png" alt="A dinosaur"
                           placeholder="blurred"
              />
              <span className="project__content">
                <span className="project__title">Codebrave Tutors</span>
              </span>
            </a>
          </div>
          <div className="project">
            <a href="https://garderlecap.global" rel="noopener noreferrer" target="_blank">
              <StaticImage src="../assets/images/projects/garderlecap.global.png" alt="A dinosaur"
                           placeholder="blurred"
              />
              <span className="project__content">
                <span className="project__title">Garder Le Cap</span>
              </span>
            </a>
          </div>
          <div className="project">
            <a href="https://codi.tech" rel="noopener noreferrer" target="_blank">
              <StaticImage src="../assets/images/projects/codi.tech.png" alt="A dinosaur"
                           placeholder="blurred"
              />
              <span className="project__content">
                  <span className="project__title">Codi Tech</span>
              </span>
            </a>
          </div>
          <div className="project">
            <a href="https://summerofinnovation.io" rel="noopener noreferrer" target="_blank">
              <StaticImage src="../assets/images/projects/summerofinnovation.io.png" alt="A dinosaur"
                           placeholder="blurred"
              />
              <span className="project__content">
                  <span className="project__title">Summer Of Innovation</span>
              </span>
            </a>
          </div>
          <div className="project">
            <a href="https://nextgenlondon.com" rel="noopener noreferrer" target="_blank">
              <StaticImage src="../assets/images/projects/nextgenlondon.com.png" alt="A dinosaur"
                           placeholder="blurred"
              />
              <span className="project__content">
                  <span className="project__title">NextGen London</span>
              </span>
            </a>
          </div>
        </div>
      </section>
    </Layout>
  )
}
