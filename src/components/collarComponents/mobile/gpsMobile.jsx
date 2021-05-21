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

const GpsMobile = () => {
  return (
    <MediaQuery maxWidth={600}>
      <div className={container_gps}>
        <div className={text_container}>
          <div className={title_text}>
            <div className={absolute_title}>
              <span>Saber dónde está es saber que está bien.</span>
            </div>
            <h2>No vuelvas a perderlo.</h2>
            <p>
              Kolyy te avisa si tu perro se pierde y te ayuda a encontrarlo.{" "}
              <br /> <br />
              Con el localizador GPS a tiempo real podrás encontrarlo de la
              forma más rápida y segura en cualquier parte del mundo.
            </p>
          </div>
        </div>
      </div>
      <div className={img_container}>
        <FeatureSequence />
      </div>
      <div className={container_gps}>
        <div className={text_container}>
          <div className={features} style={{ marginRight: "0" }}>
            <div className={flex_feature}>
              <div>*</div>
              <h5>Geolocalización a tiempo real a través de 2G /3G.</h5>
            </div>
            <div className={flex_feature}>
              <div>*</div>
              <h5>
                Señal de localización si el perro ha salido de la zona de
                seguridad.
              </h5>
            </div>
          </div>
        </div>
      </div>
    </MediaQuery>
  );
};

export default GpsMobile;
