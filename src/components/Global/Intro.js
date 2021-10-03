import React from "react"
import { StaticImage } from "gatsby-plugin-image"

const Intro = () => {
  return (
    <div id="intro" className="fadeWhiteGradient">
      <div className="content">
        <h1 className="animateOnFirstLoad">Gab<span className="char1">y</span>&nbsp;<span
          className="char2">K</span>ar<span
          className="char3">a</span>m</h1>
        <h2 className="animateOnFirstLoad">Digital Producer & Developer</h2>
      </div>
      <span className="bg-images">
        <StaticImage src="../../assets/images/profile.png" alt="A dinosaur" />
      </span>
      <div className="bg-color">
        <span className="bg-color__layer_two"></span>
      </div>
    
    </div>
  )
}

export const BlogIntro = () => {
  return (
    <div id="intro" className="fadeWhiteGradient second-portfolio">
      <div className="content">
        <StaticImage style={{width: '200px', height: 'auto'}} src="../../assets/images/gaby-logo.png" alt="A dinosaur" />
        
        <h1 className="animateOnFirstLoad">Gab<span className="char1">y</span>&nbsp;<span
          className="char2">K</span>ar<span
          className="char3">a</span>m</h1>
        <h2 className="animateOnFirstLoad">Digital Producer & Developer</h2>
      </div>
      <div className="bg-color">
        <span className="bg-color__layer_two"></span>
      </div>
    
    </div>
  )
}

export default Intro
