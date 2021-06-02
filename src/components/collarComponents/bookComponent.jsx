import React from "react";
import {Link} from 'gatsby'
import {
  book_container,
  img_container,
  text_container,
  text,
  now_what,
} from "../../styles/collar.module.scss";
import CollarImg from "./img/collarImg";
// import SubscribeComponent from "../blogComponents/subscribeComponent";
import BgDoggy from "./img/bgDoggy";

const BookComponent = () => {
  return (
    <>
      <div style={{ backgroundColor: "#F9F9F9", width: "100%" }}>
        <div className={book_container}>
          <div className={img_container}>
            <CollarImg />
          </div>
          <div className={text_container}>
            <h2 data-sal="slide-up" data-sal-delay="100" data-sal-duration="1000">¿Cómo puedo conseguirlo?</h2>
            <div data-sal="slide-up" data-sal-delay="100" data-sal-duration="1000" className={text}>
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
      </div>
      <BgDoggy>
        <div className={now_what}>
          <div className={text_container}>
            <h2 data-sal="slide-up" data-sal-delay="100" data-sal-duration="1000">¿Hasta entonces qué?</h2>
            <div data-sal="slide-up" data-sal-delay="100" data-sal-duration="1000" className={text}>
              <p>
                No esperes hasta 2022, nosotros no lo hacemos. <br /> Súmate a
                nuestra iniciativa <b>#0perrosperdidos</b> con nuestras placas
                de identificación kolyy y nuestra plataforma web para evitar las
                fugas o pérdidas de nuestros mejores amigos.
              </p>
              <Link to="/zero-perros-perdidos">
              <button>Saber más</button>
            </Link>
            </div>
          </div>
        </div>
      </BgDoggy>
    </>
  );
};

export default BookComponent;
