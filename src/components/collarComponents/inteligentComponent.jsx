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

const InteligentComponent = () => {
  return (
    <div className={container_gps}>
      <div className={text_container}>
        <div className={title_text}>
          <div className={absolute_title}>
            <span>Prevenir antes que curar.</span>
          </div>
          <h1>Un collar que aprende.</h1>
          <p>
            Kolyy es un collar inteligente que aprende los niveles de actividad
            y hábitos de tu perro para informarte de cuando hay una alteración o
            anomalía.
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
      <div className={img_container}></div>
    </div>
  );
};

export default InteligentComponent;
