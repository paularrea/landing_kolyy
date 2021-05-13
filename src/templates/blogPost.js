import React from "react";
import { graphql, Link } from "gatsby";
import Layout from "../components/layout/layout";
import Img from "gatsby-image";

const Template = ({ data, pageContext }) => {
  const { next, prev } = pageContext;
  const { markdownRemark } = data;
  const title = markdownRemark.frontmatter.title;
  const html = markdownRemark.html;
  let featuredImgFluid = markdownRemark.frontmatter.featuredImage.childImageSharp.fluid;

  return (
    <Layout>
      <h2>{title}</h2>
      <Img fluid={featuredImgFluid} />
      <div dangerouslySetInnerHTML={{ __html: html }}></div>
      <div>
        <div>{next && <Link to={next.frontmatter.path}>Next</Link>}</div>
        <div>{prev && <Link to={prev.frontmatter.path}>Prev</Link>}</div>
      </div>
    </Layout>
  );
};

export const query = graphql`
  query($pathSlug: String!) {
    markdownRemark(frontmatter: { path: { eq: $pathSlug } }) {
      html
      frontmatter {
        title
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
`;

export default Template;
