import React from "react"
import Layout from "../components/Layout"
import SEO from "../components/seo"
import Catalogo from '../components/Catalogo'
import VI from '../../images/iv.png'
import viStyles from "./visual-identity.module.scss"
import AOS from "aos"
import "aos/dist/aos.css"

const IndexPage = ({ data }) => (
  <Layout>
    <SEO title="Visual Identity | Júlio Gomes - Product Designer Portfolio" />
    <h2 id="h1">Visual Identity</h2>
    <div className={viStyles.layout}>
      <img src={VI} className={viStyles.img} data-aos="fade-left"></img>
      <p className={viStyles.p}>
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
    <Catalogo>Visual Identity projects</Catalogo>
  </Layout>
)

export default IndexPage
