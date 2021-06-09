import React from "react";
import { Tween } from "react-gsap";
import { rotate_div } from "./timeline.module.scss";
import { Controller, Scene } from "react-scrollmagic";
import MediaQuery from 'react-responsive'


const DesarrolloTextFuture = (props) => {
  return (
    <>
     <MediaQuery minWidth={870}>
     <Controller>
        <Scene duration="640px" triggerHook={0.7} pin>
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
        <Scene duration="805px" triggerHook={0.7} pin>
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

export default DesarrolloTextFuture;
