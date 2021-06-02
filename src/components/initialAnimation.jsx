import React from "react";
import {on_load} from "../styles/index.module.scss"
import Logo from "./header/components/logo";

const InitialAnimation = () => {
  return (
    <div className={on_load}>
      <div>
        <Logo/>
      </div>
    </div>
  );
};

export default InitialAnimation;
