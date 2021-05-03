import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import Link from "../../Link";
// import { FormattedMessage, injectIntl } from "gatsby-plugin-intl";
import {
  header,
  header_out,
  navBar,
  menu_fijo,
  menu_fijo_out,
  logo_nav_container,
} from "../header.module.scss";
import Logo from "./logo";

const DesktopHeader = () => {
  const [hideBlackNav, setHideBlackNav] = useState(false);

  useEffect(() => {
    const changeNavColor = () => {
      if (window.scrollY < (20 * window.innerHeight) / 100) {
        setHideBlackNav(false);
      } else {
        setHideBlackNav(true);
      }
    };

    window.addEventListener("scroll", changeNavColor);
  }, []);

  return (
    <header className={hideBlackNav ? header_out : header}>
      <nav className={hideBlackNav ? menu_fijo_out : menu_fijo}>
        <Link id="about" to="/about">
          Qué es Kolyy?
        </Link>
        <Link id="blog" to="/blog">
          Blog
        </Link>
        <Link id="questions" to="/questions">
          Pregúntanos
        </Link>
      </nav>
      <div className={navBar}>
        <nav className={logo_nav_container}>
          <Link id="logo" to="/">
            <Logo />
          </Link>

          <Link id="collar" to="/collar" activeStyle={{ color: "white" }}>
            {/* <FormattedMessage id="nav.about" /> */}
            Collar
          </Link>

          <Link id="app" to="/app" activeStyle={{ color: "white" }}>
            {/* <FormattedMessage id="nav.about" /> */}
            App
          </Link>

          <Link id="placas" to="/placas" activeStyle={{ color: "white" }}>
            {/* <FormattedMessage id="nav.about" /> */}
            Placa QR
          </Link>
        </nav>
        <div>
          <a href="https://app.kolyy.com/" rel="noreferrer" target="_blank">
            <button>
              {" "}
              {/* <FormattedMessage id="nav.shop" /> */}
              Iniciar Sesión
            </button>
          </a>
        </div>
      </div>
    </header>
  );
};

DesktopHeader.propTypes = {
  siteTitle: PropTypes.string,
};

export default DesktopHeader;
