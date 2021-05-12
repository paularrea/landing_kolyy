import React from "react";
import Chronology from "../components/aboutComponents/chronology";
import Logo from "../components/header/components/logo";
import Layout from "../components/layout/layout";
import Seo from "../components/seo";
import { container, bg_img, content, text } from "../styles/about.module.scss";

const About = () => {
  return (
    <Layout>
      <Seo title="About" />
      <div className={bg_img}>
        <div className={content}>
          <Logo />
          <div className={text}>
            <span>Nuestra historia.</span>
            <h2>Somos lo que hacemos</h2>
          </div>
        </div>
      </div>
      <div className={container}>
        <Chronology/>
      </div>
    </Layout>
  );
};

export default About;
