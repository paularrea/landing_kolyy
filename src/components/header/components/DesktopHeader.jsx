import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import Link from "../../Link";
import { FormattedMessage, injectIntl } from "gatsby-plugin-intl";
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
} from "../header.module.scss";
import Logo from "./logo";

const DesktopHeader = () => {
  const [activeCollar, setActiveCollar] = useState(false);
  const [activeApp, setActiveApp] = useState(false);
  const [activePlacas, setActivePlacas] = useState(false);
  const [activeAbout, setActiveAbout] = useState(false);
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
      if (currentURL.indexOf("collar") > -1) {
        setActiveCollar(true);
      } else if (currentURL.indexOf("the-app") > -1) {
        setActiveApp(true);
      } else if (currentURL.indexOf("zero-perros-perdidos") > -1) {
        setActivePlacas(true);
      } else if (currentURL.indexOf("about") > -1) {
        setActiveAbout(true);
      } else if (currentURL.indexOf("blog") > -1) {
        setActiveBlog(true);
      } else if (currentURL.indexOf("questions") > -1) {
        setActiveQuestions(true);
      } else if (currentURL.indexOf("doggipedia") > -1) {
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
          id="doggipedia"
          to="/doggipedia"
          className={activeDoggipedia && active_white}
        >
          {/* <FormattedMessage id="nav.blog" /> */}
          Conoce a tu perro
        </Link>

        <Link id="blog" to="/blog" className={activeBlog && active_white}>
          <FormattedMessage id="nav.blog" />
        </Link>
        <Link
          id="questions"
          to="/questions"
          className={activeQuestions && active_white}
        >
          <FormattedMessage id="nav.questions" />
        </Link>
      </nav>
      <div className={navBar}>
        <nav className={logo_nav_container}>
          <Link id="logo" to="/">
            <Logo />
          </Link>

          <Link id="collar" to="/collar" className={activeCollar && active}>
            <FormattedMessage id="nav.collar" />
          </Link>

          <Link id="zero-perros-perdidos" to="/zero-perros-perdidos" className={activePlacas && active}>
            <FormattedMessage id="nav.placa" />
          </Link>

          <Link id="about" to="/about" className={activeAbout && active}>
            <FormattedMessage id="nav.about" />
          </Link>
        </nav>
        <div>
          <a
            className={login_link}
            href="https://app.kolyy.com/"
            rel="noreferrer"
            target="_blank"
          >
            {" "}
            <FormattedMessage id="nav.login" />
          </a>
          <a href="https://app.kolyy.com/" rel="noreferrer" target="_blank">
            <button>
              {" "}
              <FormattedMessage id="nav.book" />
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

export default injectIntl(DesktopHeader);
