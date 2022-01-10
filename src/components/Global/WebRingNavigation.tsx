import { StaticImage } from "gatsby-plugin-image"
import React from "react"
import webRingMembers from "../../../content/webring.json"
import FlameGif from "../../assets/images/flame.gif"

const WebRingNavigation = () => {
  const prevSiteIndex = webRingMembers.members.length - 1
  const nextSiteIndex = 1
  
  return (
    <div className="webring">
        <span className="webring__title">A proud member of Batata Harra</span>
      <a title={`Visit ${webRingMembers.members[prevSiteIndex]?.url}`}
         aria-label={`visit ${webRingMembers.members[prevSiteIndex]?.name} Dot Com`}
         href={webRingMembers.members[prevSiteIndex]?.url}>
        <i className="icon-arrow-left" />
      </a>
        <a rel="noopener noreferrer" title="Batata Harra Webring" aria-label="visit Batata Harra Dot Guru"
           href="https://batataharra.guru" target="_blank">
          <img className="harra" src={FlameGif} alt="Flame" />
          <StaticImage className="batata" src="../../assets/images/batata.webp" alt="Gaby's face photo"
                       placeholder="blurred"
                       width={30}
          />
        </a>
        <a title={`Visit ${webRingMembers.members[nextSiteIndex]?.url}`} aria-label={`visit ${webRingMembers.members[nextSiteIndex]?.name} Dot Com`}
           href={webRingMembers.members[nextSiteIndex]?.url}>
          <i className="icon-arrow-right"/>
        </a>
    </div>
  )
}

export default WebRingNavigation
