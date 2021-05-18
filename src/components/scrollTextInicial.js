import React from "react";
import { Tween } from "react-gsap";
import { scroll_text_inicial } from "../styles/home.module.scss";
import { Controller, Scene } from "react-scrollmagic";

const ScrollTextInicial = (props) => {
  return (
    <div>
      <Controller>
      <Scene duration="100%" triggerHook={0.35} pin>
          <Tween from={{ opacity: 1 }} to={{ opacity: 1 }}>
            <div className={scroll_text_inicial}>
              <div>{props.children}</div>
            </div>
          </Tween>
        </Scene>
      </Controller>
    </div>
  );
};

export default ScrollTextInicial;
