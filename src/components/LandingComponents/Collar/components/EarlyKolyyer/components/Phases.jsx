import React from "react";
import {
  phases_container,
  phases_info,
} from "../earlyKolyyerBanner.module.scss";
import preSellPhases from "../../../../../../images/pre-sell-phases.png";

const Phases = () => {
  return (
    <div className={phases_container}>
      <p>Fases de pre-venta:</p>
      <img src={preSellPhases} alt="" />
      <div className={phases_info}>
        <p>
          <b>
            -30% <br /> early Kolyer
          </b>
        </p>
        <p>
          -20% <br /> January shot
        </p>
      </div>
    </div>
  );
};

export default Phases;
