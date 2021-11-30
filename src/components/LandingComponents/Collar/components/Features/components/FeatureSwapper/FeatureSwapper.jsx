import React, { useState } from "react";
import MediaQuery from "react-responsive";
import mockupActivity from "../../../../../../../images/mockupActivity.png";
import mockupHealth from "../../../../../../../images/mockupHealth.png";
import mockupLocation from "../../../../../../../images/mockupLocation.png";
import GoogleAppleConnect from "./components/GoogleAppleConntect/GoogleAppleConnect";
import Switcher from "./components/Switcher";
import ScrollFeatures from "../horizontalScrollFeature/ScrollFeatures"
import {
  container,
  hide,
  tabInfo,
  flex_container,
} from "./swapper.module.scss";

const FeatureSwapper = () => {
  const [selected, setSelectedTab] = useState(1);

  const selectedTab = [
    {
      text: (
        <p>
          Tracking de <b>pasos</b> y <b>tiempo de actividad.</b> de tu perro.
          Reportes{" "}
          <b>diarios, semanales y menusales. Objetivos personalizables.</b> a tu
          perro.
        </p>
      ),
      img: mockupActivity,
      index: 1,
    },
    {
      text: (
        <p>
          <b>Seguimiento y sugerencias de </b>profesionales veterinarios.{" "}
          <b>Informes periódicos</b> de recomendaciones. Servicio de{" "}
          <b>consultas 24h.</b>
        </p>
      ),
      img: mockupHealth,
      index: 2,
    },
    {
      text: (
        <p>
          Localización <b>en tiempo real</b> por GPS.
          <br />
          Función <b>“perro perdido”.</b>
          <br />
          Cobertura por todo el territorio <b>nacional.</b>
        </p>
      ),
      img: mockupLocation,
      index: 3,
    },
  ];
  return (
    <div className={container}>
      <GoogleAppleConnect />
      <h2>Todos los detalles en tu mano</h2>
      <Switcher selected={selected} setSelectedTab={setSelectedTab} />
      <MediaQuery minWidth={900}>
        <div className={flex_container}>
          {selectedTab.map((item) => (
            <div className={tabInfo}>
              {item.text}
              <img src={item.img} alt={item.text} />
            </div>
          ))}
        </div>
      </MediaQuery>
      <MediaQuery maxWidth={899}>
        {selectedTab.map((item) => (
          <div className={selected === item.index ? tabInfo : hide}>
            {item.text}
            <img src={item.img} alt={item.text} />
          </div>
        ))}
      </MediaQuery>
      <ScrollFeatures/>
    </div>
  );
};

export default FeatureSwapper;
