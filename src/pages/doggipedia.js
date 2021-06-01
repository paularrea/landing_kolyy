import React, { useEffect, useState } from "react";
import { graphql } from "gatsby";
import Layout from "../components/layout/layout";
import Seo from "../components/seo";
import loadable from "@loadable/component";
import MediaQuery from "react-responsive";
import {
  container,
  bg_img,
  content_doggi,
  search_container,
} from "../styles/blog.module.scss";

import searchIcon from "../images/icons/search.png";
import MobileCarousel from "../components/doggipediaComponents/mobileCarousel";

const DesktopCarousel = loadable(() =>
  import("../components/doggipediaComponents/desktopCarousel")
);

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
        style={{
          backgroundColor: "transparent",
          height: "50vh",
          paddingTop: "3rem",
        }}
        className={bg_img}
      >
        <div className={content_doggi}>
          <h2 style={{ color: "black" }}>¿Conoces la raza de tu perro?</h2>
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
        <MediaQuery minWidth={751}>
          <DesktopCarousel posts={posts} />
        </MediaQuery>
        <MediaQuery maxWidth={750}>
          <MobileCarousel posts={posts}  />
        </MediaQuery>
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
