import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import React from "react"
import Intro from "../components/Global/Intro"
import LayoutContainer from "../containers/LayoutContainer"

export default function Home () {
  return (
    <LayoutContainer
      navigationProps={{
        isTransparent: false
      }}
      showIntro={true}
      introComponent={<Intro />}
    >
      <div>
        <h1>Let's build something that make a difference.</h1>

        <section>
          <div className="projects">
            <div className="project">
              <a href="https://riothere.com/" rel="noopener noreferrer" target="_blank">
                <StaticImage src="../assets/images/projects/riothere.com.png" alt="Riothere"
                             placeholder="blurred"
                />
                <span className="project__content">
                  <span className="project__title">Riothere</span>
              </span>
              </a>
            </div>
            <div className="project">
              <a href="https://concertforafghanistan.com/" rel="noopener noreferrer" target="_blank">
                <StaticImage src="../assets/images/projects/concertforafghanistan.com.png" alt="Concert For Afghanistan visual"
                             placeholder="blurred"
                />
                <span className="project__content">
                  <span className="project__title ">Concert For Afghanistan</span>
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
    </LayoutContainer>
  )
}
