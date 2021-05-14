import React from "react";
import Logo from "../header/components/logo";
import { Link } from "gatsby";
import {
  container,
  flex_container,
  logo_text,
  contact,
  privacity_container,
  media_list,
  flex_footer_lang,
} from "./footer.module.scss";
import { FormattedMessage, injectIntl } from "gatsby-plugin-intl";

import instaIcon from "../../images/icons/insta.png";
import facebookIcon from "../../images/icons/facebook.png";
import linkedinIcon from "../../images/icons/linkedin.png";
import twitterIcon from "../../images/icons/twitter.png";

import Language from "../language";
import Contacts from "./components/contacts";

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
          <ul className={media_list}>
            <li>
              <a
                href="https://www.instagram.com/kolyy_official/"
                rel="noreferrer"
                target="_blank"
              >
                <img src={instaIcon} alt="instagram" />
              </a>
            </li>
            <li>
              <a
                href="https://www.facebook.com/kolyyofficial/"
                rel="noreferrer"
                target="_blank"
              >
                <img src={facebookIcon} alt="facebook" />
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/company/petki/"
                rel="noreferrer"
                target="_blank"
              >
                <img src={linkedinIcon} alt="linkedin" />
              </a>
            </li>
            <li>
              <a
                href="https://twitter.com/Kolyy_official"
                rel="noreferrer"
                target="_blank"
              >
                <img src={twitterIcon} alt="twitter" />
              </a>
            </li>
          </ul>
        </div>
        <div className={contact}>
          <h3>
            <FormattedMessage id="footer.title" />
          </h3>
          <button>
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
        <div className={privacity_container}>
          <p>Politica de privacidad</p>
          <p>Aviso Legal</p>
          <p>Política de Cookies</p>
        </div>
        <div className={flex_footer_lang}>
          <Language />
          {/* <div className={copyright}>
            <p>
              <FormattedMessage id="footer.copyright" />
            </p>
          </div> */}
        </div>
      </div>
    </div>
    // </div>
  );
};

export default injectIntl(FooterDesktop);
