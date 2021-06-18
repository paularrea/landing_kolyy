import React from "react";
import { Link } from "gatsby";
import {
  container_flex,
  container,
  text,
  features_img,
} from "../../styles/home.module.scss";
import BannerImg from "./scrollSections/img/bannerImg";
import features from "../../images/features-collar.png";

const EmpoderarIntro = () => {
  return (
    <div className={container}>
      <div className={container_flex}>
        <div className={text}>
          {" "}
          <h2 data-sal="slide-up" data-sal-delay="100" data-sal-duration="1000">
            El primer collar inteligente que localiza, activa y protege a tu
            perro.
          </h2>
          <img
            className={features_img}
            data-sal="slide-up"
            data-sal-delay="100"
            data-sal-duration="1000"
            src={features}
            alt="features collar"
          />
        </div>
        <BannerImg/>
      <div data-sal="slide-up" data-sal-delay="100" data-sal-duration="1000" style={{marginTop:'1rem'}} className="buttons">
        <button style={{ backgroundColor: "#D9DADD", color: "black" }}>
          <Link to="/collar-perro-gps">Saber más</Link>
        </button>{" "}
        <button>
          <Link style={{ color: "white" }} to="/reserva-collar-kolyy">
            Reserva
          </Link>
        </button>
      </div>
      </div>
    </div>
  );
};

export default EmpoderarIntro;
