import React from "react";
import {
  container,
  book_container,
  img_container,
  text_container,
  text,
} from "../../styles/collar.module.scss";
import CollarImg from "./img/collarImg";
// import SubscribeComponent from "../blogComponents/subscribeComponent";
const BookComponent = () => {
  return (
    <div className={container}>
      <div className={book_container}>
        <div className={text_container}>
          <h2>¿Cómo puedo conseguirlo?</h2>
          <div className={text}>
            <p>
              Solo se están fabricando 500 collares ahora mismo, ¿quieres entrar
              en la lista de espera para conseguir el tuyo? <br /> <br />
              Dános tu email y te enviaremos la invitación.
            </p>
            {/* <SubscribeComponent /> */}
          </div>
        </div>
        <div className={img_container}>
          <CollarImg />
        </div>
      </div>
    </div>
  );
};

export default BookComponent;
