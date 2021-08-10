import React from "react";
import OwlCarousel from "react-owl-carousel";
import { Link } from "gatsby";
import Img from "gatsby-image";
import "../../styles/carousel.css"
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

const DesktopCarousel = ({ posts }) => {
  return (
    <OwlCarousel className="owl-theme" mouseDrag touchDrag items={5} loop margin={10} nav={true} dots={false}>
      {posts.map((edge) => {
        const { frontmatter, fields } = edge.node;
        return (
          <div className='item' key={fields && fields.slug}>
            <Link to={fields && fields.slug}>
              <Img fluid={frontmatter.featuredImage.childImageSharp.fluid} />
            </Link>
          </div>
        );
      })}
    </OwlCarousel>
  );
};

export default DesktopCarousel;
