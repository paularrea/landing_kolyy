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
import CommunityImg from "../img/communityImg";
import star from "../../../images/icons/star.png"

const CommunityMobile = () => {
  return (
    <MediaQuery maxWidth={600}>
      <div className={container_gps}>
        <div className={text_container}>
          <div className={title_text}>
            <h2 data-sal="slide-up" data-sal-delay="100" data-sal-duration="1000">Cuídalo estés donde estés.</h2>
            <p data-sal="slide-up" data-sal-delay="100" data-sal-duration="1000">
              Con la app puedes saber en tiempo real todo lo que el collar
              reporta y anticiparte a cualquier imprevisto. <br />
              <br /> Si tu perro se escapa te avisa. Si no ha alcanzado el
              objetivo de ejercicio te avisa. Si ha dormido menos de lo habitual
              o se ha rascado mas de la cuenta te avisa.
            </p>
          </div>
        </div>
      </div>
      <div className={img_container}>
        <CommunityImg />
      </div>
      <div className={container_gps}>
        <div className={text_container}>
          <div className={features} style={{ marginLeft: "0" }}>
            <div data-sal="slide-up" data-sal-delay="100" data-sal-duration="1000" className={flex_feature}>
  <div><img src={star} alt="star point" /></div>
              <h5>Forma parte de la comunidad y conoce a otros kolyers.</h5>
            </div>
            <div data-sal="slide-up" data-sal-delay="100" data-sal-duration="1000" className={flex_feature}>
  <div><img src={star} alt="star point" /></div>
              <h5>Todos los datos en una sola plataforma.</h5>
            </div>
          </div>
        </div>
      </div>
    </MediaQuery>
  );
};

export default CommunityMobile;
