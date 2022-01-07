import React, { useEffect, useState } from "react"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { graphql, useStaticQuery } from "gatsby"
import useInterval from "../../../hooks/useInterval"
import MusicNoteIcon from "./MusicNoteIcon"
import LiveIcon from "./atoms/LiveIcon"
import "./CurrentlyPlaying.scss"

export default function CurrentlyPlaying() {
  const [state, setState] = useState({
    isDocumentVisible: true,
    isPlaying: false,
    album: null,
    name: null,
    artists: [],
    external_urls: {
      spotify: null
    }
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
  }, [])

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
          setState(prevState => {

            if (data.isPlaying) {
              return {
                ...prevState,
                isPlaying: data.isPlaying,
                album: data.data.album,
                name: data.data.name,
                artists: data.data.artists,
                external_urls: {
                  spotify: data.data.external_urls.spotify
                }
              }
            } else {
              return {
                ...prevState,
                isPlaying: false,
                album: null,
                name: null,
                artists: [],
                external_urls: {
                  spotify: null
                }
              }
            }
          })
        })
        .catch(_ => {
          setState(prevState => ({
            ...prevState,
            isPlaying: false
          }))
        })
    }
  }

  const outputArtistsNames = () => {
    const returns = []
    const artistsCount = state.artists.length
    for (let index = 0; index < artistsCount; index++) {
      const artist = state.artists[index];
      if (index !== 0 && index === artistsCount - 1) {
        returns.push((
            <span>and </span>
        ))
      }
      returns.push((
        <>
          <a href={artist.external_urls.spotify} target="_blank"><strong>{artist.name}</strong></a>, <span/>
        </>
      ))
    }
    return returns
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
          {
            state.isPlaying && (
              <>
                <div className={`currently-playing__circle  ${state.isPlaying ? "playing" : ""}`}>
                  <label htmlFor="currently-playing__handle-show-info"
                         className="currently-playing__circle--mobile">
                    <MusicNoteIcon />
                  </label>
                  <label htmlFor="currently-playing__handle-show-info"
                         className="currently-playing__circle--desktop" />

                </div>
                <input type="checkbox" id="currently-playing__handle-show-info"
                       className="currently-playing__handle-show-info" />
                <div className={`spotify__wrapper ${state.isPlaying ? "playing" : ""}`}>
                  <div className="spotify">
                    <div className="spotify__live-icon">
                      <LiveIcon />
                    </div>
                    <label htmlFor="currently-playing__handle-show-info"
                           className="spotify__close-icon icon-close">
                    </label>
                    <p className="spotify__primary-text">
                      While working I usually listen to music.
                    </p>
                    <p className="spotify__secondary-text">
                      Now listening to <a href={state.external_urls.spotify} target="_blank"><strong
                      className="song__name">{state.name}</strong></a> by <span
                      className="artist__name">{outputArtistsNames()}</span>
                    </p>
                    {
                      state.album.images.length > 0 && (
                        <a href={state.album.external_urls.spotify} className="spotify__album-cover" target="_blank">
                          <img title={state.album.name} alt={state.album.name}
                               src={state.album.images.find(({height})=> height==300).url} />
                        </a>
                      )
                    }

                  </div>
                </div>
              </>
            )
          }

        </div>
      </div>
      <svg className="currently-playing__desktop-animation">
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
