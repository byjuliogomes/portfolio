import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import imageStyles from "./image.module.scss"


const Image = () => {
  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "julio.png" }) {
        childImageSharp {
          fluid(maxWidth: 1200) {
            base64
    aspectRatio
    src
    srcSet
    sizes
          }
        }
      }
    }
  `)

  if (!data?.placeholderImage?.childImageSharp?.fluid) {
    return <div>Picture not found</div>
  } else {

    return <Img fluid={data.placeholderImage.childImageSharp.fluid}  />
  }
}

export default Image

