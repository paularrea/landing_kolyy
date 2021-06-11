import React from "react";
import Logo from "../header/components/logo";
import { Link } from "gatsby";
import {
  container,
  flex_container,
  logo_text,
  contact,
  intro,
  flex_footer_lang,
} from "./footer.module.scss";

import Language from "../language";
import Contacts from "./components/contacts";
import MediaList from "./components/mediaList";
import Privacity from "./components/privacity";
import PageLinks from "./components/pageLinks";

const FooterDesktop = () => {
  if (typeof window !== "undefined") {
    require("smooth-scroll")('a[href*="#"]');
  }
  return (
    <div className={container}>
      <div className={flex_container}>
        <div className={logo_text}>
          <div className={intro}>
            <Link to="/">
              <Logo />
            </Link>
            <p>
              {/* <FormattedMessage id="footer.text" /> */}
              Revoluciona la conexión con tu perro.
            </p>
          </div>
          <PageLinks />
        </div>

        <div className={contact}>
          <h4>
            {/* <FormattedMessage id="footer.title" /> */}
            ¿Tienes alguna pregunta?
          </h4>
          <button style={{ fontSize: "13px" }}>
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
          <p style={{ marginTop: "3rem", padding: 0 }}>
            Síguenos en <b>@kolyy_official</b>
          </p>
          <MediaList />
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

export default FooterDesktop;
