import React from "react"
import { Link } from "gatsby"
import menuStyles from "./menu.module.scss"
import TransitionLink from "gatsby-plugin-transition-link"

const Menu = () => {
  return (
    <>
      <nav className={menuStyles.nav}>
        <Link
          to="/"
          activeClassName="active"
          activeStyle={{ color: "#AF48FF" }}
          className={menuStyles.Link}
        >
            Me
        </Link>
        <Link
          to="/visual-identity"
          activeClassName="active"
          activeStyle={{ color: "#AF48FF" }}
          className={menuStyles.Link}
        >
          Visual Identity
        </Link>
        <Link
          to="/front"
          activeClassName="active"
          activeStyle={{ color: "#AF48FF" }}
          className={menuStyles.Link}
        >
          Front
        </Link>
        <Link
          to="/uiux"
          activeClassName="active"
          activeStyle={{ color: "#AF48FF" }}
          className={menuStyles.Link}
        >
          UI/UX
        </Link>
        <Link
          to="/adv"
          activeClassName="active"
          activeStyle={{ color: "#AF48FF" }}
          className={menuStyles.Link}
        >
          Advertising
        </Link>
        <Link
          to="/blog"
          activeClassName="active"
          activeStyle={{ color: "#AF48FF" }}
          className={menuStyles.Link}
        >
          Blog
        </Link>
      </nav>
    </>
  )
}

window.onscroll = function () {
  scrollFunction()
}

function scrollFunction() {
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    document.getElementsByTagName("Link").style.color = "#7B61FF"
    document.getElementsByTagName("Link").style.fontSize = "12px"
    
  } else {
    document.getElementsByTagName("Link").style.color = "#F8F2FF"
    document.getElementsByTagName("Link").style.fontSize = "20px"
  }
}

export default Menu
