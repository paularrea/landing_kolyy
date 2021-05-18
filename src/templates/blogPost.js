import React, { useEffect } from "react";
import { graphql, Link } from "gatsby";
import Layout from "../components/layout/layout";
import Img from "gatsby-image";
import MediaQuery from "react-responsive";
import prevIcon from "../images/icons/prev.png";
import nextIcon from "../images/icons/next.png";
import MediaFixed from "../components/questionsComponents/mediaFixed"
import {
  post_container,
  flex_info,
  flex_breadcrumb,
  go_back,
  text,
  link_container,
  link,
  barra,
  related_container,
  related_posts,
} from "./template.module.scss";

const Template = ({ data, pageContext }) => {
  const { next, prev } = pageContext;
  const { markdownRemark } = data;
  const title = markdownRemark.frontmatter.title;
  const html = markdownRemark.html;
  // const tags = markdownRemark.frontmatter.tags;
  let featuredImgFluid =
    markdownRemark.frontmatter.featuredImage.childImageSharp.fluid;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <Layout>
      <MediaQuery minWidth={1000}>
        <MediaFixed />
      </MediaQuery>
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
          <div>
            <img src={prevIcon} alt="Anterior" />
          </div>
          <Link to={"/blog"}>Volver al Blog</Link>
        </div>

        <div className={text} dangerouslySetInnerHTML={{ __html: html }}></div>

        <div className={link_container}>
          <div className={link}>
            <div>
              <img src={prevIcon} alt="Anterior" />
            </div>
            {next && <Link to={next.frontmatter.path}>Anterior</Link>}
          </div>
          <div className={barra}></div>
          <div className={link}>
            {prev && <Link to={prev.frontmatter.path}>Siguiente</Link>}
            <div>
              <img src={nextIcon} alt="Siguiente" />
            </div>
          </div>
        </div>
        <div className={related_container}>
          <h3>También te puede interesar...</h3>
          <div className={related_posts}></div>
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
