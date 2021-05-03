import React, { useState } from "react";
import { fallDown as Menu } from "react-burger-menu";
// import { FormattedMessage, injectIntl } from "gatsby-plugin-intl";
import "./burger.css";
import Logo from "./logo";
import Link from "../../Link";
import Language from "../../language";
import PhoneIcon from "../../../images/svg/PHONE.svg";

const Burger = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleStateChange = (state) => {
    setMenuOpen(state.isOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <>
      {/* <div className="hideBar"></div> */}
      <Menu
        right
        isOpen={menuOpen}
        onStateChange={(state) => handleStateChange(state)}
      >
        <div className="logo-menu">
          <Logo />
        </div>
        <nav className="bm-item-list">
          <Link className="menu-item" id="collar" to="/collar" >
            <div
              role="link"
              className="anchor-div"
              onClick={() => {
                closeMenu();
              }}
              onKeyDown={() => {
                closeMenu();
              }}
              tabIndex={0}
            >
              {" "}
              {/* <FormattedMessage id="nav.mobileServices" /> */}
              The Collar
            </div>
          </Link>
          {/* <hr /> */}
          <Link id="app" to="/app" className="menu-item">
            <div
              role="link"
              className="anchor-div"
              onClick={() => {
                closeMenu();
              }}
              onKeyDown={() => {
                closeMenu();
              }}
              tabIndex={0}
            >
              {" "}
              {/* <FormattedMessage id="nav.about" /> */}
              The App
            </div>
          </Link>
          {/* <hr /> */}
          <Link id="placas" to="/placas" className="menu-item">
            <div
              role="link"
              className="anchor-div"
              onClick={() => {
                closeMenu();
              }}
              onKeyDown={() => {
                closeMenu();
              }}
              tabIndex={0}
            >
              {" "}
              {/* <FormattedMessage id="nav.about" /> */}
              QR Tags
            </div>
          </Link>
          {/* <hr /> */}
          <Link id="about" to="/about" className="menu-item">
            <div
              role="link"
              className="anchor-div"
              onClick={() => {
                closeMenu();
              }}
              onKeyDown={() => {
                closeMenu();
              }}
              tabIndex={0}
            >
              {" "}
              {/* <FormattedMessage id="nav.about" /> */}
              About
            </div>
          </Link>
          {/* <hr /> */}
          <Link id="blog" to="/blog" className="menu-item">
            <div
              role="link"
              className="anchor-div"
              onClick={() => {
                closeMenu();
              }}
              onKeyDown={() => {
                closeMenu();
              }}
              tabIndex={0}
            >
              {" "}
              {/* <FormattedMessage id="nav.about" /> */}
              Blog
            </div>
          </Link>
          {/* <hr /> */}
          <Link id="questions" to="/questions" className="menu-item">
            <div
              role="link"
              className="anchor-div"
              onClick={() => {
                closeMenu();
              }}
              onKeyDown={() => {
                closeMenu();
              }}
              tabIndex={0}
            >
              {" "}
              {/* <FormattedMessage id="nav.about" /> */}
              Questions
            </div>
          </Link>
          {/* <hr /> */}
        </nav>
        <div className="follow-container">
        <div className="language-container">
          <Language />
          {/* <hr /> */}
          <div className="contact-flex">
            <PhoneIcon />
            <a href="tel:+41313019439" rel="noreferrer" target="_blank">+41 31 301 94 39</a>
          </div>
        </div>
        </div>
      </Menu>
    </>
  );
};

export default Burger;
