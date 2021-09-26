import { Link } from "gatsby"
import React from "react"
import Helmet from "react-helmet"
import Intro from "../components/Global/Intro"
import Layout from "../components/Global/Layout"

export default function Home () {
  return (
    <Layout
      navigationProps={{
        isTransparent: false
      }}
      showIntro={true}
      introComponent={<Intro />}
    >
      <Helmet title="Gaby Karam | Digital Producer & Developer" defer={false}  >
      </Helmet>
      <Helmet>
        <meta charSet="utf-8" />
        <meta name="description" content="I don’t find myself defined by who I am currently. I define myself by what I am looking to be." />
      </Helmet>
      <div>
        <p>I don’t find myself defined by who I am currently. I&nbsp;define myself by what I am looking to be.</p>
        
        <p>Skills are teachable, and personality is inherent. My character is what separates me
          from others. I can chase awards, status, or gaining accolades.
          I continue challenging myself, do <Link to="/work">exciting things</Link>&nbsp;that matter, and
          communicate <a href="https://discord.gg/TVKymdecjJ" target="_blank" rel="noreferrer">about them</a>.
        </p>
        
        <p>
          I’m the cumulation of many skills and talents. I enjoy working with clients who do contribute to the social
          mission field, want to do an impact,
          become sustainable, and leave a mark.
          The value of my work is reflected in the impact I have on the communities that I join.
        </p>
        
        <p>
          I'm currently <a href="mailto:learn@gabykaram.com" title="Email me">available for hire.</a>
        </p>
      </div>
    </Layout>
  )
}
