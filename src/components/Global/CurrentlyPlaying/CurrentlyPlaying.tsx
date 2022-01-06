import React, { useEffect, useState } from "react"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { graphql, useStaticQuery } from "gatsby"
import "./CurrentlyPlaying.scss"
import useInterval from "../../../hooks/useInterval"

export default function CurrentlyPlaying() {
  const [state, setState] = useState({
    isDocumentVisible: true,
    isPlaying: false,
    runSpotifyCall: false
  })

  useEffect(()=>{
    document.addEventListener('visibilitychange',handleUseIsActive );
    return () => {
      document.removeEventListener('visibilitychange', handleUseIsActive);
    }
  })
  useInterval(() => {
    getPlayingData()
  }, 10000)
  useEffect(() => {
    if (window !== undefined) {
      setTimeout(getPlayingData, 4000)
    }
  }, [window])

  const handleUseIsActive =  ()=> {
    setState(prevState => ({
      ...prevState,
      isDocumentVisible: !document.hidden
    }))
  }
  const data = useStaticQuery(graphql`
      query ProfileImageQuery {
          profileImageMobile: file(relativePath: {eq: "profile.png"}) {
              childImageSharp {
                  gatsbyImageData(
                      formats: WEBP
                      placeholder: BLURRED
                      quality: 100
                      width: 100
                      webpOptions: {quality: 100}
                      breakpoints: [500, 767]
                  )
              }
          }
          profileImageNotMobile: file(relativePath: {eq: "profile.png"}) {
              childImageSharp {
                  gatsbyImageData(
                      formats: WEBP
                      placeholder: BLURRED
                      quality: 100
                      width: 200
                      webpOptions: {quality: 100}
                      breakpoints: [500, 767]
                  )
              }
          }
      }
  `)

  const profileImageMobile = getImage(data.profileImageMobile)
  const profileImageNotMobile = getImage(data.profileImageNotMobile)

  const getPlayingData = () => {
    if (window !== undefined && state.isDocumentVisible) {
      fetch(`https://wpshortcuts.mystagingwebsite.com/wp-json/spotify/v1/playing/1`)
        .then(response => response.json())
        .then(data => {
          setState(prevState => (
            {
              ...prevState,
              isPlaying: data.isPlaying
            }
          ))
        })
        .catch(_ => {
          setState(prevState => ({
            ...prevState,
            isPlaying: false
          }))
        })
    }

  }
  return (
    <div className="currently-playing">
      <div className="currently-playing__container">
        <div className="currently-playing__wrapper">
          <GatsbyImage image={profileImageMobile} className="gatsby-image-wrapper--mobile" alt="Gaby's face photo"
                       loading="eager"
          />
          <GatsbyImage image={profileImageNotMobile} className="gatsby-image-wrapper--desktop" alt="Gaby's face photo"
                       loading="eager"
          />
          <div className={`currently-playing__circle  ${state.isPlaying ? "playing" : ""}`}>

          </div>
        </div>
      </div>
      <svg>
        <filter id="wavy">
          <feTurbulence x="0" y="0" baseFrequency="0.009" numOctaves="5" seed="2">
            <animate attributeName="baseFrequency" dur="120s" values="0.02;0.05;0.02" repeatCount="indefinite">

            </animate>
          </feTurbulence>
          <feDisplacementMap in="SourceGraphic" scale="12" />
        </filter>
      </svg>
    </div>
  )
}
