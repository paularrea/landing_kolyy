import React from "react";
import {Link} from 'gatsby'
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
      <Seo title="The Collar" />
      <BgCollar>
        <div className={bg_img}>
          <div className={content}>
            <h2>Disfruta al máximo de él.</h2>
            <p>Asegúrate de que tu amigo tenga siempre lo mejor.</p>
            <Link to="/book">
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
