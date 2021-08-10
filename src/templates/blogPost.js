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
  go_back,
  text,
  link_container,
  link,
  barra,
  related_container,
  flex_just_mobile,
} from "./template.module.scss";
import ShareComponent from "./components/shareComponent";
import RelatedBlogPosts from "./components/relatedBlogPosts";
import BookingBanner from "../components/banners/bookingBanner";

const BlogPost = ({ data, pageContext }) => {
  const { previous, next } = pageContext
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
      <div className={post_container}>
        <h2>{title}</h2>
        <div>
          <div className={flex_info}>
            <div className={flex_breadcrumb}>
              <Link to={"/blog-para-perros"}>
                <b>Blog /</b>
              </Link>
              <p style={{ fontWeight: 700 }}>{title}</p>
            </div>
            <div>
              <MediaQuery minWidth={870}>
                <ShareComponent title={title} path={path} /> <MediaFixed />
              </MediaQuery>
            </div>
          </div>
          <BookingBanner />
        </div>
        <Img fluid={featuredImgFluid} />
        <div className={flex_just_mobile}>
          <div className={go_back}>
            <div>
              <img src={prevIcon} alt="Anterior" />
            </div>
            <Link to={"/blog-para-perros"}>Volver al Blog</Link>
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
            {previous && <Link to={previous.fields.slug}>Anterior</Link>}
          </div>
          <div className={barra}></div>
          <div className={link}>
            {next && <Link to={next.fields.slug}>Siguiente</Link>}
            <div>
              <img src={nextIcon} alt="Siguiente" />
            </div>
          </div>
        </div>
        <div className={related_container}>
          <h3>También te puede interesar...</h3>
          <RelatedBlogPosts />
        </div>
      </div>
    </Layout>
  );
};

// export const query = graphql`
//   query($pathSlug: String!) {
//     markdownRemark(frontmatter: { path: { eq: $pathSlug } }) {
//       html
//       frontmatter {
//         title
//         path
//         featuredImage {
//           childImageSharp {
//             fluid(maxWidth: 800) {
//               ...GatsbyImageSharpFluid
//             }
//           }
//         }
//       }
//     }
//   }
// `;
export const query = graphql`
  query BlogPostSlug($slug: String!) {
    site {
      siteMetadata {
        title
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      html
      frontmatter {
        title
        path
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

export default BlogPost;
