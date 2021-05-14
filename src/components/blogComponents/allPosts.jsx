import React, { useState } from "react";
import { Link, graphql, useStaticQuery } from "gatsby";
import { Grid, Row, Col } from "react-flexbox-grid";
import Img from "gatsby-image";
import {
  post_flex,
  filter_menu,
  filter_container,
  posts_content,
  tab,
  tabTitle,
  select_style,
  disabled_style,
  filter_post,
  hide,
} from "../../styles/blog.module.scss";
import InstagramPosts from "./instagramPosts";

const AllPosts = () => {
  const [selected, setSelectedTab] = useState(1);
  const onClickTab = (value) => setSelectedTab(value);

  const data = useStaticQuery(graphql`
    query filteredPosts {
      all: allMarkdownRemark(
        sort: { fields: [frontmatter___date], order: DESC }
      ) {
        edges {
          node {
            frontmatter {
              title
              path
              date(formatString: "YYYY MMMM Do")
              featuredImage {
                childImageSharp {
                  fluid(maxWidth: 1000) {
                    ...GatsbyImageSharpFluid
                  }
                }
              }
            }
          }
        }
      }
      salud: allMarkdownRemark(
        sort: { fields: [frontmatter___date], order: DESC }
        filter: { frontmatter: { collection: { eq: "salud" } } }
      ) {
        edges {
          node {
            frontmatter {
              title
              path
              date(formatString: "YYYY MMMM Do")
              featuredImage {
                childImageSharp {
                  fluid(maxWidth: 1000) {
                    ...GatsbyImageSharpFluid
                  }
                }
              }
            }
          }
        }
      }
      educacion: allMarkdownRemark(
        sort: { fields: [frontmatter___date], order: DESC }
        filter: { frontmatter: { collection: { eq: "educacion" } } }
      ) {
        edges {
          node {
            frontmatter {
              title
              path
              date(formatString: "YYYY MMMM Do")
              featuredImage {
                childImageSharp {
                  fluid(maxWidth: 1000) {
                    ...GatsbyImageSharpFluid
                  }
                }
              }
            }
          }
        }
      }
      curiosidades: allMarkdownRemark(
        sort: { fields: [frontmatter___date], order: DESC }
        filter: { frontmatter: { collection: { eq: "curiosidades" } } }
      ) {
        edges {
          node {
            frontmatter {
              title
              path
              date(formatString: "YYYY MMMM Do")
              featuredImage {
                childImageSharp {
                  fluid(maxWidth: 1000) {
                    ...GatsbyImageSharpFluid
                  }
                }
              }
            }
          }
        }
      }
    }
  `);

  const allPosts = (
    <Grid>
      <Row>
        {data.all.edges.map((edge) => {
          const { frontmatter } = edge.node;
          return (
            <Col md={4} sm={6} xs={6}>
              <div className={filter_post} key={frontmatter.path}>
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
            </Col>
          );
        })}
      </Row>
    </Grid>
  );

  const saludPosts = (
    <Grid>
      <Row>
        {data.salud.edges.map((edge) => {
          const { frontmatter } = edge.node;
          return (
            <Col md={4} sm={6} xs={6}>
              <div className={filter_post} key={frontmatter.path}>
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
            </Col>
          );
        })}
      </Row>
    </Grid>
  );

  const educacionPosts = (
    <Grid>
      <Row>
        {data.educacion.edges.map((edge) => {
          const { frontmatter } = edge.node;
          return (
            <Col md={4} sm={6} xs={6}>
              <div className={filter_post} key={frontmatter.path}>
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
            </Col>
          );
        })}
      </Row>
    </Grid>
  );

  const curiosidadesPosts = (
    <Grid>
      <Row>
        {data.curiosidades.edges.map((edge) => {
          const { frontmatter } = edge.node;
          return (
            <Col md={4} sm={6} xs={6}>
              <div className={filter_post} key={frontmatter.path}>
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
            </Col>
          );
        })}
      </Row>
    </Grid>
  );

  return (
    <div className={filter_container}>
      <div className={filter_menu}>
        <a
          aria-hidden="true"
          className={tab}
          onClick={() => onClickTab(1)}
          onKeyDown={() => onClickTab(1)}
        >
          <span
            className={`${tabTitle} ${
              selected === 1 ? select_style : disabled_style
            }`}
          >
            Todo
          </span>
        </a>
        <a
          aria-hidden="true"
          className={tab}
          onClick={() => onClickTab(2)}
          onKeyDown={() => onClickTab(2)}
        >
          <span
            className={`${tabTitle} ${
              selected === 2 ? select_style : disabled_style
            }`}
          >
            Salud
          </span>
        </a>
        <a
          aria-hidden="true"
          className={tab}
          onClick={() => onClickTab(3)}
          onKeyDown={() => onClickTab(3)}
        >
          <span
            className={`${tabTitle} ${
              selected === 3 ? select_style : disabled_style
            }`}
          >
            Educación
          </span>
        </a>
        <a
          aria-hidden="true"
          className={tab}
          onClick={() => onClickTab(4)}
          onKeyDown={() => onClickTab(4)}
        >
          <span
            className={`${tabTitle} ${
              selected === 4 ? select_style : disabled_style
            }`}
          >
            Curiosidades
          </span>
        </a>
      </div>
      <div className={posts_content}>
        <div className={`${selected !== 1 ? hide : ""}`}>
          <div className={post_flex}>{allPosts}</div>
        </div>
        <div className={`${selected !== 2 ? hide : ""}`}>
          <div className={post_flex}>{saludPosts}</div>
        </div>
        <div className={`${selected !== 3 ? hide : ""}`}>
          <div className={post_flex}>{educacionPosts}</div>
        </div>
        <div className={`${selected !== 4 ? hide : ""}`}>
          <div className={post_flex}>{curiosidadesPosts}</div>
        </div>
      </div>
      <InstagramPosts/>
    </div>
  );
};

export default AllPosts;
