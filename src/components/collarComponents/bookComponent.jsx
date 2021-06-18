import React from "react";
import {Link} from 'gatsby'
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
                recorrido infinitos y estará disponible en 2022.
                <br />
                <br />
                <b>¿Quieres asegurarte uno?</b> <br />
                <br />
                ¡Apúntate a la lista!
              </p>
              <Link to='/reserva-collar-kolyy'><button style={{marginTop:'2rem'}}>Apúntate</button></Link>
            </div>
          </div>
        </div>
      </BgCollarTypes>
    </>
  );
};

export default BookComponent;
