
import React, { useRef } from "react";
import './sequence.css';

import { Controller, Scene } from "react-scrollmagic";
import Sequence from "./Sequence";

const FeatureSequence = () => {
  const ref = useRef();
  return (
    <div className="App">
      <Controller>
        <Scene duration="450px" triggerHook={0} pin>
          {progress => (
            <div style={{width:"100%", height: "100vh", position: "relative"}}>
              <Sequence ref={ref} progress={progress} />
            </div>
          )}
        </Scene>
      </Controller>
    </div>
  );
};

export default FeatureSequence;
