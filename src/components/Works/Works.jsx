import React from "react"
import { Link } from "gatsby"
import "./Works.css"

export default ({ data }) => {
  const { edges } = data.allMarkdownRemark
  const works = edges.map(({ node }) => (
    <div key={node.fields.slug} className="work">
      <Link to={node.fields.slug} className="work-title">
        <h2>{node.frontmatter.title}</h2>
      </Link>
      <p className="work-date">{node.frontmatter.date}</p>
      <p>{node.frontmatter.description}</p>
    </div>
  ))
  return <div className="works">{works}</div>
}