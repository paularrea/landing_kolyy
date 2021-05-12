import React from "react";
import { Tween } from "react-gsap";
import { Controller, Scene } from "react-scrollmagic";

const TimelineText = (props) => {
  return (
    <div>
      <Controller>
        <Scene duration="15%" triggerHook={0.6} pin>
          <Tween from={{ opacity: 0 }} to={{ opacity: 1 }}>
            <div
              style={{
                marginLeft:'3rem',
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                textAlign: "left",
                width: "80%",
              }}
            >
              <div>{props.children}</div>
            </div>
          </Tween>
        </Scene>
      </Controller>
    </div>
  );
};

export default TimelineText;