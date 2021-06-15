import React from "react";
import { IntlContextConsumer, changeLocale } from "gatsby-plugin-intl";
import {
  translation_flex,
  translation_item,
} from "../styles/languages.module.scss";

const languageName = {
  en: "EN",
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
                color: currentLocale === language && `black`,
                fontWeight: currentLocale === language && `700`,
                // borderBottom: currentLocale === language && `2px solid black`,
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
