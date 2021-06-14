import React from "react";
import { text_despiece } from "../../styles/collar.module.scss";
import MediaQuery from "react-responsive";
import DespieceImg from "./img/despiece";
import DespieceMobile from "./mobile/despieceMobile";
import FeaturesCollar from "./img/featuresCollar";

const DespieceComponent = () => {
  return (
    <>
      <MediaQuery minWidth={600}>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <div className={text_despiece}>
            <h2
              data-sal="slide-up"
              data-sal-delay="100"
              data-sal-duration="1000"
            >
              Los pequeños detalles <br /> marcan la diferencia
            </h2>
            <p
              data-sal="slide-up"
              data-sal-delay="100"
              data-sal-duration="1000"
            >
              Resistente, compacto, inteligente y atractivo
            </p>
          </div>
          <div
            data-sal="slide-up"
            data-sal-delay="100"
            data-sal-duration="1000"
            style={{ width: "440px" }}
          >
            <FeaturesCollar />
          </div>
        </div>

        <DespieceImg />
      </MediaQuery>
      <DespieceMobile />
    </>
  );
};

export default DespieceComponent;
