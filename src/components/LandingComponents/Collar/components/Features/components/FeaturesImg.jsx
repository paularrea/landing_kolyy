import React from "react";
import { img_container } from "../features.module.scss";
import { StaticImage } from "gatsby-plugin-image";

const FeaturesImg = () => {
    return (
      <div className={img_container}>
        <div style={{ position: "absolute", top: "2rem", left: "3rem" }}>
          <span>
            Monitorización <br /> de la actividad
          </span>
        </div>
        <div style={{ position: "absolute", top: "6rem", right: "1rem" }}>
          <span>
            Seguimiento <br /> de la salud
          </span>
        </div>
        <StaticImage
          placeholder="blurred"
          src='../../../../../../images/features_landing.png'
          alt="características del collar inteligente Kolyy"
        />
        <div style={{ position: "absolute", bottom: "7rem", left: "3rem" }}>
          <span>
            Localizador
            <br />
            GPS
          </span>
        </div>
        <div style={{ position: "absolute", bottom: "2rem", right: "3rem" }}>
          <span>
            Formación
            <br />
            personalizada
          </span>
        </div>
      </div>
    );
  };

  export default FeaturesImg;