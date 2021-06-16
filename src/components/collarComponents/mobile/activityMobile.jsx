import React from "react";
import {
  container_gps,
  text_container,
  img_container,
  title_text,
  features,
  flex_feature,
} from "../../../styles/collar.module.scss";
import MediaQuery from "react-responsive";
import ActiveImg from "../img/activeImg";
// import star from "../../../images/icons/star.png";

const ActivityMobile = () => {
  return (
    <MediaQuery maxWidth={600}>
      <div className={container_gps}>
        <div className={text_container}>
          <div className={title_text}>
            <h2
              data-sal="slide-up"
              data-sal-delay="100"
              data-sal-duration="1000"
            >
              Diviértete haciendo ejercicio.{" "}
            </h2>
            <p
              data-sal="slide-up"
              data-sal-delay="100"
              data-sal-duration="1000"
            >
              Con el collar Kolyy puedes medir y llevar un control de la
              actividad de tu perro. <br />
              <br /> Registra los pasos diarios y el tiempo y distancia
              recorrida para que puedas mantenerlo en forma.
            </p>
          </div>
        </div>
      </div>
      <div className={img_container}>
        <ActiveImg />
      </div>
      <div className={container_gps}>
        <div className={text_container}>
          <div className={features} style={{ marginLeft: "0" }}>
            <div
              data-sal="slide-up"
              data-sal-delay="100"
              data-sal-duration="1000"
              className={flex_feature}
            >
              <div>
                {/* <img src={star} alt="star point" /> */}
              </div>
              <h5>Sensor de movimiento y del tipo de actividad.</h5>
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
              <h5>Contador de pasos en modo paseo y carrera.</h5>
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
              <h5>
                Medidor de distancia recorrida y cronometro de tiempo en
                actividad.
              </h5>
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
              <h5>Registro de rutas de paseo y excursiones.</h5>
            </div>
          </div>
        </div>
      </div>
    </MediaQuery>
  );
};

export default ActivityMobile;
