import React from "react";
import empoderar from "../../images/empoderar.jpg";
import { container_flex, container, text } from "../../styles/home.module.scss";

const EmpoderarIntro = () => {
  return (
    <div className={container}>
      <div className={container_flex}>
        <img src={empoderar} alt="" />
        <div className={text}>
          {" "}
          <h2>Porque empoderarte a ti es cuidar de él.</h2>
          <p>
            Hemos creado un collar que te lo pone muy fácil para cuidar de él
            porque no hay nadie que lo pueda hacer mejor que tú.
          </p>
        </div>
      </div>
    </div>
  );
};

export default EmpoderarIntro;
