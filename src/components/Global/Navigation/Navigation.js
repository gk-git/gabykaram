import { Link } from "gatsby"
import React, { useContext } from "react"
import AppContext from "../../../context/AppContext"

const Navigation = ({ isTransparent }) => {
  const { navigation } = useContext(AppContext)
  const handleMenuClick = (event) => {
    navigation.toggleMenu()
    event.preventDefault()
  }
  const closeMenu = () => {
   setTimeout(() => { navigation.closeMenu()}, 50)
  }
  
  return (
    <nav id="mainNav" className={`${navigation.isOpen ? "expanded" : ""} `} role="navigation" >
      <span onClick={handleMenuClick}
        className={`menuIcon icon-menu icon  ${isTransparent && "transparent"}`} title="Menu (Esc)" tabIndex="0"
        data-icon="\e9bd">
        <span>Menu</span>
      </span>
      <div id="navigation">
        <p><span className="heading">gaby karam</span><br /><span
          className="subheading">Digital Producer & Developer</span></p>
        <p className="menu_label">Menu</p>
        
        <section>
          <ul className="siteLinks">
            <li><span>Site dishes</span></li>
            <li>
              <Link to="/" onClick={closeMenu} className="home" activeClassName="current" title="Learn about me (H)">Home</Link>
            </li>
            <li>
              <Link to="/work/" onClick={closeMenu} className="work" activeClassName="current" title="Check out my work (W)">Work</Link>
            </li>
            <li>
              <Link to="/lab/" onClick={closeMenu} className="lab" activeClassName="current" title="Visit my lab (L)">Lab</Link>
            </li>
            <li>
              <Link to="/blog/" onClick={closeMenu} className="blog" activeClassName="current" title="Read my blog (B)">Blog</Link>
            </li>
          </ul>
          
          <ul>
            <li><span>Main contact</span></li>
            <li><a
              href="mailto:info@gabykaram.com"
              className="email" title="Email me (E)">Email</a></li>
          </ul>
          
          <ul>
            <li><span>Desserts</span></li>
            <li>
              <a href="https://www.linkedin.com/in/gabykaram/" title="Find me on linkedIn" rel="noreferrer"
                 target="_blank">LinkedIn</a></li>
            <li>
              <a href="http://github.com/gk-git" title="Find me on GitHub" rel="noreferrer"
                 target="_blank">GitHub</a>
            </li>
            <li>
              <a href="https://www.facebook.com/gaby.karam.gk/" title="Find me on Facebook" rel="noreferrer"
                 target="_blank">Facebook</a>
            </li>
          </ul>
          
          <p>Some of our dishes may contain sarcasm and humour. <br />Please don&rsquo;t inform our staff about any
            allergies you might have.</p>
        </section>
      </div>
    </nav>
  
  )
}
export default Navigation
