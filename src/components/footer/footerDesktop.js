import React from "react";
import Logo from "../header/components/logo";
import { Link } from "gatsby";
import {
  // big_container,
  container,
  flex_container,
  logo_text,
  contact,
  contact_div,
  contact_icons,
  privacity_container,
  media_list,
  flex_footer_lang,
} from "./footer.module.scss";
import { FormattedMessage, injectIntl } from "gatsby-plugin-intl";

import LinkedInIcon from "../../images/svg/Linkedin_icon.svg";
import FacebookIcon from "../../images/svg/Facebook_icon.svg";
import TwitterIcon from "../../images/svg/Twitter_icon.svg";
import InstagramIcon from "../../images/svg/Instagram_icon.svg";

import LocationIcon from "../../images/svg/LOCATION.svg";
import MailIcon from "../../images/svg/MAIL.svg";
import PhoneIcon from "../../images/svg/PHONE.svg";
import Language from "../language";

const FooterDesktop = () => {
  if (typeof window !== "undefined") {
    require("smooth-scroll")('a[href*="#"]');
  }
  return (
    // <div className={big_container}>
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
                <InstagramIcon />
              </a>
            </li>
            <li>
              <a
                href="https://www.facebook.com/victoryswitzerland/"
                rel="noreferrer"
                target="_blank"
              >
                <FacebookIcon />
              </a>
            </li>
            <li>
              <a
                href="https://twitter.com/Kolyy_official"
                rel="noreferrer"
                target="_blank"
              >
                <TwitterIcon />
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/company/petki/"
                rel="noreferrer"
                target="_blank"
              >
                <LinkedInIcon />
              </a>
            </li>
          </ul>
        </div>
        <div className={contact}>
          <h3>
            <FormattedMessage id="footer.title" />
          </h3>
          <button>
            <a href="mailto:hola@kolyy.com" rel="noreferrer" target="_blank">
              Escríbenos
            </a>
          </button>
          <div className={contact_div}>
            <div className={contact_icons}>
              <LocationIcon />
            </div>
            <div>
              <a
                href="https://www.google.es/maps/place/Monestir+de+Sant+Cugat/@41.4711808,2.0774912,14z/data=!4m5!3m4!1s0x12a496c29669f9f3:0x720371f63bb694b7!8m2!3d41.4736491!4d2.0849934"
                rel="noreferrer"
                target="_blank"
              >
                Sant Cugat, Vallès Occidental, Spain
              </a>
            </div>
          </div>
          <div className={contact_div}>
            <div className={contact_icons}>
              <PhoneIcon />
            </div>
            <div>
              <a href="tel:+41313019439">+34 66 666 66 66</a>
            </div>
          </div>
          <div className={contact_div}>
            <div className={contact_icons}>
              <MailIcon />
            </div>
            <div>
              <a href="mailto:hola@kolyy.com" rel="noreferrer" target="_blank">
                hola@kolyy.com
              </a>
            </div>
          </div>
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
