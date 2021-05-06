import * as React from "react";
import Layout from "../components/layout/layout";
import Seo from "../components/seo";
import ScrollText from "../components/scrollText";
import RenderSequence from "../components/Sequence/RenderSequence";
import {render_sequence, container} from "../styles/home.module.scss"

const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
    <div className={render_sequence}>
      <RenderSequence />
    </div>
    <div className={container}>
      <ScrollText>
        This is a very important phrase! <br /> Very good, very nice
      </ScrollText>
      <div
        style={{
          margin: "50vh 0",
        }}
      ></div>
      <ScrollText>
        This is a very important phrase! <br /> Very good, very nice
      </ScrollText>
      <div
        style={{
          margin: "30vh 0",
        }}
      ></div>
      <ScrollText>
        This is a very important phrase! <br /> Very good, very nice
      </ScrollText>
      <div
        style={{
          margin: "30vh 0",
        }}
      ></div>
      <ScrollText>
        This is a very important phrase! <br /> Very good, very nice
      </ScrollText>
    </div>
  </Layout>
);

export default IndexPage;
