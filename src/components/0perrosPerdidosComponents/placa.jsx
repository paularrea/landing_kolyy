import React from "react";
import {
  container,
  flex_container,
  text,
  img,
} from "../../styles/placas.module.scss";
import placa from "../../images/placas.jpg";

const Placa = () => {
  return (
    <div className={container} style={{ backgroundColor: "#ECECEC" }}>
      <div className={flex_container}>
        <div className={text}>
          <h2 data-sal="slide-up" data-sal-delay="100" data-sal-duration="1000">
            Una placa para identificarlo
          </h2>
          <p data-sal="slide-up" data-sal-delay="100" data-sal-duration="1000">
            Colócale nuestra placa identificativa a tu perro y aumenta las
            posibilidades de encontrarlo en caso de pérdida.
          </p>
          <a
            data-sal="slide-up"
            data-sal-delay="100"
            data-sal-duration="1000"
            href="https://app.kolyy.com/"
            target='__blank'
            rel='noopener noreferrer'
          >
            <button>Consigue una</button>
          </a>
        </div>
        <div
          data-sal="slide-up"
          data-sal-delay="100"
          data-sal-duration="1000"
          className={img}
        >
          <img src={placa} alt="placa" />
        </div>
      </div>
    </div>
  );
};

export default Placa;
