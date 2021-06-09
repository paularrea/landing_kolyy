import React from "react";
import { Tween } from "react-gsap";
import { rotate_div } from "./timeline.module.scss";
import { Controller, Scene } from "react-scrollmagic";
import MediaQuery from 'react-responsive'


const DesarrolloText = (props) => {
  return (
    <>
     <MediaQuery minWidth={870}>
     <Controller>
        <Scene duration="830px" triggerHook={0.6} pin>
          <Tween from={{ opacity: 0 }} to={{ opacity: 1 }}>
            <div className={rotate_div}>
              <div>{props.children}</div>
            </div>
          </Tween>
        </Scene>
      </Controller>
     </MediaQuery>
     <MediaQuery maxWidth={870}>
     <Controller>
        <Scene duration="1380px" triggerHook={0.7} pin>
          <Tween from={{ opacity: 0 }} to={{ opacity: 1 }}>
            <div className={rotate_div}>
              <div>{props.children}</div>
            </div>
          </Tween>
        </Scene>
      </Controller>
     </MediaQuery>
    </>
  );
};

export default DesarrolloText;
