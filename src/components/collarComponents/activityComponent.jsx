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
import FeatureSequence from "../Sequence/FeatureSequence";

const ActivityComponent = () => {
  return (
    <div className={container_gps}>
      <div className={img_container}><FeatureSequence/></div>
      <div className={text_container}>
        <div className={title_text}>
          <div className={absolute_title}>
            <span>Un perro activo es un perro feliz.</span>
          </div>
          <h2>Registro de actividad física.</h2>
          <p>
            El collar te informa del ejercicio físico, pausas y tiempo tumbado
            de tu perro para mantenerlo en forma.
          </p>
        </div>
        <div className={features} style={{ marginLeft: "2rem" }}>
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
  );
};

export default ActivityComponent;
