import React from "react"
import webRingMembers from "../../../content/webring.json"

const getRandomInt = (min, max, notIn = []) => {
  min = Math.ceil(min)
  max = Math.floor(max)
  let randomInt = Math.floor(Math.random() * (max - min + 1)) + min
  if (notIn.indexOf(randomInt) >= 0) {
    randomInt = getRandomInt(min, max, notIn)
  }
  return randomInt
}
const WebRingNavigation = () => {
  const prevSiteIndex = webRingMembers.members.length - 1;
  const nextSiteIndex = 1;
  const randomSiteIndex = getRandomInt(1, webRingMembers.members.length - 1, [0])
  
  return (
    <div className="webring">
      <p>Other Members in my community</p>
      <div id="copy">
        <p>
          <a href={webRingMembers.members[prevSiteIndex]?.url}>Prev</a>
          <a href={webRingMembers.members[nextSiteIndex]?.url}>Next</a>
          <a href={webRingMembers.members[randomSiteIndex]?.url}>Random</a>
        </p>
      </div>
    </div>
  )
}

export default WebRingNavigation
