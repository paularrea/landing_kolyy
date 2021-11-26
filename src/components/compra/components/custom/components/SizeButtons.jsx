import React from "react";
import {
  buttons_container,
  buttons,
  size,
  flex_title,
} from "../custom.module.scss";

const SizeButtons = ({ showCollar }) => {
  return (
    <div className={buttons_container}>
      <div className={flex_title}>
        <p>2</p>
        <h5>Tamaño:</h5>
      </div>

      <div className={buttons}>
        <button className={size} onClick={showCollar} value="S">
          S
        </button>
        <button className={size} onClick={showCollar} value="M">
          M
        </button>
        <button className={size} onClick={showCollar} value="L">
          L
        </button>
        <button className={size} onClick={showCollar} value="XL">
          XL
        </button>
      </div>
    </div>
  );
};

export default SizeButtons;
