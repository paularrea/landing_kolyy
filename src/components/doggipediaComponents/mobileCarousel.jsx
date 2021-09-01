import React from "react";
import { Link } from "gatsby";
import Img from "gatsby-image";
import { carousel, doggi_card } from "../../styles/blog.module.scss";

const MobileCarousel = ({ posts, allPosts }) => {
  return (
    <div className={carousel}>
      {posts.map((edge) => {
        const { frontmatter, fields } = edge.node;
        return (
          <div className={doggi_card} key={fields && fields.slug}>
            <Link to={fields && fields.slug}>
              <Img fluid={frontmatter.featuredImage.childImageSharp.fluid} />
            </Link>
          </div>
        );
      })}
      {posts.length === 0 && (
        <>
          <div>
            <h3>
              Estamos trabajando para tener la Doggipedia al completo, hasta
              entonces te sugerimos estas razas
            </h3>
          </div>

          {allPosts.map((edge) => {
            const { frontmatter, fields } = edge.node;
            return (
              <div className={doggi_card} key={fields && fields.slug}>
                <Link to={fields && fields.slug}>
                  <Img
                    fluid={frontmatter.featuredImage.childImageSharp.fluid}
                  />
                </Link>
              </div>
            );
          })}
        </>
      )}
    </div>
  );
};

export default MobileCarousel;
