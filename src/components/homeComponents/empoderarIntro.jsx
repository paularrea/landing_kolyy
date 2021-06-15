import React from "react";
import empoderar from "../../images/empoderar.jpg";
import {Link} from 'gatsby'
import { container_flex, container, text } from "../../styles/home.module.scss";

const EmpoderarIntro = () => {
  return (
    <div className={container}>
      <div className={container_flex}>
        <img
          data-sal="slide-up"
          data-sal-delay="100"
          data-sal-duration="1000"
          src={empoderar}
          alt=""
        />
        <div className={text}>
          {" "}
          <h2 data-sal="slide-up" data-sal-delay="100" data-sal-duration="1000">
            Porque empoderarte a ti es cuidar de él.
          </h2>
          <p data-sal="slide-up" data-sal-delay="100" data-sal-duration="1000">
            Hemos creado un collar que te lo pone muy fácil para cuidar de él
            porque no hay nadie que lo pueda hacer mejor que tú.
          </p>
          <Link><button style={{ backgroundColor: "#D9DADD", color: "black" }}>Saber más</button></Link>
        </div>
      </div>
    </div>
  );
};

export default EmpoderarIntro;
