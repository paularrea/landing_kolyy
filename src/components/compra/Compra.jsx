import React from "react";
import { container, info } from "./compra.module.scss";
import Cards from "../compra/components/cards/Cards"
import EarlyKolyyerBanner from "../LandingComponents/Collar/components/EarlyKolyyer/EarlyKolyyerBanner";
import IntroInfo from "../LandingComponents/Collar/components/introInfo/IntroInfo";

const Compra = () => {
  return (
    <div className={container}>
      <h2>Dale más vida</h2>
      <p>
        Sé el primero en disfrutar de la tecnología kolyy con un descuento de
        hasta el 40%.
      </p>
      <div className={info}>
        <IntroInfo />
      </div>
      <Cards />
      <EarlyKolyyerBanner />
    </div>
  );
};

export default Compra;
