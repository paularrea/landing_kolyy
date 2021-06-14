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
import FeaturesCollar from "../img/featuresCollar";

const DespieceMobile = () => {
  return (
    <MediaQuery maxWidth={600}>
      <div style={{ paddingLeft: "2rem" }} className={text_despiece}>
        <h2 data-sal="slide-up" data-sal-delay="100" data-sal-duration="1000">
        Los pequeños detalles <br /> marcan la diferencia
        </h2>
        <p data-sal="slide-up" data-sal-delay="100" data-sal-duration="1000">
        Resistente, compacto, inteligente y atractivo
        </p>
      </div>
      <div
        data-sal="slide-up"
        data-sal-delay="100"
        data-sal-duration="1000"
        style={{ width: "90%", margin: "1rem auto", marginBottom: "3rem" }}
      >
        <FeaturesCollar />
      </div>
      <div data-sal="slide-up" data-sal-delay="100" data-sal-duration="1000">
        {" "}
        <DespieceMobileImg />
      </div>

      <div className={despiece_features_container}>
        <div
          data-sal="slide-up"
          data-sal-delay="100"
          data-sal-duration="1000"
          className={feature}
        >
          <div className={number}>1</div>
          <div className={text}>
            <h5>Sistema de luces para conocer su estado rápidamente.</h5>
            <p>
              3 LED de distintos colores y un LED visible de noche a 50 metros.
            </p>
          </div>
        </div>
        <div
          data-sal="slide-up"
          data-sal-delay="100"
          data-sal-duration="1000"
          className={feature}
        >
          <div className={number}>2</div>
          <div className={text}>
            <h5>Ciclo de carga de la batería único en el mercado.</h5>
            <p>Carga con sistema USB y duración de la batería de 20-30 días.</p>
          </div>
        </div>
        <div
          data-sal="slide-up"
          data-sal-delay="100"
          data-sal-duration="1000"
          className={feature}
        >
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
        <div
          data-sal="slide-up"
          data-sal-delay="100"
          data-sal-duration="1000"
          className={feature}
        >
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
