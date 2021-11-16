import React from "react";
import {
  app_container_features,
  abs_1,
  abs_2,
  abs_3,
} from "../../features.module.scss";
import BgImg from "./bgImg";

const BgImgFeatures = () => {
  return (
    <BgImg>
      <div className={app_container_features}>
        <h2>Corre hacia una vida activa y saludable</h2>
        <p className={abs_1}>
          <b>Registra su actividad</b> para mantener a tu perro en buena forma.
        </p>
        <p className={abs_2}>
          Conviértete en su entrenador personal y{" "}
          <b>disfruta mientras él cumple sus objetivos.</b>
        </p>
        <p className={abs_3}>
          <b>Un paseo con juego</b> es mucho más divertido.
        </p>
      </div>
    </BgImg>
  );
};

export default BgImgFeatures;
