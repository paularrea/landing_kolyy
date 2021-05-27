import React, { useState } from "react";
import { fallDown as Menu } from "react-burger-menu";
import { FormattedMessage, injectIntl } from "gatsby-plugin-intl";
import "./burger.css";
import Logo from "./logo";
import Link from "../../Link";
import Language from "../../language";
import menuArrow from "../../../images/icons/menuArrow.png";

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
      <Menu
        right
        isOpen={menuOpen}
        onStateChange={(state) => handleStateChange(state)}
      >
        <Link id="home" to="/">
          <div className="logo-menu">
            <Logo />
          </div>
        </Link>
        <div className="flex-btns">
          <Link id="book" to="/book">
            <button>
              <FormattedMessage id="nav.book" />
            </button>
          </Link>
          <a href="https://app.kolyy.com/" rel="noreferrer" target="_blank">
            <button className="gray">
              <FormattedMessage id="nav.login" />
            </button>
          </a>
        </div>
        <nav className="bm-item-list">
          <Link className="menu-item" id="collar" to="/collar">
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
              <FormattedMessage id="nav.collar" />
              <img src={menuArrow} alt="Collar" />
            </div>
          </Link>

          <Link
            id="zero-perros-perdidos"
            to="/zero-perros-perdidos"
            className="menu-item"
          >
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
              <FormattedMessage id="nav.placa" />
              <img src={menuArrow} alt="#0perrosPerdidos" />
            </div>
          </Link>

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
              <FormattedMessage id="nav.about" />
              <img src={menuArrow} alt="About" />
            </div>
          </Link>
          <Link id="doggipedia" to="/doggipedia" className="menu-item">
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
              <FormattedMessage id="nav.doggipedia" />
              <img src={menuArrow} alt="doggipedia" />
            </div>
          </Link>
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
              <FormattedMessage id="nav.blog" />
              <img src={menuArrow} alt="blog" />
            </div>
          </Link>
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
              <FormattedMessage id="nav.questions" />
              <img src={menuArrow} alt="contact" />
            </div>
          </Link>
        </nav>
        <div className="language-container">
          <Language />
        </div>
      </Menu>
    </>
  );
};

export default injectIntl(Burger);
