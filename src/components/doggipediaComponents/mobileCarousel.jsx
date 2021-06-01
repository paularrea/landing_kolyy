import React from "react";
import { Link } from "gatsby";
import Img from "gatsby-image";
import {
    carousel,
    doggi_card,
  } from "../../styles/blog.module.scss";

const MobileCarousel = ({posts}) => {
  return (
    <div className={carousel}>
      {posts.map((edge) => {
        const { frontmatter } = edge.node;
        return (
          <div className={doggi_card} key={frontmatter.path}>
            <Link to={frontmatter.path}>
              <Img fluid={frontmatter.featuredImage.childImageSharp.fluid} />
            </Link>
            <Link to={frontmatter.path}></Link>
          </div>
        );
      })}
    </div>
  );
};

export default MobileCarousel;
