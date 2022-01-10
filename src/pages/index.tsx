import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import React from "react"
import Intro from "../components/Global/Intro"
import LayoutContainer from "../containers/LayoutContainer"
import { SVG } from "../components/SpriteLogo"

export default function Home () {

  const techSkills = [
    {
      label: "HTML 5",
      svgID: "html5",
      columns: 1,
    },
    {
      label: "CSS 3",
      svgID: "css3",
      columns: 1,
    },
    {
      label: "Javascript",
      svgID: "javascript",
      columns: 1,
    },
    {
      label: "PHP",
      svgID: "php",
      columns: 1,
    },
    {
      label: "SASS",
      svgID: "sass",
      columns: 1,
    },
    {
      label: "Typescript",
      svgID: "typescript",
      columns: 1,
    },

    {
      label: "GraphQl",
      svgID: "graphql",
      columns: 1,
    },
    {
      label: "MySQL",
      svgID: "mysql",
      columns: 1,
    },
    {
      label: "WordPress",
      svgID: "wordpress",
      columns: 1,
    },
    {
      label: "React",
      svgID: "react",
      columns: 1,
    },
    {
      label: "NodeJs",
      svgID: "nodejs",
      columns: 1,
    },
    {
      label: "Laravel",
      svgID: "laravel",
      columns: 1,
    },
    {
      label: "Gatsby",
      svgID: "gatsby",
      columns: 2,
    },
    {
      label: "NextJs",
      svgID: "next-js",
      columns: 2,
    }
  ]
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
          <div className="align-center">
            <Link to="/portfolio" className="cta">
              Check my portfolio
            </Link>
          </div>
        </section>

        <section className="tools__wrapper">
          <h2 className="tools__title">Technical Tools That I Use</h2>
          <div className="tools">

            {
              techSkills.map(techSkill => {
                return (
                  <div className={`tool ${`tool--column-${techSkill.columns}`}`}>
                    <div className="tool__label">
                      {techSkill.label}
                    </div>
                    <div className="tool__icon">
                      <SVG id={techSkill.svgID} />
                    </div>
                  </div>
                )
              })
            }
          </div>
        </section>
      </div>
    </LayoutContainer>
  )
}
