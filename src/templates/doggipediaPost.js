import React, { useEffect } from "react";
import { graphql, Link } from "gatsby";
import Layout from "../components/layout/layout";
import Img from "gatsby-image";
import MediaQuery from "react-responsive";
import prevIcon from "../images/icons/prev.png";
import nextIcon from "../images/icons/next.png";
import MediaFixed from "./components/mediaFixed";
import {
  post_container,
  flex_info,
  flex_breadcrumb,
  text,
  img,
  flex_img_post,
  features_dog,
  intro_text,
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
  const intro = markdownRemark.frontmatter.intro;
  const aseo = markdownRemark.frontmatter.aseo;
  const pelo = markdownRemark.frontmatter.pelo;
  const peso = markdownRemark.frontmatter.peso;
  const path = markdownRemark.frontmatter.path;
  const html = markdownRemark.html;
  let featuredImgFluid =
    markdownRemark.frontmatter.featuredImage.childImageSharp.fluid;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <Layout>
      <div className={post_container}>
        <div>
          <div style={{ marginTop: "2rem" }} className={flex_info}>
            <div className={flex_breadcrumb}>
              <Link to={"/razas-de-perro"}>
                <b>Conoce a tu perro /</b>
              </Link>
              <p style={{ fontWeight: 700 }}>{title}</p>
            </div>
            <div>
              <MediaQuery minWidth={870}>
                <ShareComponent title={title} path={path} /> <MediaFixed />
              </MediaQuery>
            </div>
          </div>
        </div>
        <h2 style={{ margin: "1rem 0 0 0" }}>{title}</h2>
        <div style={{ paddingTop: "0" }} className={text}>
          <div className={flex_img_post}>
            <div className={features_dog}>
              <p className={intro_text}>{intro}</p>
              <b>Aseo:</b>
              <br />
              <p>{aseo}</p>
              <b>Pelo:</b>
              <br />
              <p>{pelo}</p>
              <b>Peso:</b>
              <br />
              <p>{peso}</p>
            </div>
            <div className={img}>
              {" "}
              <Img fluid={featuredImgFluid} />
              <div className={flex_just_mobile}>
                <div>
                  <MediaQuery maxWidth={870}>
                    <ShareComponent title={title} path={path} />{" "}
                  </MediaQuery>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div dangerouslySetInnerHTML={{ __html: html }}></div>
          </div>
        </div>

        <div className={link_container}>
          <div className={link}>
            <div>
              <img src={prevIcon} alt="Anterior" />
            </div>
            {next && <Link to={next.frontmatter.path}>Anterior raza</Link>}
          </div>
          <div className={barra}></div>
          <div className={link}>
            {prev && <Link to={prev.frontmatter.path}>Siguiente raza</Link>}
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
        path
        pelo
        peso
        aseo
        intro
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
