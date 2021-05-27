import React from "react";
import {
  text_despiece,
  despiece_features_container,
  feature,
  number,
  text,
} from "../../../styles/collar.module.scss";
import MediaQuery from "react-responsive";
import DespieceMobileImg from "../img/despieceMobileImg";

const DespieceMobile = () => {
  return (
    <MediaQuery maxWidth={600}>
      <div style={{ paddingLeft: "2rem" }} className={text_despiece}>
        <span>Devolver todo lo que nos dan.</span>
        <h2>Regálale lo mejor.</h2>
        <p>
          El collar es dogproof. Resistente, sumergible, seguro y muy duradero.
          Como si estuviera hecho para tu perro.
        </p>
      </div>
      <DespieceMobileImg />
      <div className={despiece_features_container}>
      <div className={feature}>
          <div className={number}>1</div>
          <div className={text}>
            <h5>Sistema de luces para conocer su estado rápidamente.</h5>
            <p>
              3 LED de distintos colores y un LED visible de noche a 50 metros.
            </p>
          </div>
        </div>
        <div className={feature}>
          <div className={number}>2</div>
          <div className={text}>
            <h5>Ciclo de carga de la batería único en el mercado.</h5>
            <p>Carga con sistema USB y duración de la batería de 20-30 días.</p>
          </div>
        </div>
        <div className={feature}>
          <div className={number}>3</div>
          <div className={text}>
            <h5>
              Diseño de calidad con materiales que evitan irritaciones, alergias
              o daños.
            </h5>
            <p>
              Superfícies exteriores recubiertas con silicona para no deteriorar
              el sistema de conexión.
            </p>
          </div>
        </div>
        <div className={feature}>
          <div className={number}>4</div>
          <div className={text}>
            <h5>Personalizable en varios modelos.</h5>
            <p>
              Sistema de fijación de la correa mediante hebillas deslizantes.{" "}
            </p>
          </div>
        </div>
      </div>
    </MediaQuery>
  );
};

export default DespieceMobile;
