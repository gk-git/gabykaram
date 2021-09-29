import React from "react"
import Helmet from "react-helmet"
import Layout from "../components/Global/Layout"
import Intro from "../components/Global/Intro"
import { Link } from "gatsby"

export default function PageNotFound() {
  return (
    <Layout
      navigationProps={{
        isTransparent: false,
      }}
      showIntro={true}
      introComponent={<Intro />}
    >
      <Helmet defer={false}>
        <meta charSet="utf-8" />
        <title>Page Not found | Digital Producer & Developer</title>
        <meta
          name="description"
          content="I don’t find myself defined by who I am currently. I define myself by what I am looking to be."
        />
      </Helmet>
      <div>
        <p>The page that you are trying to reach isn't available.</p>
        <hr />
        <p>
          You can check my homepage by clicking <Link to="/">here</Link>.
        </p>
      </div>
    </Layout>
  )
}
