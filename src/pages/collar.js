import React, {useRef} from "react";
import ActivityComponent from "../components/collarComponents/activityComponent";
import AppComponent from "../components/collarComponents/appComponent";
import BookComponent from "../components/collarComponents/bookComponent";
import GpsComponent from "../components/collarComponents/gpsComponent";
import IntelligentComponent from "../components/collarComponents/intelligentComponent";
import LedComponent from "../components/collarComponents/ledComponent";
import Layout from "../components/layout/layout";
import Seo from "../components/seo";
import { container, content, bg_img } from "../styles/collar.module.scss";



const Collar = () => {

  return (
    <Layout>
      <Seo title="The Collar" />
      <div className={bg_img}>
        <div className={content}>
          <h2>
            Conoce.
            <br />
            Cuida.
            <br />
            Disfruta.
            <br />
          </h2>
          <p>Asegúrate de que tu amigo tenga siempre lo mejor.</p>
          <button>Reserva</button>
        </div>
      </div>
      <div className={container}>
        <GpsComponent />
        <ActivityComponent />
        <IntelligentComponent />
        <LedComponent />
        <AppComponent />
      </div>
      <BookComponent />
    </Layout>
  );
};

export default Collar;
