import React from "react";
import blackCollar from "../../images/black-collar.png";
import blueCollar from "../../images/blue-collar.png";
import yellowCollar from "../../images/yellow-collar.png";
import {
  container_collection,
  flex_collection,
} from "../../styles/home.module.scss";

const CollarCollection = () => {
  return (
      <div className={container_collection}>
        <div>
          <h2>Diseñado para todos los perros</h2>
          <p>Sea como sea tu perro este es el collar que necesita.</p>
          <button>Descubre más</button>
        </div>
        <div className={flex_collection}>
          <img src={blackCollar} alt="collar negro" />
          <img src={yellowCollar} alt="collar amarillo" />
          <img src={blueCollar} alt="collar azul" />
        </div>
      </div>
  );
};

export default CollarCollection;
