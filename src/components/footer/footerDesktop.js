import React from "react";
import Logo from "../header/components/logo";
import { Link } from "gatsby";
import {
  container,
  flex_container,
  logo_text,
  contact,
  privacity_container,
  flex_footer_lang,
} from "./footer.module.scss";
import { FormattedMessage, injectIntl } from "gatsby-plugin-intl";

import Language from "../language";
import Contacts from "./components/contacts";
import MediaList from "./components/mediaList";
import Privacity from "./components/privacity";

const FooterDesktop = () => {
  if (typeof window !== "undefined") {
    require("smooth-scroll")('a[href*="#"]');
  }
  return (
    <div className={container}>
      <div className={flex_container}>
        <div className={logo_text}>
          <Link to="/">
            <Logo />
          </Link>
          <p>
            <FormattedMessage id="footer.text" />
          </p>
          <h4>Síguenos en @kolyy_official</h4>
          <MediaList />
        </div>
        <div className={contact}>
          <h3>
            <FormattedMessage id="footer.title" />
          </h3>
          <button style={{fontSize:'13px'}}>
            <a
              style={{ color: "white" }}
              href="mailto:hola@kolyy.com"
              rel="noreferrer"
              target="_blank"
            >
              Escríbenos
            </a>
          </button>
          <Contacts />
        </div>
      </div>
      <div className={flex_container}>
        <Privacity />
        <div className={flex_footer_lang}>
          <Language />
        </div>
      </div>
    </div>
  );
};

export default injectIntl(FooterDesktop);
