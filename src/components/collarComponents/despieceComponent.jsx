import React from "react";
import {
  text_despiece,
} from "../../styles/collar.module.scss";
import MediaQuery from "react-responsive";
import DespieceImg from "./img/despiece"
import DespieceMobile from "./mobile/despieceMobile";

const DespieceComponent = () => {
  return (
    <>
      <MediaQuery minWidth={600}>
        <div className={text_despiece}>
            <span data-sal="fade" data-sal-delay="100" data-sal-duration="1000">Devolver todo lo que nos dan.</span>
          <h2 data-sal="slide-up" data-sal-delay="100" data-sal-duration="1000">Regálale lo mejor.</h2>
          <p data-sal="slide-up" data-sal-delay="100" data-sal-duration="1000">
            El collar es dogproof. Resistente, sumergible, seguro y muy
            duradero. Como si estuviera hecho para tu perro.
          </p>
        </div>
        <DespieceImg/>
      </MediaQuery>
      <DespieceMobile/>
    </>
  );
};

export default DespieceComponent;
