import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import "../header.scss"
import logo from "../../../images/logoKolyy.png"

const Logo = () => {
  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "logoKolyy.png" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  if (!data?.placeholderImage?.childImageSharp?.fluid) {
    return <div>Picture not found</div>
  }
  return <img src={logo} className="logo" alt="brand logo" />
}

export default Logo
