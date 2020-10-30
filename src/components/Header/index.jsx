import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import Menu from "../Menu"
import headerStyles from "./header.module.scss"
import { FaGithub, FaBehance, FaDribbble, FaLinkedin } from "react-icons/fa"

const Header = ({ siteTitle }) => (
  <header
    style={{
      marginBottom: `1.45rem`,
    }}
    className={headerStyles.header}
    id="header"
  >
    <div
      style={{
        margin: `0 auto`,
        maxWidth: 960,
        padding: `1.45rem 1.0875rem`,
        display: `flex`,
        justifyContent: `space-between`,
      }}
      className={headerStyles.wrapper}
    >
      <h1 style={{ margin: 0, fontSize: 24 }} id="logo">
        <Link to="/" className={headerStyles.logo} id="logoLink">
          {siteTitle}
        </Link>
      </h1>
      <Menu className={headerStyles.nav} id="nav"></Menu>
      <div className={headerStyles.wrapperIcons}>
        <FaGithub className={headerStyles.icons} />
        <FaBehance className={headerStyles.icons} />
        <FaDribbble className={headerStyles.icons} />
        <FaLinkedin className={headerStyles.icons} />
      </div>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

window.onscroll = function () {
  scrollFunction()
}

function scrollFunction() {
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    document.getElementById("header").style.background = "#7B61FF"
    document.getElementById("header").style.height = "60px"
    document.getElementById("header").style.color = "#F8F2FF"
    document.getElementById("logo").style.fontSize = "20px"
    document.getElementById("logoLink").style.color = "#F8F2FF"
  } else {
    document.getElementById("header").style.background = "transparent"
    document.getElementById("header").style.fontSize = "16px"
    document.getElementById("header").style.color = "#7B61FF"
    document.getElementById("logo").style.fontSize = "24px"
    document.getElementById("header").style.height = "auto"
    document.getElementById("logoLink").style.color = "#25323D"
  }
}

export default Header
