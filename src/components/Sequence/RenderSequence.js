
import React, { useRef } from "react";
import './sequence.css';

import { Controller, Scene } from "react-scrollmagic";
import Sequence from "./Sequence";

const RenderSequence = () => {
  const ref = useRef();
  return (
    <div className="App">
      <Controller>
        <Scene duration="200%" triggerHook="onLeave" pin>
          {progress => (
            <div style={{ height: "600px", position: "relative" }}>
              <Sequence ref={ref} progress={progress} />
            </div>
          )}
        </Scene>
      </Controller>
    </div>
  );
};

export default RenderSequence;
