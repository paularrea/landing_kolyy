import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import Link from "../../Link";
// import { FormattedMessage, injectIntl } from "gatsby-plugin-intl";
import {
  header,
  header_out,
  active,
  active_white,
  navBar,
  menu_fijo,
  menu_fijo_out,
  logo_nav_container,
  login_link,
  button_header,
} from "../header.module.scss";
import Logo from "./logo";
import SubHeader from "./SubHeader/SubHeader";

const DesktopHeader = ({isInLanding}) => {
  const [activeBlog, setActiveBlog] = useState(false);
  const [activeDoggipedia, setActiveDoggipedia] = useState(false);
  const [activeQuestions, setActiveQuestions] = useState(false);
  const [hideBlackNav, setHideBlackNav] = useState(false);

  useEffect(() => {
    const changeNavColor = () => {
      if (window.scrollY < (5 * window.innerHeight) / 100) {
        setHideBlackNav(false);
      } else {
        setHideBlackNav(true);
      }
    };
    const isActive = () => {
      const currentURL = window.location.href;
      if (currentURL.indexOf("blog-para-perros") > -1) {
        setActiveBlog(true);
      } else if (currentURL.indexOf("contacto") > -1) {
        setActiveQuestions(true);
      } else if (currentURL.indexOf("razas-de-perro") > -1) {
        setActiveDoggipedia(true);
      }
    };
    isActive();
    window.addEventListener("scroll", changeNavColor);
  }, []);

  return (
    <header className={hideBlackNav ? header_out : header}>
      <nav className={hideBlackNav ? menu_fijo_out : menu_fijo}>
        <Link
          id="razas-de-perro"
          to="/razas-de-perro"
          className={activeDoggipedia && active_white}
        >
          Conoce a tu perro
        </Link>

        <Link
          id="blog"
          to="/blog-para-perros"
          className={activeBlog && active_white}
        >
          Blog
        </Link>
        <Link
          id="contacto"
          to="/contacto"
          className={activeQuestions && active_white}
        >
          Pregúntanos
        </Link>
      </nav>
      <div className={navBar}>
        <nav className={logo_nav_container}>
          <Link id="logo" to="/collar-para-cuidar-mi-perro">
            <Logo />
          </Link>
        </nav>
        <div>
          <button style={{ backgroundColor: "transparent" }}>
            <p style={{ color: "#30AAAA", fontSize: "14px" }}>
              <b>Ahorra el 30%</b>
            </p>
          </button>
          <Link to="/comprar-collar-kolyy">
            <button>Comprar Ya</button>
          </Link>
        </div>
      </div>
      {isInLanding && <SubHeader />}
    </header>
  );
};

DesktopHeader.propTypes = {
  siteTitle: PropTypes.string,
};

export default DesktopHeader;
