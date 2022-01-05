import { MDXProvider } from "@mdx-js/react"
import React from "react"
import MarkdownLink from "./src/components/Global/MarkdownLink"
import { AppProvider } from "./src/context/AppContext"

const components = {
  a: MarkdownLink
}

export const wrapRootElement = ({ element }) => (
  <MDXProvider components={components}>
    <AppProvider>{element}</AppProvider>
  </MDXProvider>
)
