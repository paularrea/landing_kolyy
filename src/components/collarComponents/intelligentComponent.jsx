import React from "react";
import {
  container_gps,
  absolute_title,
  text_container,
  img_container,
  title_text,
  features,
  flex_feature,
} from "../../styles/collar.module.scss";
import MediaQuery from "react-responsive";
import IntelligentMobile from "./mobile/intelligentMobile";
import IntelligentImg from "./img/intelligentImg";

const InteligentComponent = () => {
  return (
    <>
      <MediaQuery minWidth={600}>
        <div className={container_gps}>
          <div className={text_container}>
            <div className={title_text}>
              <div className={absolute_title}>
                <span>Prevenir antes que curar.</span>
              </div>
              <h2>Anticípate a los problemas.</h2>
              <p>
                Kolyy es un collar inteligente que aprende los niveles de
                actividad y hábitos de tu perro para que puedas controlar si hay
                una alteración o anomalía y tomar la mejor decisión antes de que
                sea demasiado tarde.
              </p>
            </div>
            <div className={features} style={{ marginRight: "2rem" }}>
              <div className={flex_feature}>
                <div>*</div>
                <h5>Registro de tiempo tumbado.</h5>
              </div>
              <div className={flex_feature}>
                <div>*</div>
                <h5>Registro de horas de sueño.</h5>
              </div>
              <div className={flex_feature}>
                <div>*</div>
                <h5>Sensor de rascado.</h5>
              </div>
            </div>
          </div>
          <div className={img_container}>
            <IntelligentImg />
          </div>
        </div>
      </MediaQuery>
      <IntelligentMobile />
    </>
  );
};

export default InteligentComponent;
