import React from "react";
import {
  buttons_container,
  buttons,
  size,
  flex_title,
} from "../custom.module.scss";

const SizeButtons = ({ addSizeToSelected }) => {
  return (
    <div className={buttons_container}>
      <div className={flex_title}>
        <p>2</p>
        <h5>Tamaño:</h5>
      </div>
      <div className={buttons}>
        <button className={size} onClick={addSizeToSelected} value="S">
          S
        </button>
        <button className={size} onClick={addSizeToSelected} value="M">
          M
        </button>
        <button className={size} onClick={addSizeToSelected} value="L">
          L
        </button>
        <button className={size} onClick={addSizeToSelected} value="XL">
          XL
        </button>
      </div>
    </div>
  );
};

export default SizeButtons;
