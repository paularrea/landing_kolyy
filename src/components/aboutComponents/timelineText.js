import React from "react";
import { Tween } from "react-gsap";
import {timeLineScroll} from "./timeline.module.scss";
import { Controller, Scene } from "react-scrollmagic";

const TimelineText = (props) => {
  return (
    <div>
      <Controller>
        <Scene duration="10%" triggerHook={0.6} pin>
          <Tween from={{ opacity: 0 }} to={{ opacity: 1 }}>
            <div className={timeLineScroll}>
              <div>{props.children}</div>
            </div>
          </Tween>
        </Scene>
      </Controller>
    </div>
  );
};

export default TimelineText;
