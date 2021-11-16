import React from "react";
import movistarIcon from "../../../../../../images/icons/movistarIcon.png";
import uabIcon from "../../../../../../images/icons/uabIcon.png";
import cawecIcon from "../../../../../../images/icons/cawecIcon.png";
import { sponsors_container } from "../features.module.scss";

const Sponsors = () => {
  return (
    <div className={sponsors_container}>
      <h4>Colaboradores</h4>
      <div>
        <img src={movistarIcon} alt="Movistar colaborador de Kolyy" />
        <img
          src={uabIcon}
          alt="Universidad Autónoma de Barcelona colaborador de Kolyy"
        />
        <img src={cawecIcon} alt="CAWEC colaborador de Kolyy" />
      </div>
    </div>
  );
};

export default Sponsors;
