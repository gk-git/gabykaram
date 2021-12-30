import { StaticImage } from "gatsby-plugin-image"
import React, { useEffect, useState } from "react"

const Intro = () => {
  const [state, setState] = useState({
    greet: "Good Morning",
    isIntroOpenOnMobile: false
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
  
    setState((prevState => ({
      ...prevState,
      greet: greet
    })))
  
  }, []);
  
  const handleIntroToggle = (event) => {
    event.preventDefault()
    setState(prvState => ({
      ...prvState,
      isIntroOpenOnMobile: !prvState.isIntroOpenOnMobile
    }))
  }
  return (
    <div className="intro">
      <div className="intro__content">
        <div className="intro__picture">
          <StaticImage src="../../assets/images/profile.png" alt="Gaby's face photo"
                       placeholder="blurred"
                       width={200}
                       height={200}
          />
        </div>
        <p>
          <span className="intro__title">{state.greet}</span>
          <span className="intro__sub-title">My name is <strong>Gaby Karam</strong></span>
        </p>
        <p className={`intro__target ${state.isIntroOpenOnMobile ? " open " : ""}`}>
          <span className="intro__target__content">I am a strong believer in the learn by teaching concepts and a technical artist 🧑‍💻🧑‍🎨.
            On my tech status, I am a full stack developer who strives to become a designer.</span>
          <button className="intro__target__handler" onClick={handleIntroToggle}>
            <span className="intro__target__handler__text">Click to expand</span>
            <span className="intro__target__handler__icon" />
            
          </button>
        </p>
      </div>
    </div>
  )
}

export default Intro
