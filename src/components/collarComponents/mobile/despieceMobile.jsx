import React from "react";
import {
  text_despiece,
} from "../../../styles/collar.module.scss";
import MediaQuery from "react-responsive";
import DespieceImg from "../img/despiece"

const DespieceMobile = () => {
  return (
    <MediaQuery maxWidth={600}>
      <div style={{paddingLeft:'2rem'}} className={text_despiece}>
        <span>Devolver todo lo que nos dan.</span>
        <h2>Regálale lo mejor.</h2>
        <p>
          El collar es dogproof. Resistente, sumergible, seguro y muy duradero.
          Como si estuviera hecho para tu perro.
        </p>
      </div>
      <DespieceImg />
    </MediaQuery>
  );
};

export default DespieceMobile;
