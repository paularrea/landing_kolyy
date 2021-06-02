
import React, { useRef } from "react";
import './sequence.css';

import { Controller, Scene } from "react-scrollmagic";
import Sequence from "./Sequence";

const RenderSequence = () => {
  const ref = useRef();
  return (
    <div className="App">
      <Controller>
        <Scene duration="1300%" triggerHook={0.1} pin>
          {progress => (
            <div style={{width:"100vw", height: "100vh", position: "relative"}}>
              <Sequence ref={ref} progress={progress} />
            </div>
          )}
        </Scene>
      </Controller>
    </div>
  );
};

export default RenderSequence;
