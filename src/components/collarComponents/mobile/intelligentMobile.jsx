import React from "react";
import {
  container_gps,
  absolute_title,
  text_container,
  img_container,
  title_text,
  features,
  flex_feature,
} from "../../../styles/collar.module.scss";
import MediaQuery from "react-responsive";
import IntelligentImg from "../img/intelligentImg";
import star from "../../../images/icons/star.png"

const IntelligentMobile = () => {
  return (
    <MediaQuery maxWidth={600}>
      <div className={container_gps}>
        <div className={text_container}>
          <div className={title_text}>
            <div className={absolute_title}>
              <span data-sal="fade" data-sal-delay="100" data-sal-duration="1000">Prevenir antes que curar.</span>
            </div>
            <h2 data-sal="slide-up" data-sal-delay="100" data-sal-duration="1000">Anticípate a los problemas.</h2>
            <p data-sal="slide-up" data-sal-delay="100" data-sal-duration="1000">
              Kolyy es un collar inteligente que aprende los niveles de
              actividad y hábitos de tu perro para que puedas controlar si hay
              una alteración o anomalía y tomar la mejor decisión antes de que
              sea demasiado tarde.
            </p>
          </div>
        </div>
      </div>
      <div className={img_container}>
        <IntelligentImg />
      </div>
      <div className={container_gps}>
        <div className={text_container}>
          <div className={features} style={{ marginRight: "0" }}>
            <div data-sal="slide-up" data-sal-delay="100" data-sal-duration="1000" className={flex_feature}>
              <div>
                <img src={star} alt="star point" />
              </div>
              <h5>Registro de tiempo tumbado.</h5>
            </div>
            <div data-sal="slide-up" data-sal-delay="100" data-sal-duration="1000" className={flex_feature}>
              <div>
                <img src={star} alt="star point" />
              </div>
              <h5>Registro de horas de sueño.</h5>
            </div>
            <div data-sal="slide-up" data-sal-delay="100" data-sal-duration="1000" className={flex_feature}>
              <div>
                <img src={star} alt="star point" />
              </div>
              <h5>Sensor de rascado.</h5>
            </div>
          </div>
        </div>
      </div>
    </MediaQuery>
  );
};

export default IntelligentMobile;
