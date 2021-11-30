import React from "react";
import { container, story, about_text, img } from "./about.module.scss";
import AboutImg from "./components/AboutImg";
import MediaQuery from "react-responsive";
import AboutImgMobile from "./components/AboutImgMobile";
import GreenCounterContainer from "./components/GreenCounterContainer";
import FaQs from "./components/FaQs";
import AboutWhiteContainer from "./components/AboutWhiteContainer";

const About = () => {
  return (
    <>
      <div id="kolyy" className={container}>
        <p className={story}>OUR STORY:</p>
        <h2>Por Sky:</h2>
        <p>Un admirable y fiel compañero de vida.</p>
        <div className={img}>
          <MediaQuery maxWidth={874}>
            <AboutImgMobile />
          </MediaQuery>
          <MediaQuery minWidth={875}>
            <AboutImg />
          </MediaQuery>
        </div>
        <div className={about_text}>
          <p>
            Sky nos dejó por un cáncer intestinal con solo 7 años. Aparentemente
            sano, un día dejó de comer y ya no pudimos hacer nada para salvarlo.{" "}
          </p>
          <h3>Los perros esconden su dolor hasta que ya es demasiado tarde.</h3>
          <p>
            Entendimos que los perros por su condición suelen esconder el dolor
            hasta que ya es demasiado tarde. Somos sus héroes, sus padres, su
            familia y nuestra compañía es su mayor felicidad. No los veremos
            tristes hasta que el sufrimiento sea difícil de soportar.
          </p>
        </div>
        <AboutWhiteContainer />
        <GreenCounterContainer />
      </div>
      <FaQs />
    </>
  );
};

export default About;
