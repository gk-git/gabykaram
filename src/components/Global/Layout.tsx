import "normalize.css/normalize.css"
import React, {  useEffect, useRef } from "react"
import Helmet from "react-helmet"
import "../../assets/scss/main.scss"
import useWindowSize from "../../hooks/useWindowSize"
import Footer from "./Footer"
import { LayoutProps } from "../../types/components"
import getConfig  from "../../config"
import NavigationContainer from "../../containers/NavigationContainer"
import { SVGSource } from "../SpriteLogo"

const Layout = ({
                  navigationProps,
                  showIntro,
                  introComponent,
                  children,
                  isSinglePost,
                  className,
                  seo
                }: LayoutProps) => {
  const config = getConfig()
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
    <div className={`default-layout ${className} ${navigationProps.isOpen ? "open" : "close"}`}>
      <Helmet
        htmlAttributes={{
          lang: "en"
        }}
      />
      <Helmet>
        <meta charSet="utf-8" />
        <title>{seo?.title || config.defaultSeo.title}</title>
        <meta name="description" content={seo?.description || config.defaultSeo.description} />
      </Helmet>
      <header>
        <NavigationContainer {...navigationProps} />
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

      <SVGSource/>
    </div>
  )
}
Layout.defaultProps = {
  navigationProps: {
    isTransparent: false,
    isOpen: false
  },
  showIntro: false,
  introComponent: null,
  isSinglePost: false,
  className: "",
  seo: null
}
export default Layout
