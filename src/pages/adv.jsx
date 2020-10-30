import React from "react"

import Layout from "../components/Layout"
import SEO from "../components/seo"
import Catalogo from "../components/Catalogo"

const IndexPage = ({ data }) => (
  <Layout>
    <SEO title="Advertising | Júlio Gomes - Product Designer Portfolio" />
    <Catalogo>Advertising projects</Catalogo>
  </Layout>
)

export default IndexPage
