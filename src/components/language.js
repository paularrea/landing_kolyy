import React from "react";
import { IntlContextConsumer, changeLocale } from "gatsby-plugin-intl";
import {
  translation_flex,
  translation_item,
} from "../styles/languages.module.scss";

const languageName = {
  en: "EN",
  ca: "CA",
  es: "ES",
};

const Language = () => {
  return (
    <div className={translation_flex}>
      <IntlContextConsumer>
        {({ languages, language: currentLocale }) =>
          languages.map((language) => (
            <div
              role="button"
              tabIndex={0}
              key={language}
              onClick={() => changeLocale(language)}
              onKeyDown={() => changeLocale(language)}
              className={translation_item}
              style={{
                color: currentLocale === language && `white`,
                border:
                  currentLocale === language &&
                  `1px solid rgba(255, 255, 255, 0.637)`,
                cursor: `pointer`,
              }}
            >
              {languageName[language]}
            </div>
          ))
        }
      </IntlContextConsumer>
    </div>
  );
};

export default Language;
