import React from "react";
import {
  cards_container,
  card_container,
  img,
  button,
} from "./cards.module.scss";
import OneCollar from "./img/OneCollar";
import TwoCollar from "./img/TwoCollar";
import ThreeCollar from "./img/ThreeCollar";

const Cards = () => {
  const cardsCollection = [
    {
      index: 1,
      img: <OneCollar />,
      deal: "-30%",
      ahorro: "Ahorras 63€",
      text: "Compra el primer collar inteligente del mercado.",
      price: "€147",
      before: "€210",
    },
    {
      index: 2,
      img: <TwoCollar />,
      deal: "-35%",
      ahorro: "Ahorras 147€",
      text: "Dos collares inteligentes para tus perros.",
      price: "€273",
      before: "€420",
    },
    {
      index: 3,
      img: <ThreeCollar />,
      deal: "-40%",
      ahorro: "Ahorras 252€",
      text: "Tres collares inteligentes a un precio único.",
      price: "€378",
      before: "€630",
    },
  ];
  return (
    <div className={cards_container}>
      <h2>Packs Early kolyer</h2>
      <p>
        Sé el primero en disfrutar de la tecnología kolyy con un descuento de
        hasta el 35%.
      </p>
      {cardsCollection.map((card) => {
        return (
          <div key={card.index} className={card_container}>
            <div className={img}>{card.img}</div>
            <div>
              <h5>
                {card.deal} <span>{card.ahorro}</span>
              </h5>
              <p>{card.text}</p>
              <h3>
                {card.price} <span>{card.before}</span>
              </h3>
              <button className={button}>Comprar</button>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Cards;
