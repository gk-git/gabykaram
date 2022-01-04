import "normalize.css/normalize.css"
import React, { useContext, useEffect, useRef } from "react"
import Helmet from "react-helmet"
import "../../assets/scss/main.scss"
import AppContext from "../../context/AppContext"
import useWindowSize from "../../hooks/useWindowSize"
import Footer from "./Footer"
import Navigation from "./Navigation/Navigation"
import { LayoutProps } from "../../types/components"

const Layout = ({
                  navigationProps,
                  showIntro,
                  introComponent,
                  children,
                  isSinglePost,
                  className,
                  seo
                }: LayoutProps) => {
  const { navigation } = useContext(AppContext)
  const parallaxPlaceholder = useRef()
  const footer = useRef<HTMLDivElement>()
  const windowSize = useWindowSize()
  
  
  const checkFooterHeight = () => {
    if (footer.current.offsetHeight > window.innerHeight) { // Check if footer is taller than window height
      footer.current.style.bottom = "unset"
      footer.current.style.top = "0px"
    } else { // If footer height is not greater than window height, bottom is 0 for normal parallax
      footer.current.style.top = "unset"
      footer.current.style.bottom = "0px"
    }
  }
  useEffect(() => {
    checkFooterHeight()
  }, [])
  useEffect(() => {
    checkFooterHeight()
  }, [windowSize])
  
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
Layout.defaultProps = {
  navigationProps: {
    isTransparent: false,
    showIntro: false,
    introComponent: null,
    isSinglePost: false,
    className: "",
    seo: null
  }
}
export default Layout
