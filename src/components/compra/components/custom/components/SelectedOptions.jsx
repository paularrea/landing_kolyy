import React from "react";
import {
  selection_container,
  user_selection,
  value,
  flex,
  flex_container
} from "../custom.module.scss";
import BuyButton from "./BuyButton";

const SelectedOptions = ({ selected }) => {
  return (
    <div className={selection_container}>
      <BuyButton selected={selected} />
      <div className={user_selection}>
        <h5>Tu selección:</h5>
        <div className={flex_container}>
          <div className={flex}>
            <p>Color</p>
            <div
              style={{ background: selected.bgColor }}
              className={value}
            ></div>
          </div>
          <div className={flex}>
            <p>Talla</p>
            <div className={value}>{selected.size && selected.size}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SelectedOptions;
