import React, { useState, useEffect } from "react";
import { Link } from "gatsby";
import PropTypes from "prop-types";
import MediaQuery from "react-responsive";
import DesktopHeader from "./components/DesktopHeader";
// import { FormattedMessage, injectIntl } from "gatsby-plugin-intl";
import { navBar, burger, flex_nav_btn } from "./header.module.scss";
import Logo from "./components/logo";
import Burger from "./components/burger";
import SubHeader from "./components/SubHeader/SubHeader";

const Header = () => {
  const [isInLanding, setIsInLanding] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const url = window.location.href;
      url.indexOf("collar-para-cuidar-mi-perro") > -1 && setIsInLanding(true);
    }
  }, []);

  return (
    <>
      <MediaQuery maxWidth={900}>
        <header>
          <div className={navBar}>
            <div>
              <Link to="/collar-para-cuidar-mi-perro">
                <Logo />
              </Link>
            </div>
            <div className={flex_nav_btn}>
              <button style={{ backgroundColor: "transparent" }}>
                <p
                  style={{
                    color: "#30AAAA",
                    fontSize: "14px",
                  }}
                >
                  <b>Ahorra el 30%</b>
                </p>
              </button>
              <Link to="/comprar-collar-kolyy">
                <button>Comprar Ya</button>
              </Link>
              <div className={burger}>
                <Burger />
              </div>
            </div>
          </div>
          {isInLanding && <SubHeader />}
        </header>
      </MediaQuery>
      <MediaQuery minWidth={900}>
        <DesktopHeader isInLanding={isInLanding} />
      </MediaQuery>
    </>
  );
};

Header.propTypes = {
  siteTitle: PropTypes.string,
};

export default Header;
