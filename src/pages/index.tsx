import { graphql, Link } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import React, { useState } from "react"
import Intro from "../components/Global/Intro"
import LayoutContainer from "../containers/LayoutContainer"
import { SVG } from "../components/SpriteLogo"

const initialState = {
  items: [
    {
      id: 1,
      externalUrl: "https://riothere.com/",
      visualAlt: "Riothere visual",
      title: "Riothere",
      imageQueryKey: "rioThereImage"
    },
    {
      id: 2,
      externalUrl: "https://concertforafghanistan.com/",
      visualAlt: "Concert For Afghanistan visual",
      title: "Concert For Afghanistan",
      imageQueryKey: "concertForAfghanistanImage"
    }
  ],
  showRest: false
}
const allPortfolioItems = [
  ...initialState.items,
  {
    id: 3,
    externalUrl: "https://abouhanna.com/",
    visualAlt: "Kevin Abou Hanna visual",
    title: "Kevin Abou Hanna",
    imageQueryKey: "abouHannaImage"
  },
  {
    id: 4,
    externalUrl: "https://mmfidawla.com/",
    visualAlt: "Mouwatinoun wa Mouwatinat fi Dawla visual",
    title: "Mouwatinoun wa Mouwatinat fi Dawla",
    imageQueryKey: "MMFDImage"
  },
  {
    id: 5,
    externalUrl: "https://codebravetutors.org/",
    visualAlt: "Codebrave Tutors visual",
    title: "Codebrave Tutors",
    imageQueryKey: "CodeBraveTutorsImage"
  },
  {
    id: 6,
    externalUrl: "https://garderlecap.global/",
    visualAlt: "Garder Le Cap visual",
    title: "Garder Le Cap",
    imageQueryKey: "GarderLeCapImage"
  },
  {
    id: 7,
    externalUrl: "https://codi.tech/",
    visualAlt: "Codi Tech visual",
    title: "Codi Tech",
    imageQueryKey: "CodiTechImage"
  },
  {
    id: 8,
    externalUrl: "https://summerofinnovation.io/",
    visualAlt: "Summer Of Innovation visual",
    title: "Summer Of Innovation",
    imageQueryKey: "SummerOfInnovationImage"
  },
  {
    id: 9,
    externalUrl: "https://nextgenlondon.com/",
    visualAlt: "NextGen London visual",
    title: "NextGen London",
    imageQueryKey: "NextgenLondonImage"
  }
]
export default function Home({ data }) {

  const techSkills = [
    {
      label: "HTML 5",
      svgID: "html5",
      columns: 1
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
      columns: 2
    },
    {
      label: "NextJs",
      svgID: "next-js",
      columns: 2
    }
  ]

  const [portfolioState, setPortfolioState] = useState(initialState)

  const handleCheckLoadMorePortfolioItems = (event) => {
    event.preventDefault()
    setPortfolioState({
      ...portfolioState,
      showRest: !portfolioState.showRest,
      items: portfolioState.showRest ? initialState.items : allPortfolioItems
    })
  }
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
            {
              portfolioState.items.map(portfolioItem => {
                const portfolioItemImage = getImage(data[portfolioItem.imageQueryKey])
                return (
                  <div className="project" key={portfolioItem.id}>
                    <a href={portfolioItem.externalUrl} rel="noopener noreferrer" target="_blank">
                      <GatsbyImage image={portfolioItemImage} className="gatsby-image-wrapper--mobile"
                                   alt="Gaby's face photo"
                                   loading="eager"
                      />
                      <span className="project__content">
                        <span className="project__title">{portfolioItem.title}</span>
                      </span>
                    </a>
                  </div>
                )
              })
            }


          </div>
          {
            !portfolioState.showRest && (
              <div className="align-center">
                <Link to="/portfolio" onClick={handleCheckLoadMorePortfolioItems} className="cta">
                  Check my portfolio
                </Link>
              </div>
            )
          }

        </section>

        <section className="tools__wrapper">
          <h2 className="tools__title">Technical Tools That I Use</h2>
          <div className="tools">

            {
              techSkills.map(techSkill => {
                return (
                  <div key={techSkill.svgID} className={`tool ${`tool--column-${techSkill.columns}`}`}>
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

export const query = graphql`
    fragment FileChildImageSharp on File {
        childImageSharp {
            gatsbyImageData(
                formats: WEBP
                placeholder: BLURRED
                quality: 100
                webpOptions: {quality: 100}
                breakpoints: [500, 767, 1200]
            )
        }
    }

    query HomePageQuery {
        rioThereImage: file(relativePath: {eq: "projects/riothere.com.png"}) {
            ...FileChildImageSharp
        }
        concertForAfghanistanImage: file(
            relativePath: {eq: "projects/concertforafghanistan.com.png"}
        ) {
            ...FileChildImageSharp
        }
        abouHannaImage: file(relativePath: {eq: "projects/abouhanna.com.png"}) {
            ...FileChildImageSharp
        }
        MMFDImage: file(relativePath: {eq: "projects/mmfidawla.com.png"}) {
            ...FileChildImageSharp
        }
        CodeBraveTutorsImage: file(relativePath: {eq: "projects/codebravetutors.org.png"}) {
            ...FileChildImageSharp
        }
        GarderLeCapImage: file(relativePath: {eq: "projects/garderlecap.global.png"}) {
            ...FileChildImageSharp
        }
        CodiTechImage: file(relativePath: {eq: "projects/codi.tech.png"}) {
            ...FileChildImageSharp
        }
        SummerOfInnovationImage: file(relativePath: {eq: "projects/summerofinnovation.io.png"}) {
            ...FileChildImageSharp
        }
        NextgenLondonImage: file(relativePath: {eq: "projects/nextgenlondon.com.png"}) {
            ...FileChildImageSharp
        }
    }

`
