import React from "react"
import Layout from "../components/Layout"
import SEO from "../components/seo"
import Catalogo from "../components/Catalogo"
import uiux from "../../images/ux.png"
import uiuxStyles from "./uiux.module.scss"
import AOS from "aos"
import "aos/dist/aos.css"

const IndexPage = ({ data }) => (
  <Layout>
    <SEO title="UI e UX | Júlio Gomes - Product Designer Portfolio" />
    <h2 id="h1">UI e UX</h2>
    <div className={uiuxStyles.layout}>
      <img src={uiux} className={uiuxStyles.img} data-aos="fade-left"></img>
      <p className={uiuxStyles.p}>
        A corporate identity or corporate image is the manner in which a
        corporation, firm or business enterprise presents itself to the public
        (such as customers and investors as well as employees). The corporate
        identity is typically visualized by branding and with the use of
        trademarks, but it can also include things like product design,
        advertising, public relations etc. Corporate identity is a primary goal
        of the corporate communications, in order to maintain and build the
        identity to accord with and facilitate the corporate business
        objectives.
      </p>
    </div>
    <Catalogo>UI e UX projects</Catalogo>
  </Layout>
)

export default IndexPage
