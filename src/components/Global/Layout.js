import React, { useContext } from "react"
import "../../assets/scss/main.scss"
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
