import React, { useEffect, useState } from "react";
import { graphql } from "gatsby";
import Layout from "../components/layout/layout";
import Seo from "../components/seo";
import loadable from "@loadable/component";
import {
  container,
  bg_img,
  content_doggi,
  search_container,
} from "../styles/blog.module.scss";

import searchIcon from "../images/icons/search.png";
import CarouselComponent from "../components/doggipediaComponents/Carousel";

const DesktopCarousel = loadable(() =>
  import("../components/doggipediaComponents/desktopCarousel")
);

const Doggipedia = ({ data }) => {
  const [searchDog, setSearchDog] = useState("");

  const handleChange = (event) => {
    setSearchDog(event.target.value);
  };
  const allPosts = data.allMarkdownRemark.edges;
  const posts = !searchDog
    ? allPosts
    : allPosts.filter((post) => {
        const { title } = post.node.frontmatter;
        return title.toLowerCase().includes(searchDog.toLocaleLowerCase());
      });
  console.log(posts, "posts");
  // const [state, setState] = useState({
  //   filteredPosts: [],
  //   query: "",
  // });

  // const allPosts = data.allMarkdownRemark.edges;

  // useEffect(() => {
  //   window.scrollTo(0, 0);
  // }, []);

  // console.log(state, 'query')
  // const handleInputChange = (event) => {
  //   const query = event.target.value;
  //   const filteredPosts = allPosts.filter((post) => {
  //     const { title } = post.node.frontmatter;
  //     return title.toLowerCase().includes(query.toLowerCase());
  //   });
  //   setState({
  //     query,
  //     filteredPosts,
  //   });
  // };

  // const posts = state.query === "" ? allPosts : state.filteredPosts;

  return (
    <Layout>
      <Seo title="Razas de perro" />
      <div
        style={{
          backgroundColor: "transparent",
          height: "auto",
          paddingTop: "5rem",
        }}
        className={bg_img}
      >
        <div
          data-sal="fade"
          data-sal-delay="100"
          data-sal-duration="1000"
          className={content_doggi}
        >
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
              // value={state.query}
              // onChange={handleInputChange}
              value={searchDog}
              onChange={handleChange}
            />
            <img src={searchIcon} alt="search" />
          </div>
        </div>
      </div>
      <div
        data-sal="fade"
        data-sal-delay="100"
        data-sal-duration="1000"
        className={container}
        style={{ marginTop: "2rem" }}
      >
        <CarouselComponent allPosts={allPosts} posts={posts} />
      </div>
    </Layout>
  );
};

// export const query = graphql`
//   query DoggipediaQuery {
//     allMarkdownRemark(
//       sort: { fields: [frontmatter___date], order: DESC }
//       filter: { frontmatter: { type: { eq: "doggipedia" } } }
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
      filter: { frontmatter: { type: { eq: "doggipedia" } } }
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

export default Doggipedia;
