import React from "react";
import { Link } from "gatsby";
import ActivityComponent from "../components/collarComponents/activityComponent";
import BookComponent from "../components/collarComponents/bookComponent";
import CommunityComponent from "../components/collarComponents/communityComponent";
import DespieceComponent from "../components/collarComponents/despieceComponent";
import GpsComponent from "../components/collarComponents/gpsComponent";
import IntelligentComponent from "../components/collarComponents/intelligentComponent";
import Layout from "../components/layout/layout";
import Seo from "../components/seo";
import { container, content, bg_img } from "../styles/collar.module.scss";
import BgCollar from "../components/collarComponents/img/bgCollar";

const Collar = () => {
  return (
    <Layout>
      <Seo title="Collar para perros" />
      <BgCollar>
        <div className={bg_img}>
          <div
            data-sal="fade"
            data-sal-delay="100"
            data-sal-duration="1000"
            className={content}
          >
            <h2>Un collar que inspira a amantes de los perros a divertirse</h2>
            <p>
              Vive una experiencia única acompañando a tu perro hacia un estilo
              de vida activo y saludable.
            </p>
            <Link to="/reserva">
              <button>Reserva</button>
            </Link>
          </div>
        </div>
      </BgCollar>
      <div className={container}>
        <GpsComponent />
        <ActivityComponent />
        <IntelligentComponent />
        <CommunityComponent />
        <DespieceComponent />
      </div>
      <BookComponent />
    </Layout>
  );
};

export default Collar;
