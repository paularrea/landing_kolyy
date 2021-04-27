import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import Link from "../../Link";
import { FormattedMessage, injectIntl } from "gatsby-plugin-intl";
import {navBar, logo_nav_container, } from "../header.module.scss"
import Logo from "./logo";
// import GoTopHover from "../../../images/svg/gototop2.svg";

const DesktopHeader = () => {
  // const [goTopApear, setGoTopApear] = useState(false);
  // const [hover, setHover] = useState(false);
  const [homeActive, setHomeActive] = useState(false);
  const [servicesActive, setServicesActive] = useState(false);

  useEffect(() => {
    const setActiveStyle = () => {
      if (window.location.href.indexOf("/about") === -1) {
        if (window.scrollY < (75 * window.innerHeight) / 100) {
          setHomeActive(true);
          setServicesActive(false);
        } else if (window.scrollY > (75 * window.innerHeight) / 100) {
          setHomeActive(false);
          setServicesActive(true);
        }
      } else if (window.location.href.indexOf("/about") > -1) {
        setHomeActive(false);
        setServicesActive(false);
      }
    };
    window.addEventListener("scroll", setActiveStyle);
  }, []);

  // useEffect(() => {
  //   const getGoTopButton = () => {
  //     if (window.scrollY < (30 * window.innerHeight) / 100) {
  //       setGoTopApear(false);
  //     } else {
  //       setGoTopApear(true);
  //     }
  //   };
  //   window.addEventListener("scroll", getGoTopButton);
  // }, []);

  // const scrollTop = () => {
  //   window.scrollTo({ top: 0, behavior: "smooth" });
  // };

  return (
    <header>
      <div className={navBar}>
        <nav className={logo_nav_container}>
          <Link id="logo" to="/">
            <Logo />
          </Link>

          <Link id="how-it-works" to="/how-it-works" activeStyle={{ color: "white" }}>
            {/* <FormattedMessage id="nav.about" /> */}
            How it works?
          </Link>

          <Link id="team" to="/team" activeStyle={{ color: "white" }}>
            {/* <FormattedMessage id="nav.about" /> */}
            Team
          </Link>
        </nav>
        <div>
          <a
            href="https://app.kolyy.com/"
            rel="noreferrer"
            target="_blank"
          >
            <button>
              {" "}
              {/* <FormattedMessage id="nav.shop" /> */}
              Iniciar Sesión
            </button>
          </a>
        </div>
        {/* <div
          className={
            goTopApear ? go_top_button : go_top_button_disabled
          }
          role="button"
          tabIndex={0}
          onMouseEnter={() => setHover(true)}
          onFocus={() => setHover(true)}
          onMouseLeave={() => setHover(false)}
          onBlur={() => setHover(false)}
        >
          {hover ? (
            <GoTopHover className={svg} onClick={scrollTop} />
          ) : (
            <GoTopHover className={svg} onClick={scrollTop} />
          )}
        </div> */}
      </div>
    </header>
  );
};

DesktopHeader.propTypes = {
  siteTitle: PropTypes.string,
};

export default injectIntl(DesktopHeader);
