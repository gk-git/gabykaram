import React from "react"
import webRingMembers from "../../../content/webring.json"
import FlameGif from '../../assets/images/flame.gif'
const WebRingNavigation = () => {
  const prevSiteIndex = webRingMembers.members.length - 1;
  const nextSiteIndex = 1;
  
  return (
    <div className="webring">
      <p >
        {/* webRingMembers.members[prevSiteIndex]?.url */}
        <span >A proud member of Batata Harra</span>
        <a title={`Visit ${webRingMembers.members[prevSiteIndex]?.url}`} aria-label={`visit ${webRingMembers.members[prevSiteIndex]?.name} Dot Com`}
           href={webRingMembers.members[prevSiteIndex]?.url}>
          <i className="icon-left-arrows"/>
        </a>
        <a rel="noopener noreferrer" title="Batata Harra Webring" aria-label="visit Batata Harra Dot Guru"
           className="text-decoration-none m-1" href="https://batataharra.guru" target="_blank">
              <span>
                <img className="harra" src={FlameGif} alt="Flame"/>
                <span className="batata">🥔</span>
              </span>
        </a>
        <a title={`Visit ${webRingMembers.members[nextSiteIndex]?.url}`} aria-label={`visit ${webRingMembers.members[nextSiteIndex]?.name} Dot Com`}
           href={webRingMembers.members[nextSiteIndex]?.url}>
          <i className="icon-right-arrows"/>
        </a>
      </p>
    </div>
  )
}

export default WebRingNavigation
