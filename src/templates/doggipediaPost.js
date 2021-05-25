import React, { useEffect } from "react";
import { graphql, Link } from "gatsby";
import Layout from "../components/layout/layout";
import Img from "gatsby-image";
import MediaQuery from "react-responsive";
import prevIcon from "../images/icons/prev.png";
import nextIcon from "../images/icons/next.png";
import MediaFixed from "../components/questionsComponents/mediaFixed";
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
  flex_just_mobile,
} from "./template.module.scss";
import ShareComponent from "./components/shareComponent";
import RelatedDoggipedia from "./components/relatedDoggipedia";

const DoggipediaPost = ({ data, pageContext }) => {
  const { next, prev } = pageContext;
  const { markdownRemark } = data;
  const title = markdownRemark.frontmatter.title;
  const path = markdownRemark.frontmatter.path;
  const html = markdownRemark.html;
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
              <Link to={"/doggipedia"}>Conoce a tu perro </Link>/
              <p style={{ fontWeight: 700 }}>{title}</p>
            </div>
            <div>
              <MediaQuery minWidth={870}>
                <ShareComponent title={title} path={path} />{" "}
              </MediaQuery>
            </div>
          </div>
        </div>
        <Img fluid={featuredImgFluid} />
        <div className={flex_just_mobile}>
          <div className={go_back}>
            <div>
              <img src={prevIcon} alt="Anterior" />
            </div>
            <Link to={"/doggipedia"}>Volver a la Doggypedia</Link>
          </div>
          <div>
            <MediaQuery maxWidth={870}>
              <ShareComponent title={title} path={path} />{" "}
            </MediaQuery>
          </div>
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
          <RelatedDoggipedia />
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

export default DoggipediaPost;
