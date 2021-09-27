import React from "react"
import Layout from "../components/Global/Layout"
import Intro from "../components/Global/Intro"
import { Link } from "gatsby"

const PageNotFound = () => {
  return (
    <Layout
      navigationProps={{
        isTransparent: false,
      }}
      showIntro={true}
      introComponent={<Intro />}
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
export default PageNotFound
