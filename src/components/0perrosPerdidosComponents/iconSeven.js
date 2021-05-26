import React from "react";
import { graphql, useStaticQuery } from "gatsby";

import Img from "gatsby-image"
const IconSeven = (props) => {
  const data = useStaticQuery(graphql`
  query {
    placeholderImage: file(relativePath: { eq: "icon7.png" }) {
      childImageSharp {
        fluid(maxWidth: 1360, quality: 90, webpQuality: 90){
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`)

if (!data?.placeholderImage?.childImageSharp?.fluid) {
  return <div>Picture not found</div>
}

return <Img fluid={data.placeholderImage.childImageSharp.fluid} />
}
export default IconSeven;
