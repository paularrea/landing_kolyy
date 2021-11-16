import React, { useState } from "react";
import mockupActivity from "../../../../../../../images/mockupActivity.png";
import mockupHealth from "../../../../../../../images/mockupHealth.png";
import mockupLocation from "../../../../../../../images/mockupLocation.png";
import Switcher from "./components/Switcher";
import { container, hide, tabInfo } from "./swapper.module.scss";

const FeatureSwapper = () => {
  const [selected, setSelectedTab] = useState(1);

  const selectedTab = [
    {
      text: `Monitorización en pasos y tiempo. 
      Reporte diario, semanal y mensual.
      Objetivos personalizables.`,
      img: mockupActivity,
      index: 1,
    },
    {
      text: `Seguimiento por profesionales veterinarios.
      Informes periódicos de recomendaciones.
      Servicio de preguntas a profesionales.`,
      img: mockupHealth,
      index: 2,
    },
    {
      text: `Localizador GPS.
      Función “perro perdido”.
      Cobertura nacional.`,
      img: mockupLocation,
      index: 3,
    },
  ];
  return (
    <div className={container}>
      <h2>Todo en tus manos</h2>
      <Switcher selected={selected} setSelectedTab={setSelectedTab} />
      {selectedTab.map((item) => (
        <div className={selected === item.index ? tabInfo : hide}>
          <p>{item.text}</p>
          <img src={item.img} alt={item.text} />
        </div>
      ))}
    </div>
  );
};

export default FeatureSwapper;
