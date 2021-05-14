import React from 'react'
import { graphql, Link } from "gatsby";
import Img from "gatsby-image";
import {post_flex, post } from "../../styles/blog.module.scss"

const AllPosts = ({data}) => {
    const { edges } = data.allMarkdownRemark;
    return (
        <div className={post_flex}>
          {edges.slice(0, 3).map((edge) => {
            const { frontmatter } = edge.node;
            return (
              <div className={post} key={frontmatter.path}>
                <Link to={frontmatter.path}>
                  <Img
                    fluid={frontmatter.featuredImage.childImageSharp.fluid}
                  />
                  <h5>{frontmatter.title}</h5>
                </Link>
                <Link to={frontmatter.path}>
                  <button>Leer más</button>
                </Link>
              </div>
            );
          })}
        </div>
    )
}

export const query = graphql`
  query allPosts {
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          frontmatter {
            title
            path
            date(formatString: "YYYY MMMM Do")
            featuredImage {
              childImageSharp {
                fluid(maxWidth: 800) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    }
  }
`;

export default AllPosts
