import React from "react";
import {
  tabs,
  tab,
  grayIcon,
} from "../swapper.module.scss";
import locationIcon from "../../../../../../../../images/icons/location_icon.png";
import healthIcon from "../../../../../../../../images/icons/health_icon.png";
import activityIcon from "../../../../../../../../images/icons/activity_icon.png";

const Switcher = ({ setSelectedTab, selected }) => {
  const onClickTab = (value) => setSelectedTab(value);

  const tabCollection = [
    {
      name: "Actividad",
      number: 1,
      url: activityIcon,
    },
    {
      name: "Salud",
      number: 2,
      url: healthIcon,
    },
    {
      name: "Localización",
      number: 3,
      url: locationIcon,
    },
  ];

  return (
    <nav className={tabs}>
      {tabCollection.map((item) => {
        return (
          <div
            aria-hidden="true"
            className={tab}
            onClick={() => onClickTab(item.number)}
            onKeyDown={() => onClickTab(item.number)}
          >
            <img
              className={selected !== item.number && grayIcon}
              src={item.url}
              alt={item.name}
            />
            <p>{item.name}</p>
          </div>
        );
      })}
    </nav>
  );
};

export default Switcher;
