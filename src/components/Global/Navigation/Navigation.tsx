import { Link } from "gatsby"
import React from "react"
import { NavigationProps } from "../../../types/components"

import WebRingNavigation from "../WebRingNavigation"

const Navigation = ({ isTransparent, isOpen, closeMenu, toggleMenu }: NavigationProps) => {
  const handleMenuClick = (event) => {
    event.preventDefault()
    toggleMenu()
  }
  const handleCloseMenu = () => {
    setTimeout(() => { closeMenu()}, 50)
  }

  return (
    <nav id="main-navigation" className={`main-navigation ${isOpen ? "expanded" : ""} `} role="navigation"
    >
      {
        !isOpen &&  <WebRingNavigation/>
      }

      <div className="main-navigation__handle__wrapper">
        <button onClick={handleMenuClick}
                className={`main-navigation__handle ${isTransparent ? "transparent" : ""}`} title="Menu (Esc)"
                data-icon="\e9bd">
          <span />
        </button>

      </div>
      <div className={`main-navigation__menu ${isOpen ? "visible" : ""}`}>
        <div className="main-navigation__menu__wrapper">
          <p className="menu_label">Menu</p>

          <section>
            <ul className="siteLinks">
              <li><span>Site dishes</span></li>
              <li>
                <Link to="/" onClick={handleCloseMenu} className="home" activeClassName="current"
                      title="Learn about me (H)">Blog</Link>
              </li>
              <li>
                <Link to="/portfolio/" onClick={handleCloseMenu} className="portfolios" activeClassName="current"
                      title="Check out my portfolio (W)">Portfolio</Link>
              </li>
              <li>
                <Link to="/lab/" onClick={handleCloseMenu} className="lab" activeClassName="current"
                      title="Visit my lab (L)">Lab</Link>
              </li>

            </ul>

            <ul className="contact">
              <li><span>Main contact</span></li>
              <li><a
                href="mailto:info@gabykaram.com"
                className="email" title="Email me (E)">Email</a></li>
            </ul>

            <ul className="deserts">
              <li><span>Desserts</span></li>
              <li>
                <a href="https://www.linkedin.com/in/gabykaram/" title="Find me on linkedIn" rel="noreferrer"
                   target="_blank"> LinkedIn</a></li>
              <li>
                <a href="http://github.com/gk-git" title="Find me on GitHub" rel="noreferrer"
                   target="_blank"> GitHub</a>
              </li>
              <li>
                <a href="https://www.facebook.com/gaby.karam.gk/" title="Find me on Facebook" rel="noreferrer"
                   target="_blank"> Facebook</a>
              </li>
            </ul>

            <p className="notes">Some of our dishes may contain sarcasm and humour. <br />Please inform
              our staff about any
              allergies you might have.</p>
          </section>
        </div>
      </div>
    </nav>
  )
}

export default Navigation;

Navigation.defaultProps = {
  isTransparent: false,
  isOpen: false,
  closeMenu: () => {console.log('Function to close the menu')},
  toggleMenu: () => {console.log('Function to toggle the menu open status')}
}
