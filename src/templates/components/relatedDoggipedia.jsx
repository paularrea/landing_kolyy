import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import loadable from "@loadable/component";
import {
  posts_content,
  post_flex,
} from "../../styles/blog.module.scss";
import MediaQuery from "react-responsive";
import MobileCarousel from "../../components/doggipediaComponents/mobileCarousel";

const DesktopCarousel = loadable(() =>
  import("../../components/doggipediaComponents/desktopCarousel")
);

const RelatedDoggipedia = () => {
  const data = useStaticQuery(graphql`
    query relatedDoggipediaPosts {
      all: allMarkdownRemark(
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

  const posts = data.all.edges;


  return (
    <div>
      <div className={posts_content}>
        <div className={post_flex}>
        <MediaQuery minWidth={751}>
          <DesktopCarousel posts={posts} />
        </MediaQuery>
        <MediaQuery maxWidth={750}>
          <MobileCarousel posts={posts}  />
        </MediaQuery>
          </div>
      </div>
    </div>
  );
};

export default RelatedDoggipedia;
