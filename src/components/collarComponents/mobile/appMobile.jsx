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

const AppMobile = () => {
  return (
    <MediaQuery maxWidth={600}>
      <div className={container_gps}>
        <div className={text_container}>
        <div className={title_text}>
          <div className={absolute_title}>
            <span>Para no perderlo de vista.</span>
          </div>
          <h2>Todo en una misma app.</h2>
          <p>
          Desde la app podrás ver 
todo lo que está reportando 
el collar sobre el estado 
de tu perro. Estés donde estés y a cualquier hora.
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
            <h5>Forma parte de la comunidad y conoce a otros kolyers.</h5>
          </div>
          <div className={flex_feature}>
            <div>*</div>
            <h5>Todos los datos en una sola plataforma.</h5>
          </div>
        </div>
        </div>
      </div>
    </MediaQuery>
  );
};

export default AppMobile;
