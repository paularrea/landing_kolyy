import React from "react";
import { selling_bar_container, total_bar, completed, bar_info } from "../earlyKolyyerBanner.module.scss";

const ProgressiveBar = () => {
  return (
    <section>
      <div className={total_bar}>
        <div className={completed}></div>
      </div>
      <div className={bar_info}>
        <p>Quedan el 79% de collares</p>
        <p>32 días de pre-venta</p>
      </div>
    </section>
  );
};
const SellingBar = () => {
  return (
    <div className={selling_bar_container}>
      <h5>
        Early Kolyer: <span>Ahorra el 30%</span>
      </h5>
      <ProgressiveBar />
    </div>
  );
};

export default SellingBar;
