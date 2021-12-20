import React from "react"
import Intro from "../components/Global/Intro"
import Layout from "../components/Global/Layout"

const labLinks = [
  {
    label: "My current New Tab extension",
    href: "https://github.com/Batata-Harra/my-new-tab-extension"
  },
  {
    label: "Batata Harra Web Ring",
    href: "https://github.com/Batata-Harra/batata-harra-webring"
  },
  {
    label: "My Previous Portfolio",
    href: "https://github.com/gk-git/portfolio"
  },
  {
    label: "A great Javascript Exercise",
    href: "https://github.com/gk-git/javascript-basics/tree/master/Base6"
  },
]
export default function LabPage() {
  return (
    <Layout
      showIntro={true}
      introComponent={<Intro />}
    >
      <div style={{ display: "flex", alignItems: "center", height: "100%" }}>
        <div>
          <p style={{ fontSize: "2rem" }}>
            I will be adding more structure content for the lap page in the upcoming days.
          </p>
          <p>
            For now you here is a list of cool code that I wrote:
            
          </p>
          <p>
            <ul>
              {
                labLinks.map(({ href, label }) => (
                  <li>
                    <a href={href} rel="noreferrer noreferrer" target="_blank">
                      {label}
                    </a>
                  </li>
                ))
              }
            </ul>
          </p>
        </div>
      </div>
    </Layout>
  )
}
