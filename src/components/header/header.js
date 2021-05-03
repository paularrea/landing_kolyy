import { Link } from "gatsby";
import PropTypes from "prop-types";
import React from "react";
import MediaQuery from "react-responsive";
import DesktopHeader from "./components/desktopHeader";

import {navBar, burger} from "./header.module.scss"
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
          <div className={burger}>
            <Burger />
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
