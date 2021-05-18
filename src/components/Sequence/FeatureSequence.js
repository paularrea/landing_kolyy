import React, { useRef } from "react";
import "./sequence.css";
import MediaQuery from "react-responsive";
import { Controller, Scene } from "react-scrollmagic";
import Sequence from "./Sequence";

const FeatureSequence = () => {
  const ref = useRef();
  return (
    <div className="App">
      <MediaQuery maxWidth={1200}>
        <Controller>
          <Scene duration="100vh" triggerHook={0} pin>
            {(progress) => (
              <div
                style={{ width: "100%", height: "100vh", position: "relative" }}
              >
                <Sequence ref={ref} progress={progress} />
              </div>
            )}
          </Scene>
        </Controller>
      </MediaQuery>
      <MediaQuery minWidth={1201}>
        <Controller>
          <Scene duration="300vh" triggerHook={0} pin>
            {(progress) => (
              <div
                style={{ width: "100%", height: "100vh", position: "relative" }}
              >
                <Sequence ref={ref} progress={progress} />
              </div>
            )}
          </Scene>
        </Controller>
      </MediaQuery>
    </div>
  );
};

export default FeatureSequence;
