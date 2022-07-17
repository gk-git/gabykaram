import React from "react"
import AppContext from "../context/AppContext"
import { LayoutContainerProps } from "../types/containers"
import Layout from "../components/Global/Layout"

export default function LayoutContainer({ navigationProps, ...props }: LayoutContainerProps) {
  return (
    <AppContext.Consumer>
      {
        ({ navigation }) => {
          return (
            <Layout {...props} navigationProps={{
              ...navigationProps,
              isOpen: navigation.isOpen
            }}>
              {props.children}
            </Layout>
          )
        }
      }
    </AppContext.Consumer>
  )
}
LayoutContainer.defaultProps = {
  navigationProps: {
    isTransparent: false,
  },
  showIntro: false,
  introComponent: null,
  isSinglePost: false,
  enableVisualCheckDown: true,
  className: "",
  seo: null
}
