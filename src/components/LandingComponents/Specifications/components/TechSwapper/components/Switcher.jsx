import React from "react";
import { tabs, tab, grayIcon, rotate } from "../techSwapper.module.scss";
import appIcon from "../../../../../../images/icons/app_icon_tech.png";
import collarIcon from "../../../../../../images/icons/collar_icon_tech.png";
import techIcon from "../../../../../../images/icons/tech_icon.png";
import garantiaIcon from "../../../../../../images/icons/garantia_icon.png";
import arrow from "../../../../../../images/icons/tech_arrow.png";

const Switcher = ({ setSelectedTab, selected }) => {
  const onClickTab = (value) => setSelectedTab(value);

  const tabCollection = [
    {
      name: "Collar",
      number: 1,
      url: collarIcon,
    },
    {
      name: "App",
      number: 2,
      url: appIcon,
    },
    {
      name: "Tech",
      number: 3,
      url: techIcon,
    },
    {
      name: "Garantía",
      number: 4,
      url: garantiaIcon,
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
            <div>
              <p>{item.name}</p>
              <img
                className={selected !== item.number && rotate}
                src={arrow}
                alt=""
              />
            </div>
          </div>
        );
      })}
    </nav>
  );
};

export default Switcher;
