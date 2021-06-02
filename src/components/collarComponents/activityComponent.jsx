import React from "react";
import {
  container_gps,
  absolute_title,
  text_container,
  img_container,
  img_sticky,
  title_text,
  features,
  flex_feature,
} from "../../styles/collar.module.scss";
import MediaQuery from "react-responsive";
import ActivityMobile from "./mobile/activityMobile";
import ActiveImg from "./img/activeImg";
import star from "../../images/icons/star.png";

const ActivityComponent = () => {
  return (
    <>
      <MediaQuery minWidth={600}>
        <div className={container_gps}>
          <div className={img_container}>
            <div className={img_sticky}>
              <ActiveImg
              />
            </div>
          </div>
          <div className={text_container}>
            <div className={title_text}>
              <div className={absolute_title}>
                <span data-sal="fade" data-sal-delay="100" data-sal-duration="1000">Un perro activo es un perro feliz.</span>
              </div>
              <h2 data-sal="slide-up" data-sal-delay="100" data-sal-duration="1000">Mantenlo activo y feliz.</h2>
              <p data-sal="slide-up" data-sal-delay="100" data-sal-duration="1000">
                El collar te informa del ejercicio físico que lleva a cabo tu
                amigo. <br />
                <br /> Registra los pasos diarios y el tiempo y distancia
                recorrida para que puedas mantenerlo en forma.
              </p>
            </div>
            <div className={features} style={{ marginLeft: "2rem" }}>
              <div data-sal="slide-up" data-sal-delay="100" data-sal-duration="1000" className={flex_feature}>
                <div>
                  <img src={star} alt="star point" />
                </div>
                <h5>Sensor de movimiento y actividad.</h5>
              </div>
              <div data-sal="slide-up" data-sal-delay="100" data-sal-duration="1000" className={flex_feature}>
                <div>
                  <img src={star} alt="star point" />
                </div>
                <h5>Contador de pasos.</h5>
              </div>
              <div data-sal="slide-up" data-sal-delay="100" data-sal-duration="1000" className={flex_feature}>
                <div>
                  <img src={star} alt="star point" />
                </div>
                <h5>Registro de distancia recorrida.</h5>
              </div>
              <div data-sal="slide-up" data-sal-delay="100" data-sal-duration="1000" className={flex_feature}>
                <div>
                  <img src={star} alt="star point" />
                </div>
                <h5>Registro de tiempo de paseos.</h5>
              </div>
            </div>
          </div>
        </div>
      </MediaQuery>
      <ActivityMobile />
    </>
  );
};

export default ActivityComponent;
