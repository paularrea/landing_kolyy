import { Link } from "gatsby";
import PropTypes from "prop-types";
import React from "react";
import MediaQuery from "react-responsive";
import DesktopHeader from "./components/DesktopHeader";
// import { FormattedMessage, injectIntl } from "gatsby-plugin-intl";

import { navBar, burger, flex_nav_btn } from "./header.module.scss";
import Logo from "./components/logo";
import Burger from "./components/burger";

const Header = () => (
  <>
    <MediaQuery maxWidth={870}>
      <header>
        <div className={navBar}>
          <div>
            <Link to="/">
              <Logo />
            </Link>
          </div>
          <div className={flex_nav_btn}>
              <button>
            <Link style={{color:'white'}} id="book" to="/reserva">
                {/* <FormattedMessage id="nav.book" /> */}
                Reserva
            </Link>
              </button>
            <div className={burger}>
              <Burger />
            </div>
          </div>
        </div>
      </header>
    </MediaQuery>
    <MediaQuery minWidth={870}>
      {/* <div className={big_container}> */}
      <DesktopHeader />
      {/* </div> */}
    </MediaQuery>
  </>
);

Header.propTypes = {
  siteTitle: PropTypes.string,
};

export default Header;
