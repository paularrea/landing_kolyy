import React from "react";
import EarlyKolyyerBanner from "./components/EarlyKolyyer/EarlyKolyyerBanner";
import Features from "./components/Features/Features";
import IntroInfo from "./components/introInfo/IntroInfo";
import { container } from "./intro.module.scss";

const Intro = () => {
  return (
    <>
      <div id='el-collar' className={container}></div>
      <IntroInfo />
      <EarlyKolyyerBanner />
      <Features />
    </>
  );
};

export default Intro;
