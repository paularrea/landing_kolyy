import React from "react";
import Layout from "../components/layout/layout";
import Seo from "../components/seo";
import {
  container,
  content,
  text,
  flex,
  bg_img,
  follow_container,
} from "../styles/placas.module.scss";
import ZeroPPImg from "../components/0perrosPerdidosComponents/0ppBackgroundImg";
import Intro from "../components/0perrosPerdidosComponents/intro";
import Placa from "../components/0perrosPerdidosComponents/placa";
import App from "../components/0perrosPerdidosComponents/app";
import FollowersKolyy from "../components/0perrosPerdidosComponents/followersKolyy";

const zeroPerrosPerdidos = () => {
  return (
    <Layout>
      <Seo title="#0perrosperdidos" />
      <ZeroPPImg>
        <div className={bg_img}>
          <div
            data-sal="fade"
            data-sal-delay="100"
            data-sal-duration="1000"
            className={content}
          >
            <h2>
              Un reto:
              <br /> #0perrosperdidos
            </h2>
            <p>Mantener a tu perro a salvo no cuesta nada.</p>
            <button>Súmate al reto</button>
          </div>
        </div>
      </ZeroPPImg>
      <Intro />
      <Placa />
      <App />
      <FollowersKolyy>
        <div className={follow_container}>
          <div className={text}>
            <h2>Ya somos más de 10.000</h2>
            <div className={flex}>
              <p>Forma parte de la comunidad #0perrosperdidos.</p>{" "}
              <button>Sigue nuestro hashtag</button>
            </div>
          </div>
        </div>
      </FollowersKolyy>
    </Layout>
  );
};

export default zeroPerrosPerdidos;
