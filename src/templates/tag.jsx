import React, { Component } from "react"
import { graphql } from "gatsby"
import Layout from "../components/Layout"
import Posts from "../components/Posts"
import SEO from "../../src/components/seo"

export default class Tag extends Component {
  render() {
    const { data, pathContext } = this.props;
    const { tag } = pathContext;
    const { pathname } = this.props.location;
    return (
      <Layout>
        <div>
          <SEO title={`Tag: ${tag}`} description={`Todos os posts marcados com a tag "${tag}" no CodeStack Brasil`} url={pathname}/>
          <h2 style={{ fontSize: '22px', padding: '0px 15px' }}>Todos os posts com a tag: {tag}</h2>
          <Posts data={data}/>
        </div>
      </Layout>
    )
  }
};


export const pageQuery = graphql`
  query {
    firstPost: allMarkdownRemark(
      limit: 2000
      sort: { fields: [fields___prefix], order: DESC }
      filter: { frontmatter: { draft: { ne: true } } }
    ) {
      edges {
        node {
          fields {
            slug
          }
          timeToRead
          frontmatter {
            title
            tags
            date(formatString: "DD/MM/YYYY")
            description
          }
        }
      }
    }
  }
`
