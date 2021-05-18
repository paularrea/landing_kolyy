import React from "react";
import {
  book_container,
  img_bg,
  img_text,
} from "../../styles/collar.module.scss";
const BookComponent = () => {
  return (
    <div className={book_container}>
      <div className={img_bg}>
        <h2>¿Cómo puedo conseguirlo?</h2>
        <div className={img_text}>
          <p>
            Sólo existen 1.000 collares ahora mismo, ¿quieres entrar la en la
            lista de espera para conseguir el tuyo? Dános tu email y te
            enviaremos la invitación.
          </p>
          <button>tu email</button>
        </div>
      </div>
    </div>
  );
};

export default BookComponent;
