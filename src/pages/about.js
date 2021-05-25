import React from "react";
import AboutImg from "../components/aboutComponents/aboutBackgroundImg";
import Chronology from "../components/aboutComponents/chronology";
import Layout from "../components/layout/layout";
import Seo from "../components/seo";
import goDownArrow from "../images/icons/goDownArrow.png";
import {
  container,
  go_down_arrow,
  bg_img,
  content,
  text,
} from "../styles/about.module.scss";

const About = () => {
  const goDown = () => {
    window.scrollTo({ top: 600, behavior: "smooth" });
  };
  return (
    <Layout>
      <Seo title="About" />
        <AboutImg>
      <div className={bg_img}>
          <div className={content}>
            <div className={text}>
              <span>Nuestra historia.</span>
              <h2>Somos lo que hacemos</h2>
              <div role='button' className={go_down_arrow} onClick={goDown}>
                <img src={goDownArrow} alt="go down" />
              </div>
            </div>
          </div>
      </div>
        </AboutImg>
      <div className={container}>
        <Chronology />
      </div>
    </Layout>
  );
};

export default About;
