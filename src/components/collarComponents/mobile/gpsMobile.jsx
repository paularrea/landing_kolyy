import React from "react";
import {
  container_gps,
  text_container,
  img_container,
  title_text,
  features,
  flex_feature,
} from "../../../styles/collar.module.scss";
import MediaQuery from "react-responsive";
import GpsImg from "../img/gpsImg";
// import star from "../../../images/icons/star.png";

const GpsMobile = () => {
  return (
    <MediaQuery maxWidth={600}>
      <div className={container_gps}>
        <div className={text_container}>
          <div className={title_text}>
            <h2
              data-sal="slide-up"
              data-sal-delay="100"
              data-sal-duration="1000"
            >
              Nunca más volverán a perderse.
            </h2>
            <p
              data-sal="slide-up"
              data-sal-delay="100"
              data-sal-duration="1000"
            >
              Kolyy te avisa si tu perro se escapa y te ayuda a encontrarlo.{" "}
              <br /> <br />
              El collar lleva incorporado un localizador GPS que permite a
              tiempo real encontrar o localizar a tu perro al instante. Estés
              donde estés no lo pierdas de vista.
            </p>
          </div>
        </div>
      </div>
      <div className={img_container}>
        <GpsImg />
      </div>
      <div className={container_gps}>
        <div className={text_container}>
          <div className={features} style={{ marginRight: "0" }}>
            <div
              data-sal="slide-up"
              data-sal-delay="100"
              data-sal-duration="1000"
              className={flex_feature}
            >
              <div>
                {/* <img src={star} alt="star point" /> */}
              </div>
              <h5>Sistema de localización GPS para zonas urbanas y rurales.</h5>
            </div>
            <div
              data-sal="slide-up"
              data-sal-delay="100"
              data-sal-duration="1000"
              className={flex_feature}
            >
              <div>
                {/* <img src={star} alt="star point" /> */}
              </div>
              <h5>
                Función “dibujar tu zona de seguridad” para recibir alertas si
                tu perro sale del área marcada.
              </h5>
            </div>
          </div>
        </div>
      </div>
    </MediaQuery>
  );
};

export default GpsMobile;
