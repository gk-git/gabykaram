import { navigate } from "gatsby"
import React from "react"

export default function MarkdownLink (props) {
  const handleLinkClick = (e) => {
    e.preventDefault()
    const { href } = props
    if (href) {
      if (href.charAt(0) === "/" && href.charAt(1) !== "/") {
        return navigate(href)
      } else {
        return window.open(href, "_blank")
      }
    }
  }
  return (
    <a onClick={handleLinkClick} {...props} />
  )
}
