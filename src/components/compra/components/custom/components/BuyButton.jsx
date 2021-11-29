import React from "react";
import Checkout from "../../../../../Stripe/checkout";
import { buy_button_container } from "../custom.module.scss";

const BuyButton = ({ selected }) => {
  return (
    <div className={buy_button_container}>
      <div>
        <h5>
          €147<span>€210</span>
        </h5>
        <p>IVA incl.</p>
      </div>
      <Checkout selected={selected} />
    </div>
  );
};

export default BuyButton;
