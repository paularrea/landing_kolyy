import React from "react";
import {
  buttons_container,
  buttons,
  black,
  blue,
  yellow,
  flex_title,
} from "../custom.module.scss";

const ColorButtons = ({ showCollar }) => {
  return (
    <div className={buttons_container}>
      <div className={flex_title}>
        <p>1</p>
        <h5>Color:</h5>
      </div>

      <div className={buttons}>
        <button className={black} onClick={showCollar} value="black"></button>
        <button className={blue} onClick={showCollar} value="blue"></button>
        <button className={yellow} onClick={showCollar} value="yellow"></button>
      </div>
    </div>
  );
};

export default ColorButtons;
