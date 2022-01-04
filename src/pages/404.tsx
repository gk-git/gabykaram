import React from "react"
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
      seo={{
        title: "Page Not found | Gaby Karam",
      }}
    >
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
