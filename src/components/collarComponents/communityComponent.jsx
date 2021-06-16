import React from "react";
import {
  container_gps,
  text_container,
  img_container,
  img_sticky,
  title_text,
  features,
  flex_feature,
} from "../../styles/collar.module.scss";
import MediaQuery from "react-responsive";
import CommunityMobile from "./mobile/communityMobile";
import CommunityImg from "./img/communityImg";
// import star from "../../images/icons/star.png";

const CommunityComponent = () => {
  return (
    <>
      <MediaQuery minWidth={600}>
        <div className={container_gps}>
          <div className={img_container}>
            <div className={img_sticky}>
              <CommunityImg />
            </div>
          </div>
          <div className={text_container}>
            <div className={title_text}>
              <h2
                data-sal="slide-up"
                data-sal-delay="100"
                data-sal-duration="1000"
              >
                Vive la aventura con la App Kolyy
              </h2>
              <p
                data-sal="slide-up"
                data-sal-delay="100"
                data-sal-duration="1000"
              >
                Todo lo que importa sobre tu perro en tus manos. El collar
                registra, el sistema aprende y la App te informa.
              </p>
            </div>
            <div className={features} style={{ marginLeft: "2rem" }}>
              <div
                data-sal="slide-up"
                data-sal-delay="100"
                data-sal-duration="1000"
                className={flex_feature}
              >
                <div>
                  {/* <img src={star} alt="star point" /> */}
                </div>
                <h5>Avisos de seguridad sobre la localización de tu perro.</h5>
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
                <h5>Notificaciones de anomalías en los hábitos diarios.</h5>
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
                <h5>Reportes de actividad y evolución de los resultados.</h5>
              </div>
            </div>
          </div>
        </div>
      </MediaQuery>
      <CommunityMobile />
    </>
  );
};

export default CommunityComponent;
