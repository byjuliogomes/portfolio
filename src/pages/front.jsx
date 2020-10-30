import React from "react"

import Layout from "../components/Layout"
import SEO from "../components/seo"
import Catalogo from "../components/Catalogo"

const IndexPage = ({ data }) => (
  <Layout>
    <SEO title="Front-end | Júlio Gomes - Product Designer Portfolio" />
    <Catalogo>Front-end projects</Catalogo>
  </Layout>
)

export default IndexPage
