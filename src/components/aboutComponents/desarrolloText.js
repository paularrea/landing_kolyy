import React from "react";
import { Tween } from "react-gsap";
import { Controller, Scene } from "react-scrollmagic";

const DesarrolloText = (props) => {
  return (
    <div>
      <Controller>
        <Scene duration="1230px" triggerHook={0.7} pin>
          <Tween from={{ opacity: 0 }} to={{ opacity: 1 }}>
            <div
              style={{
                marginLeft:'3rem',
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                textAlign: "left",
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

export default DesarrolloText;