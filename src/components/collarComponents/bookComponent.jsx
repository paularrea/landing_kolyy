import React from "react";
import {
  book_container,
  text_container,
  text,
} from "../../styles/collar.module.scss";
// import SubscribeComponent from "../blogComponents/subscribeComponent";
import BgCollarTypes from "./img/bgCollarTypes";

const BookComponent = () => {
  return (
    <>
      <BgCollarTypes>
        <div className={book_container}>
          <div className={text_container}>
            <h2
              data-sal="slide-up"
              data-sal-delay="100"
              data-sal-duration="1000"
            >
              ¿Cómo puedo conseguirlo?
            </h2>
            <div
              data-sal="slide-up"
              data-sal-delay="100"
              data-sal-duration="1000"
              className={text}
            >
              <p>
                Kolyy es el primer collar para perros con un potencial y
                recorrido infinitos. Este año estamos fabricando 500 collares
                disponibles para 2022.
                <br />
                ¿Quieres asegurarte uno? <br />
                <br />
                Déjanos tu correo electrónico y te enviaremos una invitación.
              </p>
              {/* <SubscribeComponent /> */}
            </div>
          </div>
        </div>
      </BgCollarTypes>
    </>
  );
};

export default BookComponent;
