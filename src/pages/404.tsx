import React from "react"
import Intro from "../components/Global/Intro"
import { Link } from "gatsby"
import LayoutContainer from "../containers/LayoutContainer"

export default function PageNotFound() {
  return (
    <LayoutContainer
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
    </LayoutContainer>
  )
}
