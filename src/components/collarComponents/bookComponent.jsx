import React from "react";
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
            <h2>¿Cómo puedo conseguirlo?</h2>
            <div className={text}>
              <p>
                Solo se están fabricando 500 collares ahora mismo, ¿quieres
                entrar en la lista de espera para conseguir el tuyo? <br />{" "}
                <br />
                Dános tu email y te enviaremos la invitación.
              </p>
              {/* <SubscribeComponent /> */}
            </div>
          </div>
        </div>
      </div>
      <BgDoggy>
        <div className={now_what}>
          <div className={text_container}>
            <h2>¿Hasta entonces qué?</h2>
            <div className={text}>
              <p>
                No esperes hasta 2022, nosotros no lo hacemos. <br /> Súmate a
                nuestra iniciativa <b>#0perrosperdidos</b> con nuestras placas
                de identificación kolyy y nuestra plataforma web para evitar las
                fugas o pérdidas de nuestros mejores amigos.
              </p>
              <button>Botón</button>
            </div>
          </div>
        </div>
      </BgDoggy>
    </>
  );
};

export default BookComponent;
