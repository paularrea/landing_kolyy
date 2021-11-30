import React, { useState } from "react";
import { fallDown as Menu } from "react-burger-menu";
import "./burger.css";
import Logo from "./logo";
import Link from "../../Link";
// import Language from "../../language";
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
        <Link id="home" to="/collar-para-cuidar-mi-perro">
          <div className="logo-menu">
            <Logo />
          </div>
        </Link>
        <div className="flex-btns">
          <Link id="reserva" to="/comprar-collar-kolyy">
            <button>
              Compra
            </button>
          </Link>
        </div>
        <nav className="bm-item-list">
          <Link className="menu-item" id="collar-perro" to="/">
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
              Collar
              <img src={menuArrow} alt="collar flecha" />
            </div>
          </Link>

          <Link id="razas-de-perro" to="/razas-de-perro" className="menu-item">
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
              Conoce a tu perro
              <img src={menuArrow} alt="doggipedia" />
            </div>
          </Link>
          <Link id="blog" to="/blog-para-perros" className="menu-item">
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
              Blog
              <img src={menuArrow} alt="blog" />
            </div>
          </Link>
          <Link id="contacto" to="/contacto" className="menu-item">
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
              Pregúntanos
              <img src={menuArrow} alt="contact" />
            </div>
          </Link>
        </nav>
      </Menu>
    </>
  );
};

export default Burger;
