import React, { useEffect } from "react";
import { graphql, Link } from "gatsby";
import Layout from "../components/layout/layout";
import { Grid, Row, Col } from "react-flexbox-grid";
import Seo from "../components/seo";
import Img from "gatsby-image";
import {
  container,
  bg_img,
  content,
  post_flex,
  post,
} from "../styles/blog.module.scss";

const Doggipedia = ({ data }) => {
  const { edges } = data.allMarkdownRemark;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <Layout>
      <Seo title="Doggipedia" />
      <div style={{backgroundColor:'transparent', height:'500px'}} className={bg_img}>
        <div className={content}>
          <h2>¿Conoces la raza de tu perro?</h2>
          <p>
          Descubre las características y secretos de todas las razas de perros en nuestra Doggipedia.
          </p>
          <p>filter bar</p>
        </div>
      </div>
      <div className={container}>
        <div className={post_flex}>
          <Grid>
            <Row>
              {edges.map((edge) => {
                const { frontmatter } = edge.node;
                return (
                  <Col md={4} sm={12} xs={12}>
                    <div className={post} key={frontmatter.path}>
                      <Link to={frontmatter.path}>
                        <Img
                          fluid={
                            frontmatter.featuredImage.childImageSharp.fluid
                          }
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
