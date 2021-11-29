import React from "react";
import { list_container } from "./list.module.scss";

const List = () => {
  const lista = [
    {
      title: "1. PROTÉGELO",
      text: "Vive tranquilo, con el collar no podrás perderlo.",
    },
    {
      title: "2. CUÍDALO",
      text:
        "Controla su ejercicio y su peso y anticípate a sus posibles problemas.",
    },
    {
      title: "3. DIVIÉRTETE",
      text: "Actívate con él y disfruta del ejercicio juntos.",
    },
  ];
  return (
    <div className={list_container}>
      {lista.map((item) => {
        return (
          <div>
            <h2>{item.title}</h2>
            <p>{item.text}</p>
          </div>
        );
      })}
    </div>
  );
};

export default List;
