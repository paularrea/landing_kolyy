import React from "react";
import {
  container_gps,
  text_container,
  img_container,
  img_sticky,
  title_text,
  features,
  flex_feature,
} from "../../styles/collar.module.scss";
import MediaQuery from "react-responsive";
import IntelligentMobile from "./mobile/intelligentMobile";
import IntelligentImg from "./img/intelligentImg";
// import star from "../../images/icons/star.png";

const InteligentComponent = () => {
  return (
    <>
      <MediaQuery minWidth={600}>
        <div className={container_gps}>
          <div className={text_container}>
            <div className={title_text}>
              <h2
                data-sal="slide-up"
                data-sal-delay="100"
                data-sal-duration="1000"
              >
                Tu oportunidad para anticiparte a posibles problemas.
              </h2>
              <p
                data-sal="slide-up"
                data-sal-delay="100"
                data-sal-duration="1000"
              >
                El collar kolyy aprende los niveles de actividad y hábitos de tu
                perro. Recibe alertas de cualquier alteración o anomalía.
              </p>
            </div>
            <div className={features} style={{ marginRight: "2rem" }}>
              <div
                data-sal="slide-up"
                data-sal-delay="100"
                data-sal-duration="1000"
                className={flex_feature}
              >
                <div>
                  {/* <img src={star} alt="star point" /> */}
                </div>
                <h5>Sensor de temperatura ambiental.</h5>
              </div>
              <div
                data-sal="slide-up"
                data-sal-delay="100"
                data-sal-duration="1000"
                className={flex_feature}
              >
                <div>
                  {/* <img src={star} alt="star point" /> */}
                </div>
                <h5>Registro de tiempo en reposo y ciclos de sueño.</h5>
              </div>
              <div
                data-sal="slide-up"
                data-sal-delay="100"
                data-sal-duration="1000"
                className={flex_feature}
              >
                <div>
                  {/* <img src={star} alt="star point" /> */}
                </div>
                <h5>Sensor de movimiento de rascado.</h5>
              </div>
            </div>
          </div>
          <div className={img_container}>
            <div className={img_sticky}>
              <IntelligentImg />
            </div>
          </div>
        </div>
      </MediaQuery>
      <IntelligentMobile />
    </>
  );
};

export default InteligentComponent;
