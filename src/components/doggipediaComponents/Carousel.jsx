import React from "react";
import { Link } from "gatsby";
import Img from "gatsby-image";
import "../../styles/carousel.css";
import Carousel from "react-grid-carousel";

const CarouselComponent = ({ posts, allPosts }) => {
  const hideArrows = posts.length === 0 ? true : false
  return (
    <>
      <Carousel cols={5} rows={1} gap={20} autoplay={4000} hideArrow={hideArrows} loop showDots dotColorActive='#21A7AA'>
        {posts.map((edge) => {
          const { frontmatter, fields } = edge.node;
          return (
            <Carousel.Item>
              <div className="item" key={fields && fields.slug}>
                        <Link to={fields && fields.slug}>
                  <Img
                    fluid={frontmatter.featuredImage.childImageSharp.fluid}
                  />
                </Link>
              </div>
            </Carousel.Item>
          );
        })}
      </Carousel>
      {posts.length === 0 && (
        <>
          <h3 style={{margin:'0 auto',marginBottom:'2rem', width:'90vw'}}>
            Estamos trabajando para tener la Doggipedia al completo, hasta
            entonces te sugerimos estas razas:
          </h3>
          <Carousel cols={5} rows={1} gap={20} autoplay={4000} loop showDots dotColorActive='#21A7AA'>
        {allPosts.map((edge) => {
          const { frontmatter, fields } = edge.node;
          return (
            <Carousel.Item>
              <div className="item" key={fields && fields.slug}>
                        <Link to={fields && fields.slug}>
                  <Img
                    fluid={frontmatter.featuredImage.childImageSharp.fluid}
                  />
                </Link>
              </div>
            </Carousel.Item>
          );
        })}
      </Carousel>
        </>
      )}
    </>
  );
};

export default CarouselComponent;
