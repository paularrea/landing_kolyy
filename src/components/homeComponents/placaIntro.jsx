import React from "react";
import { Link } from "gatsby";
import placas from "../../images/placas-perro-qr.png";
import {
  container_flex_placas,
  container,
  text,
} from "../../styles/home.module.scss";

const PlacaIntro = () => {
  return (
    <div className={container} style={{ backgroundColor: "#30aaaa73" }}>
      <div className={container_flex_placas}>
        <div className={text}>
          {" "}
          <h2 data-sal="slide-up" data-sal-delay="100" data-sal-duration="1000">
            Conoce nuestro reto #0perrosperdidos
          </h2>
          <p data-sal="slide-up" data-sal-delay="100" data-sal-duration="1000">
            Ya hemos identificado a más de 10.000 perros y seguiremos trabajando
            para encontrarlos a todos. Consigue tu placa y súmate al reto.
          </p>
          <Link to="/zero-perros-perdidos">
            <button
              data-sal="slide-up"
              data-sal-delay="100"
              data-sal-duration="1000"
              style={{ backgroundColor: "#30AAAA", color: "white" }}
            >
              Únete al reto
            </button>
          </Link>
        </div>
        <img
          data-sal="slide-up"
          data-sal-delay="100"
          data-sal-duration="1000"
          src={placas}
          alt=""
        />
      </div>
    </div>
  );
};

export default PlacaIntro;
