import React, { useState, useEffect } from "react";
import {
  container,
  img,
  buttons,
  black,
  blue,
  yellow,
} from "./custom.module.scss";
import SelectedOptions from "./components/SelectedOptions";
import BlackCollar from "../../../LandingComponents/Specifications/components/ColorSwapper/BlackCollar";
import BlueCollar from "../../../LandingComponents/Specifications/components/ColorSwapper/BlueCollar";
import YellowCollar from "../../../LandingComponents/Specifications/components/ColorSwapper/YellowCollar";
import ColorButtons from "./components/ColorButtons";
import SizeButtons from "./components/SizeButtons";
import { product_id } from "../../../../Stripe/products";
import MediaQuery from "react-responsive";
import CustomCollarDesk from "./CustomCollarDesk";

const CustomCollar = () => {
  const [chooseColor, setChooseColor] = useState("black");
  const [chooseSize, setChooseSize] = useState("");
  const [productId, setProductId] = useState("");
  const [selected, setSelected] = useState({});

  const collection = [
    {
      img: <BlackCollar />,
      color: "black",
      index: 1,
      bgColor:
        "radial-gradient(58.95% 46.94% at 50% 50%, #6F6F6F 0%, #434343 100%)",
    },
    {
      img: <BlueCollar />,
      color: "blue",
      index: 2,
      bgColor: "#3EADBF",
    },
    {
      img: <YellowCollar />,
      color: "yellow",
      index: 3,
      bgColor: "#744254",
    },
  ];

  const showCollar = (e) => {
    setChooseColor(e.target.value);
    setChooseSize("");
  };

  const addSizeToSelected = (e) => {
    setChooseSize((selected["size"] = e.target.value));
  };

  useEffect(() => {
    chooseColor &&
      setSelected(
        collection.filter((collar) => collar.color === chooseColor)[0]
      );
  }, [chooseColor]);

  useEffect(() => {
    setProductId((selected["id"] = product_id(selected)));
    chooseSize && setSelected({ ...selected });
  }, [chooseSize]);

  return (
    <div id='buy-collar'>
    <MediaQuery maxWidth={870}>
         {chooseColor && (
        <div style={{ background: selected.bgColor }} className={container}>
          <div className={img}>{selected.img}</div>
          <h3>Personaliza tu Kolyy</h3>
          <ColorButtons selected={selected} showCollar={showCollar} />
          <SizeButtons selected={selected} addSizeToSelected={addSizeToSelected} />
          <SelectedOptions selected={selected} />
        </div>
      )}
    </MediaQuery>
   <MediaQuery minWidth={870}>
     <CustomCollarDesk selected={selected} showCollar={showCollar} addSizeToSelected={addSizeToSelected}/>
   </MediaQuery>
    </div>
  );
};

export default CustomCollar;
