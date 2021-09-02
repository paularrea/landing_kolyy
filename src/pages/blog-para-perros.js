import React, { useEffect, useState } from "react";
import { graphql, Link } from "gatsby";
import SubscribeComponent from "../components/blogComponents/subscribeComponent";
import Layout from "../components/layout/layout";
import { Grid, Row, Col } from "react-flexbox-grid";
import Seo from "../components/seo";
import Img from "gatsby-image";
import {
  span,
  container,
  bg_img,
  content,
  post_flex,
  search_container,
  search_absolute,
  post,
} from "../styles/blog.module.scss";
import AllPosts from "../components/blogComponents/allPosts";
import BlogImg from "../components/blogComponents/blogBackgroundImg";

import searchIcon from "../images/icons/search.png";

const Blog = ({ data }) => {
  const [state, setState] = useState({
    filteredPosts: [],
    query: "",
  });

  const allPosts = data.allMarkdownRemark.edges;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleInputChange = (event) => {
    const query = event.target.value;
    const filteredPosts = allPosts.filter((post) => {
      const { title } = post.node.frontmatter;
      return title.toLowerCase().includes(query.toLowerCase());
    });
    setState({
      query,
      filteredPosts,
    });
  };

  const posts = state.query ? state.filteredPosts : allPosts;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <Layout>
      <Seo title="Blog" />
      <BlogImg>
        <div className={bg_img}>
          <div
            data-sal="fade"
            data-sal-delay="100"
            data-sal-duration="1000"
            className={content}
          >
            <h2>
              Descubre y aprende <br /> todo sobre nuestros perros
            </h2>
            <p style={{ color: "white" }}>
              Un contenido quincenal para convertirte en un experto.
            </p>
            <SubscribeComponent />
          </div>
        </div>
      </BlogImg>
      <div className={container} style={{ paddingTop: "6rem" }}>
        <div className={search_absolute}>
          <div className={search_container}>
            <input
              type="text"
              aria-label="Buscar"
              placeholder="Buscar"
              value={state.query}
              onChange={handleInputChange}
            />
            <img src={searchIcon} alt="search" />
          </div>
        </div>
        <span className={span}>Un mundo por descubrir.</span>
        <h2>Últimos artículos</h2>
        <div className={post_flex}>
          <Grid>
            <Row>
              {posts.slice(0, 3).map((edge) => {
                const { fields, frontmatter } = edge.node ;
                return (
                  <Col md={4} sm={12} xs={12}>
                    <div className={post} key={fields.slug}>
                      <Link to={fields.slug}>
                        <Img
                          fluid={
                            frontmatter.featuredImage.childImageSharp.fluid
                          }
                        />
                        <h5>{frontmatter.title}</h5>
                      </Link>
                      <Link to={fields.slug}>
                        <button>Leer más</button>
                      </Link>
                    </div>
                  </Col>
                );
              })}
            </Row>
          </Grid>
        </div>
        <AllPosts />
      </div>
    </Layout>
  );
};

// export const query = graphql`
//   query blogQuery {
//     allMarkdownRemark(
//       sort: { fields: [frontmatter___date], order: DESC }
//       filter: { frontmatter: { type: { eq: "blog" } } }
//     ) {
//       edges {
//         node {
//           frontmatter {
//             title
//             path
//             date(formatString: "YYYY MMMM Do")
//             featuredImage {
//               childImageSharp {
//                 fluid(maxWidth: 800) {
//                   ...GatsbyImageSharpFluid
//                 }
//               }
//             }
//           }
//         }
//       }
//     }
//   }
// `;

export const query = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { type: { eq: "blog" } } }
    ) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
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
