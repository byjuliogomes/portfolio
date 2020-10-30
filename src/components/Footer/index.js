import React from "react"
import { Link } from "gatsby"
import footerStyles from "./footer.module.scss"

const Footer = () => {
  return (
    <>
      <div className={footerStyles.wrapper}>
        <footer className={footerStyles.footer}>
          © {new Date().getFullYear()}, created by
          {` `}
          <a href="https://www.gatsbyjs.com">Júlio Gomes | Product Designer</a>
        </footer>
      </div>
    </>
  )
}

export default Footer
