
import React, { useRef } from "react";
import './sequence.css';

import { Controller, Scene } from "react-scrollmagic";
import Sequence from "./Sequence";

const RenderSequence = () => {
  const ref = useRef();
  return (
    <div className="App">
      <Controller>
        <Scene duration="300%" triggerHook={0.2} pin>
          {progress => (
            <div style={{ height: "600px", position: "relative"}}>
              <Sequence ref={ref} progress={progress} />
            </div>
          )}
        </Scene>
      </Controller>
    </div>
  );
};

export default RenderSequence;
