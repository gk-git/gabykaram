import { StaticImage } from "gatsby-plugin-image"
import React from "react"
import webRingMembers from "../../../content/webring.json"

const WebRingNavigation = () => {
  const prevSiteIndex = webRingMembers.members.length - 1;
  const nextSiteIndex = 1;
  
  return (
    <div className="webring">
      <p >
        {/* webRingMembers.members[prevSiteIndex]?.url */}
        <span >A proud member of Batata Harra Webring</span>
        <a title={`Visit ${webRingMembers.members[prevSiteIndex]?.url}`} aria-label={`visit ${webRingMembers.members[prevSiteIndex]?.name} Dot Com`}
           href={webRingMembers.members[prevSiteIndex]?.url}>
          <i className="icon-left-lane"/>
        </a>
        <a rel="noopener" title="Batata Harra Webring" aria-label="visit Batata Harra Dot Guru"
           className="text-decoration-none m-1" href="https://batataharra.guru" target="_blank">
              <span>
                <img className="harra" src="https://abouhanna.com/images/flame.gif" alt="Flame"/>
                <span className="batata">🥔</span>
              </span>
        </a>
        <a title={`Visit ${webRingMembers.members[nextSiteIndex]?.url}`} aria-label={`visit ${webRingMembers.members[nextSiteIndex]?.name} Dot Com`}
           href={webRingMembers.members[nextSiteIndex]?.url}>
          <i className="icon-right-lane"/>
        </a>
      </p>
    </div>
  )
}

export default WebRingNavigation
