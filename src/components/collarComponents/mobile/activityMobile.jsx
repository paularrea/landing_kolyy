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
import ActiveImg from "../img/activeImg"

const ActivityMobile = () => {
  return (
    <MediaQuery maxWidth={600}>
      <div className={container_gps}>
        <div className={text_container}>
          <div className={title_text}>
            <div className={absolute_title}>
              <span>Un perro activo es un perro feliz.</span>
            </div>
            <h2>Mantenlo activo y feliz.</h2>
            <p>
              El collar te informa del ejercicio físico que lleva a cabo tu
              amigo. <br />
              <br /> Registra los pasos diarios y el tiempo y distancia
              recorrida para que puedas mantenerlo en forma.
            </p>
          </div>
        </div>
      </div>
      <div className={img_container}>
        <ActiveImg/>
      </div>
      <div className={container_gps}>
        <div className={text_container}>
          <div className={features} style={{ marginLeft: "0" }}>
            <div className={flex_feature}>
              <div>*</div>
              <h5>Sensor de movimiento y actividad.</h5>
            </div>
            <div className={flex_feature}>
              <div>*</div>
              <h5>Contador de pasos.</h5>
            </div>
            <div className={flex_feature}>
              <div>*</div>
              <h5>Registro de distancia recorrida.</h5>
            </div>
            <div className={flex_feature}>
              <div>*</div>
              <h5>Registro de tiempo de paseos.</h5>
            </div>
          </div>
        </div>
      </div>
    </MediaQuery>
  );
};

export default ActivityMobile;
