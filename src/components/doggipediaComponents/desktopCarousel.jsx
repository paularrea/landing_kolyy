import React from "react";
import OwlCarousel from "react-owl-carousel";
import { Link } from "gatsby";
import Img from "gatsby-image";
import "../../styles/carousel.css";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

const DesktopCarousel = ({ posts }) => {
  return (
    <>
      <OwlCarousel
        className="owl-theme"
        items={5}
        loop
        margin={10}
        nav={true}
        dots={false}
      >
        {posts.map((edge) => {
          const { frontmatter, fields } = edge.node;
          return (
            <div className="item" key={fields && fields.slug}>
              <Link to={fields && fields.slug}>
                <Img fluid={frontmatter.featuredImage.childImageSharp.fluid} />
              </Link>
            </div>
          );
        })}
      </OwlCarousel>
      {posts.length === 0 && (
        <>
          <h3>
            Estamos trabajando para tener la Doggipedia al completo, hasta
            entonces te sugerimos estas razas
          </h3>
        </>
      )}
    </>
  );
};

export default DesktopCarousel;
