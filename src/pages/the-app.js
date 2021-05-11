import React from "react";
import Layout from "../components/layout/layout";
import Seo from "../components/seo";
import {
  container,
  text,
  flex_container,
  bg_img,
  text_div,
  img_div,
  img_bg_container,
  img_big_div,
} from "../styles/app.module.scss";

const App = () => {
  return (
    <Layout>
      <Seo title="The App" />
      <div className={bg_img}>
        <div className={text}>
          <h1>Conecta con tu perro en un click</h1>
          <p>El collar registra, la app reporta.</p>
        </div>
      </div>
      <div className={container}>
        <div className={flex_container}>
          <div
            style={{ textAlign: "left", paddingRight: "5rem" }}
            className={text_div}
          >
            <h1>Todo lo que importa en una misma app.</h1>
            <p>
              Conoce, aprendre y actúa. <br />
              <br />
              Todo lo que necesitas saber para disfrutar de tu perro está en tus
              manos.
            </p>
          </div>
          <div className={img_div}></div>
          <div className={img_div}></div>
        </div>

        <div className={img_bg_container}></div>

        <div className={flex_container}>
          <div className={img_div}></div>
          <div className={img_div}></div>
          <div
            style={{ textAlign: "right", paddingLeft: "5rem" }}
            className={text_div}
          >
            <h1>Todo lo que importa en una misma app.</h1>
            <p>
              Conoce, aprendre y actúa. <br />
              <br />
              Todo lo que necesitas saber para disfrutar de tu perro está en tus
              manos.
            </p>
          </div>
        </div>

        <div className={img_bg_container}></div>

        <div className={flex_container}>
          <div
            style={{ textAlign: "left", paddingRight: "5rem" }}
            className={text_div}
          >
            <h1>Forma parte de una comunidad única.</h1>
            <p>
              La app estará disponible a principios de 2022. Hasta entonces
              únete a nuestra comunidad en redes sociales.
            </p>
          </div>
          <div className={img_big_div}></div>
        </div>
      </div>
    </Layout>
  );
};

export default App;
