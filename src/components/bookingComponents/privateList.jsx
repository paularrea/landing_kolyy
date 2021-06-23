import React from "react";
import {
  flex_container,
  section,
  div_img_flex,
  text_flex,
  logo_container,
} from "../../styles/book.module.scss";
import icon1 from "../../images/List1.png";
import icon2 from "../../images/List2.png";
import icon3 from "../../images/icono-collar-perro-kolyy.png";
const PrivateList = () => {
  return (
    <section className={section}>
      <h2>Pronto anunciaremos el estreno del collar kolyy</h2>
      <p>
        Lo bueno se hace esperar y algunos podrán conseguirlo a principios de
        año. <br />
        Apúntate a la lista rellenando el formulario, y reserva la oportunidad
        de ser unos de los primeros.
      </p>
      <div className={flex_container}>
        <div className={div_img_flex}>
          <div className={text_flex}>
            <h2>
              <b style={{ color: "#30aaaa81" }}>1</b>
            </h2>
          </div>
          <div className={logo_container}>
            <img src={icon1} alt="lista" />
          </div>{" "}
          <div className={text_flex}>
            <p>
              <b> Rellena el formulario.</b>
            </p>
          </div>
        </div>
        <div className={div_img_flex}>
          <div className={text_flex}>
            <h2>
              <b style={{ color: "#30aaaa81" }}>2</b>
            </h2>
          </div>
          <div className={logo_container}>
            <img src={icon2} alt="mail" />
          </div>{" "}
          <div className={text_flex}>
            <p>
              <b> Entérate antes que nadie</b> de todas las novedades.
            </p>
          </div>
        </div>
        <div className={div_img_flex}>
          <div className={text_flex}>
            <h2>
              <b style={{ color: "#30aaaa81"}}>3</b>
            </h2>
          </div>
          <div className={logo_container}>
            <img src={icon3} alt="collar" />
          </div>{" "}
          <div className={text_flex}>
            <p>
              Tendrás la oportunidad de hacer tu{" "}
              <b>reserva antes del lanzamiento del collar.</b>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PrivateList;
