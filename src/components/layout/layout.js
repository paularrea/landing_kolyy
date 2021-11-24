import React from "react";
import PropTypes from "prop-types";
import { useStaticQuery, graphql } from "gatsby";
// import { injectIntl } from "gatsby-plugin-intl";
import Header from "../header/header";
import Footer from "../footer/footer";
import { page } from "./layout.module.scss";

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  if (typeof window !== "undefined") {
    require("smooth-scroll")('a[href*="#"]');
  }

  return (
    <>
      <Header
        siteTitle={data.site.siteMetadata?.title || `Collar inteligente Kolyy`}
      />
      <main className={page}>{children}</main>
      <Footer />
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
