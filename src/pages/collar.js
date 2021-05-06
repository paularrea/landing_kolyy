import React from "react";
import Layout from "../components/layout/layout";
import Seo from "../components/seo";
import { container, text, bg_img } from "../styles/collar.module.scss";

const Collar = () => {
  return (
    <Layout>
      <Seo title="The Collar" />
        <div className={bg_img}>
          <div className={text}>
            <h1>
              Conoce.
              <br />
              Cuida.
              <br />
              Disfruta.
              <br />
            </h1>
            <p>Sé de los primeros en reservar y tendrás un 20% de descuento.</p>
            <button>Reserva</button>
          </div>
        </div>
      <div className={container}>
      </div>
    </Layout>
  );
};

export default Collar;
