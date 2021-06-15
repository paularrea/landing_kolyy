import { Link } from "gatsby";
import React from "react";
import blackCollar from "../../images/black-blue-collar.png";
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
        <h2 data-sal="slide-up" data-sal-delay="100" data-sal-duration="1000">
          Diseñado para todos los perros
        </h2>
        <p data-sal="slide-up" data-sal-delay="100" data-sal-duration="1000">
          Sea como sea tu perro este es el collar que necesita.
        </p>
        <button
          data-sal="slide-up"
          data-sal-delay="100"
          data-sal-duration="1000"
        >
          {" "}
          <Link style={{color:'white'}} to="/collar-perro">Descubre más</Link>{" "}
        </button>
      </div>
      <div className={flex_collection}>
        <img
          data-sal="slide-up"
          data-sal-delay="100"
          data-sal-duration="1000"
          src={blackCollar}
          alt="collar negro"
        />
        <img
          data-sal="slide-up"
          data-sal-delay="100"
          data-sal-duration="1000"
          src={yellowCollar}
          alt="collar amarillo"
        />
        <img
          data-sal="slide-up"
          data-sal-delay="100"
          data-sal-duration="1000"
          src={blueCollar}
          alt="collar azul"
        />
      </div>
    </div>
  );
};

export default CollarCollection;
