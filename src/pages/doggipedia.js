import React, { useEffect, useState } from "react";
import { graphql, Link } from "gatsby";
import Layout from "../components/layout/layout";
import { Grid, Row, Col } from "react-flexbox-grid";
import Seo from "../components/seo";
import Img from "gatsby-image";
import {
  container,
  bg_img,
  content_doggi,
  post_flex,
  search_container,
  post,
} from "../styles/blog.module.scss";

import searchIcon from "../images/icons/search.png";

const Doggipedia = ({ data }) => {
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

  return (
    <Layout>
      <Seo title="Doggipedia" />
      <div
        style={{ backgroundColor: "transparent", height:'50vh', paddingTop:'3rem'}}
        className={bg_img}
      >
        <div className={content_doggi}>
          <h2 style={{color:'black'}}>¿Conoces la raza de tu perro?</h2>
          <p>
            Descubre las características y secretos de todas las razas de perros
            en nuestra Doggipedia.
          </p>
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
      </div>
      <div className={container}>
        <div className={post_flex}>
          <Grid>
            <Row>
              {posts.map((edge) => {
                const { frontmatter } = edge.node;
                return (
                  <Col md={3} sm={6} xs={6}>
                    <div className={post} key={frontmatter.path}>
                      <Link to={frontmatter.path}>
                        <Img
                          fluid={
                            frontmatter.featuredImage.childImageSharp.fluid
                          }
                        />
                        <h5>{frontmatter.title}</h5>
                      </Link>
                      <Link to={frontmatter.path}></Link>
                    </div>
                  </Col>
                );
              })}
            </Row>
          </Grid>
        </div>
      </div>
    </Layout>
  );
};

export const query = graphql`
  query DoggipediaQuery {
    allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { type: { eq: "doggipedia" } } }
    ) {
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

export default Doggipedia;
