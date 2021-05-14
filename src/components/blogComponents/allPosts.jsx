import React, { useState } from "react";
import { Link, graphql, useStaticQuery } from "gatsby";
// import 'bootstrap/dist/css/bootstrap.min.css'
import {Container, Row, Col} from 'react-bootstrap'
import Img from "gatsby-image";
import {
  post_flex,
  post,
  filter_menu,
  filter_container,
  posts_content,
  tab,
  tabTitle,
  select_style,
  disabled_style,
  hide,
} from "../../styles/blog.module.scss";

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
                  fluid(maxWidth: 800) {
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
                  fluid(maxWidth: 800) {
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
                  fluid(maxWidth: 800) {
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
  `);

  const allPosts = data.all.edges.map((edge) => {
    const { frontmatter } = edge.node;
    return (
      <Container>
        <Row>
          <Col md={4} sm={6} xs={6}>
            <div className={post} key={frontmatter.path}>
              <Link to={frontmatter.path}>
                <Img fluid={frontmatter.featuredImage.childImageSharp.fluid} />
                <h5>{frontmatter.title}</h5>
              </Link>
              <Link to={frontmatter.path}>
                <button>Leer más</button>
              </Link>
            </div>
          </Col>
        </Row>
      </Container>
    );
  });

  const saludPosts = data.salud.edges.map((edge) => {
    const { frontmatter } = edge.node;
    return (
      <Container>
        <Row>
          <Col md={4} sm={6} xs={6}>
            <div className={post} key={frontmatter.path}>
              <Link to={frontmatter.path}>
                <Img fluid={frontmatter.featuredImage.childImageSharp.fluid} />
                <h5>{frontmatter.title}</h5>
              </Link>
              <Link to={frontmatter.path}>
                <button>Leer más</button>
              </Link>
            </div>
          </Col>
        </Row>
      </Container>
    );
  });

  const educacionPosts = data.educacion.edges.map((edge) => {
    const { frontmatter } = edge.node;
    return (
      <Container>
        <Row>
          <Col md={4} sm={6} xs={6}>
            <div className={post} key={frontmatter.path}>
              <Link to={frontmatter.path}>
                <Img fluid={frontmatter.featuredImage.childImageSharp.fluid} />
                <h5>{frontmatter.title}</h5>
              </Link>
              <Link to={frontmatter.path}>
                <button>Leer más</button>
              </Link>
            </div>
          </Col>
        </Row>
      </Container>
    );
  });

  const curiosidadesPosts = data.curiosidades.edges.map((edge) => {
    const { frontmatter } = edge.node;
    return (
      <Container>
        <Row>
          <Col md={4} sm={6} xs={6}>
            <div className={post} key={frontmatter.path}>
              <Link to={frontmatter.path}>
                <Img fluid={frontmatter.featuredImage.childImageSharp.fluid} />
                <h5>{frontmatter.title}</h5>
              </Link>
              <Link to={frontmatter.path}>
                <button>Leer más</button>
              </Link>
            </div>
          </Col>
        </Row>
      </Container>
    );
  });

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
    </div>
  );
};

export default AllPosts;
