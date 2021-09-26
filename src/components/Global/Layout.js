import React, { useContext } from "react"
import "../../assets/scss/main.scss"
import "../../assets/scss/print.scss"
import "../../assets/scss/testings.scss"
import Helmet from "react-helmet"
import AppContext from "../../context/AppContext"
import Footer from "./Footer"
import Navigation from "./Navigation/Navigation"

const Layout = ({
                  navigationProps,
                  showIntro = false,
                  introComponent,
                  children
                }) => {
  const { navigation } = useContext(AppContext)
  return (
    <div className={`default-layout ${navigation.isOpen ? "open" : "close"}`}>
      <Helmet
        htmlAttributes={{
          lang: 'en',
        }}
      />
  
      <header>
        <Navigation {...navigationProps} />
        {
          showIntro && introComponent
        }
      </header>
      
      <main className="content">
        <div id="content">
          {children}
        </div>
      
      </main>
      <Footer />
    </div>
  )
}

export default Layout
