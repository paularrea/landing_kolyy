import React from "react";
import { graphql, Link } from "gatsby";
import Layout from "../components/layout/layout";
import Img from "gatsby-image";
import prevIcon from "../images/icons/prev.png"
import nextIcon from "../images/icons/next.png"
import {
  post_container,
  flex_info,
  flex_breadcrumb,
  go_back,
  text,
  link_container,
  link,
  barra,
} from "./template.module.scss";

const Template = ({ data, pageContext }) => {
  const { next, prev } = pageContext;
  const { markdownRemark } = data;
  const title = markdownRemark.frontmatter.title;
  const html = markdownRemark.html;
  let featuredImgFluid =
    markdownRemark.frontmatter.featuredImage.childImageSharp.fluid;

  return (
    <Layout>
      <div className={post_container}>
        <h2>{title}</h2>
        <div>
          <div className={flex_info}>
            <div className={flex_breadcrumb}>
              <Link to={"/blog"}>Blog </Link>/
              <p style={{ fontWeight: 700 }}>{title}</p>
            </div>
            <div>
              <span>Compártelo en F in Tw</span>
            </div>
          </div>
        </div>
        <Img fluid={featuredImgFluid} />
        <div className={go_back}>
          <Link>
            <span>{"<"} Volver al Blog</span>
          </Link>
        </div>

        <div className={text} dangerouslySetInnerHTML={{ __html: html }}></div>

        <div className={link_container}>
          <div className={link}>
            <div><img src={prevIcon} alt="Anterior" /></div>
            {next && <Link to={next.frontmatter.path}>Anterior</Link>}
          </div>
          <div className={barra}></div>
          <div className={link}>
            {prev && <Link to={prev.frontmatter.path}>Siguiente</Link>}
            <div><img src={nextIcon} alt="Siguiente" /></div>
          </div>
        </div>
        <div>
          <h3>También te puede interesar...</h3>
        </div>
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
