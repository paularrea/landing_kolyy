import React from "react";
import {Link} from 'gatsby'
import placas from "../../images/placas.jpg";
import {
  container_flex_placas,
  container,
  text,
} from "../../styles/home.module.scss";

const PlacaIntro = () => {
  return (
    <div className={container} style={{ backgroundColor: "#ECECEC" }}>
      <div className={container_flex_placas}>
        <div className={text}>
          {" "}
          <h2 data-sal="slide-up" data-sal-delay="100" data-sal-duration="1000">
            Protege a tu amigo con kolyy
          </h2>
          <p data-sal="slide-up" data-sal-delay="100" data-sal-duration="1000">
            El collar kolyy estará disponible en 2022. Hasta entonces puedes
            colaborar con nosotros en nuestra iniciativa para conseguir los
            <b>#0perrosperdidos.</b>
          </p>
          <Link to="/zero-perros-perdidos">
            <button
              data-sal="slide-up"
              data-sal-delay="100"
              data-sal-duration="1000"
            >
              Saber más
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
