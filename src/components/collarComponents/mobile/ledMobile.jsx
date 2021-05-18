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
import FeatureSequence from "../../Sequence/FeatureSequence";

const LedMobile = () => {
  return (
    <MediaQuery maxWidth={600}>
      <div className={container_gps}>
        <div className={text_container}>
        <div className={title_text}>
          <div className={absolute_title}>
            <span>Para no perderlo de vista.</span>
          </div>
          <h2>Todo lo que necesitas para cuidar de él.</h2>
          <p>
            El collar es dogproof. Resistente, sumergible, seguro, con largos
            ciclos de batería y una luz LED visible para la noche.
          </p>
        </div>
        </div>
      </div>
      <div className={img_container}>
        <FeatureSequence />
      </div>
      <div className={container_gps}>
        <div className={text_container}>
        <div className={features} style={{ marginLeft: "0" }}>
          <div className={flex_feature}>
            <div>*</div>
            <h5>Luz LED visible de noche a 50 metros.</h5>
          </div>
          <div className={flex_feature}>
            <div>*</div>
            <h5>Ciclo de carga de la batería: 20-30 días</h5>
          </div>
          <div className={flex_feature}>
            <div>*</div>
            <h5>No provoca irritaciones, alergias ni daños.</h5>
          </div>
        </div>
        </div>
      </div>
    </MediaQuery>
  );
};

export default LedMobile;
