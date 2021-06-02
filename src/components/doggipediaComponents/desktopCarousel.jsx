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
        const { frontmatter } = edge.node;
        return (
          <div className='item' key={frontmatter.path}>
            <Link to={frontmatter.path}>
              <Img fluid={frontmatter.featuredImage.childImageSharp.fluid} />
            </Link>
            <Link to={frontmatter.path}></Link>
          </div>
        );
      })}
    </OwlCarousel>
  );
};

export default DesktopCarousel;
