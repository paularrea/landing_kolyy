import React from "react";
import Layout from "../components/layout/layout";
import ScrollText from "../components/scrollText";
import Seo from "../components/seo";
import RenderSequence from "../components/Sequence/RenderSequence";
import {
  container,
  render_sequence,
} from "../styles/collar.module.scss";

const Collar = () => {
  return (
    <Layout>
      <Seo title="The Collar" />
        <div className={render_sequence}>
          <RenderSequence />
        </div>
      <div className={container}>
        <ScrollText>
          This is a very important phrase! <br/> Very good, very nice
        </ScrollText>
        <div style={{
              margin:"50vh 0"
          }}></div>
        <ScrollText>
          This is a very important phrase! <br/> Very good, very nice
        </ScrollText>
        <div style={{
              margin:"30vh 0"
          }}></div>
        <ScrollText>
          This is a very important phrase! <br/> Very good, very nice
        </ScrollText>
      </div>
    </Layout>
  );
};

export default Collar;
