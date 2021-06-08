import React from "react";
import placas from "../../images/placas.png";
import { container_flex_placas, container, text } from "../../styles/home.module.scss";

const PlacaIntro = () => {
  return (
    <div className={container} style={{ backgroundColor: "#AFD0D0" }}>
    <div
      className={container_flex_placas}
    >
      <img src={placas} alt="" />
      <div className={text}>
        {" "}
        <h2>Protege a tu amigo con kolyy</h2>
        <p>
          El collar kolyy estará disponible en 2022. Hasta entonces puedes
          colaborar con nosotros en nuestra iniciativa para conseguir los <br />{" "}
          <b>#0perrosperdidos.</b>
        </p>
        <button>Saber más</button>
      </div>
    </div>
    </div>
  );
};

export default PlacaIntro;
