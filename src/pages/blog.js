import React from "react";
import { graphql, Link } from "gatsby";
import SubscribeComponent from "../components/blogComponents/subscribeComponent";
import Layout from "../components/layout/layout";
import Seo from "../components/seo";
import Img from "gatsby-image";
import {
  container,
  bg_img,
  content,
  post_flex,
  post,
} from "../styles/blog.module.scss";

const Blog = ({ data }) => {
  const { edges } = data.allMarkdownRemark;
  console.log(edges, "data");
  return (
    <Layout>
      <Seo title="Blog" />
      <div className={bg_img}>
        <div className={content}>
          <h2>Todo lo que necesitas saber para cuidar de él</h2>
          <p>
            Suscríbete a nuestra newsletter y no te pierdas ningún consejo.{" "}
          </p>
          <SubscribeComponent />
        </div>
      </div>
      <div className={container}>
        <span>Un mundo por descubrir.</span>
        <h2>Últimos artículos</h2>
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
      </div>
    </Layout>
  );
};

export const query = graphql`
  query blogQuery {
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

export default Blog;
