import React from "react";
import { Tween } from "react-gsap";
import { Controller, Scene } from "react-scrollmagic";

const ScrollText = (props) => {
  return (
    <div>
      <Controller>
        <Scene duration="100%" triggerHook={0.4} pin>
          <Tween from={{ opacity: 0 }} to={{ opacity: 1 }}>
            <div
              style={{
                margin: "0 auto",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                textAlign: "center",
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

export default ScrollText;
