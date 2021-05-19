import React from "react";
import Logo from "../header/components/logo";
import MediaQuery from "react-responsive";
import { FormattedMessage, injectIntl } from "gatsby-plugin-intl";
import {
  container,
  contact,
  media_container,
  copyright,
} from "./footer.module.scss";

import FooterDesktop from "./footerDesktop";
import Language from "../language";
import Contacts from "./components/contacts";
import MediaList from "./components/mediaList";
import Privacity from "./components/privacity";

const Footer = () => {
  return (
    <>
      <MediaQuery maxWidth={800}>
        <div className={container}>
          <Logo />
          <p>
            <FormattedMessage id="footer.text" />
          </p>
          <div className={contact}>
            <h3>
              <FormattedMessage id="footer.title" />
            </h3>
            <Contacts />
          </div>
          <Language />
          <div className={media_container}>
            <h3>
              <FormattedMessage id="footer.media" />
            </h3>
            <MediaList />
          </div>
          <Privacity />
        </div>
      </MediaQuery>
      <MediaQuery minWidth={800}>
        <FooterDesktop />
      </MediaQuery>
    </>
  );
};

export default injectIntl(Footer);
