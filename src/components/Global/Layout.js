import "normalize.css/normalize.css"
import React, { useContext, useEffect, useRef, useState } from "react"
import Helmet from "react-helmet"
import "../../assets/scss/main.scss"
import AppContext from "../../context/AppContext"
import useWindowSize from "../../hooks/useWindowSize"
import Footer from "./Footer"
import Navigation from "./Navigation/Navigation"

const Layout = ({
                  navigationProps,
                  showIntro = false,
                  introComponent,
                  children,
                  isSinglePost = false,
                  className = ""
                }) => {
  const [state, setState] = useState({
    placeholderTop: undefined,
    ticking: undefined
  })
  const { navigation } = useContext(AppContext)
  const parallaxPlaceholder = useRef()
  const footer = useRef()
  const windowSize = useWindowSize()
  let ts
  
  useEffect(() => {
  
    "wheel".split(" ").forEach(event => {
      window.addEventListener(event, handleScrollOverFixedFooter)
    
    })
    document.querySelector("footer").addEventListener("touchstart", handleTouchScrollOverFixedFooterStart)
    document.querySelector("footer").addEventListener("touchmove", handleTouchScrollOverFixedFooterEnd)
    return () => {
      "wheel".split(" ").forEach(event => {
        window.removeEventListener(event, handleScrollOverFixedFooter)
      })
      document.querySelector("footer").removeEventListener("touchstart", handleTouchScrollOverFixedFooterStart)
      document.querySelector("footer").removeEventListener("touchmove", handleTouchScrollOverFixedFooterEnd)
    
    }
  });
  
  const checkFooterHeight = () => {
    
    if (footer.current.offsetHeight > window.innerHeight) { // Check if footer is taller than window height
      window.addEventListener("scroll", onScroll)
      footer.current.style.bottom = "unset"
      footer.current.style.top = "0px"
    } else { // If footer height is not greater than window height, bottom is 0 for normal parllax
      window.removeEventListener("scroll", onScroll)
      footer.current.style.top = "unset"
      footer.current.style.bottom = "0px"
    }
  }
  useEffect(() => {
    updateHolderHeight()
    checkFooterHeight()
  }, [])
  useEffect(() => {
    // console.log("using effect")
    updateHolderHeight()
    checkFooterHeight()
    
  }, [windowSize])
  
  const updateHolderHeight = () => {
    // Placeholder should always match footer height
    parallaxPlaceholder.current.style.height = `${footer.current.offsetHeight}px`
  }
  const handleScrollOverFixedFooter = (event) => {
    if (event.defaultPrevented) {
      // This is not a passive event
      event.preventDefault()
    }
    document.querySelector("body").scrollTop += event?.deltaY || 0
  }
  
  const handleTouchScrollOverFixedFooterStart = (event) => {
    if (event?.touches[0]?.clientY) {
      ts = event.touches[0].clientY
    }
  }
  
  const handleTouchScrollOverFixedFooterEnd = (event) => {
    const te = event.changedTouches[0].clientY
    if (ts < te) {
      document.querySelector("body").scrollTop -= 8
    }
  }
  
  const onScroll = () => {
    setState({
      ...state,
      placeholderTop: Math.round(parallaxPlaceholder.current.getBoundingClientRect().top)
    })
    requestTick()
  }
  
  const requestTick = () => {
    if (!state.ticking) requestAnimationFrame(updateBasedOnScroll)
    setState({
      ...state,
      ticking: true
    })
  }
  
  
  const updateBasedOnScroll = ()=> {
    // Reset the tick so we can capture the next onScroll
    setState({
      ticking: false
    })
    
    // When main content disappears from view, start to move footer up
    // in conjunction with placeholder top value (in relation to viewport)
    if (state.placeholderTop <= 0) {
      footer.current.style.top = `${state.placeholderTop}px` // match footer top value with placeholder's top value
    }
  }
  return (
    <div className={`default-layout ${className} ${navigation.isOpen ? "open" : "close"}`}>
      <Helmet
        htmlAttributes={{
          lang: "en"
        }}
      />
      <Helmet title="Gaby Karam | Digital Producer & Developer" defer={false}>
      </Helmet>
      <Helmet>
        <meta charSet="utf-8" />
        <meta name="description"
              content="I don’t find myself defined by who I am currently. I define myself by what I am looking to be." />
      </Helmet>
      <header>
        <Navigation {...navigationProps} />
        {
          showIntro && introComponent
        }
      </header>
  
      <main className={`content invert ${isSinglePost ? " single-post " : ""}`}>
        {
          !isSinglePost ? (
            <div id="content">
              {children}
            </div>
          ) : (
            <>
              {children}
            </>
          )
        }
  
  
      </main>
      <div className="parallax-placeholder" ref={parallaxPlaceholder} />
      <footer ref={footer}>
        <div className="footer-container">
          <Footer />
        </div>
      </footer>
    </div>
  )
}

export default Layout
