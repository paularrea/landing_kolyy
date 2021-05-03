import React from "react";
import Layout from "../components/layout/layout";
import ScrollText from "../components/scrollText";
import Seo from "../components/seo";
import RenderSequence from "../components/Sequence/RenderSequence";
import {
  container,
  render_sequence,
} from "../styles/how-it-works.module.scss";

const HowItWorks = () => {
  return (
    <Layout>
      <Seo title="Team" />
      <div className={container}>
        <h1>How it works Page</h1>
        <div className={render_sequence}>
          <RenderSequence />
        </div>
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

export default HowItWorks;
