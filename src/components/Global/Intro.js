import { StaticImage } from "gatsby-plugin-image"
import React, { useEffect, useState } from "react"

const Intro = () => {
  const [state, setState] = useState({
    greet: "Good Morning"
  })
  useEffect(() => {
    const myDate = new Date()
    let hrs = myDate.getHours()
    
    let greet
    
    if (hrs >= 4 && hrs < 12)
      greet = "Good Morning"
    else if (hrs >= 12 && hrs <= 17)
      greet = "Good Afternoon"
    else
      greet = "Good Evening"
    
    setState({
      ...state,
      greet: greet
    })
    
  }, [])
  return (
    <div className="intro">
      <div className="intro__content">
        <div className="intro__picture">
          <StaticImage src="../../assets/images/profile.png" alt="A dinosaur"
                       placeholder="blurred"
                       width={300}
                       height={300}
          />
        </div>
        <p>
          <span className="intro__title">{state.greet}</span>
          <span className="intro__sub-title">My name is <strong>Gaby Karam</strong></span>
        </p>
        <p className="intro__target">
          <span> I am a strong believer in the learn by teaching concepts and a technical artist 🧑‍💻🧑‍🎨.
            On my tech status, I am a full stack developer who strives to become a designer.</span>
        </p>
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
