import React from "react";
import ActivityComponent from "../components/collarComponents/activityComponent";
import GpsComponent from "../components/collarComponents/gpsComponent";
import InteligentComponent from "../components/collarComponents/inteligentComponent";
import LedComponent from "../components/collarComponents/ledComponent";
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
        <GpsComponent />
        <ActivityComponent />
        <InteligentComponent />
        <LedComponent />
      </div>
    </Layout>
  );
};

export default Collar;
