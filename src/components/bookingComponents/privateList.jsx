import React from "react";
import {
  flex_container,
  section,
  div_img_flex,
  text_flex,
  logo_container,
} from "../../styles/book.module.scss";
import icon1 from "../../images/List1.png"
import icon2 from "../../images/List2.png"
import icon3 from "../../images/List3.png"
const PrivateList = () => {
  return (
    <section className={section}>
      <h2>Lista privada</h2>
      <p>
        Apúntate a nuestra lista privada y sé el primero en enterarte del
        lanzamiento.
      </p>
      <div className={flex_container}>
        <div className={div_img_flex}>
          <div className={logo_container}><img src={icon1} alt="lista" /></div>{" "}
          <div className={text_flex}>
            <p>
              1.
              <b> Rellena el formulario</b> con tus datos de contacto
            </p>
          </div>
        </div>
        <div className={div_img_flex}>
        <div className={logo_container}><img src={icon2} alt="mail" /></div>{" "}
          <div className={text_flex}>
            <p>
              2.
              <b> Recibirás noticias sobre el lanzamiento</b> en tu correo
              electrónico antes que nadie.
            </p>
          </div>
        </div>
        <div className={div_img_flex}>
        <div className={logo_container}><img src={icon3} alt="collar" /></div>{" "}
          <div className={text_flex}>
            <p>
              3. Tendrás <b>más posibilidades de asegurarte tu collar </b>una
              vez salga.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PrivateList;
