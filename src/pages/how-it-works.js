import React from "react";
import Layout from "../components/layout/layout";
import Seo from "../components/seo";
import RenderSequence from "../components/Sequence/RenderSequence";
import {container, render_sequence, } from "../styles/how-it-works.module.scss";

const HowItWorks = () => {
  return (
    <Layout>
      <Seo title="Team" />
      <div className={container}>
        <h1>How it works Page</h1>
        <div>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quasi itaque
          voluptatum impedit repudiandae modi exercitationem veritatis fuga
          ipsum adipisci ut accusantium optio aperiam dignissimos rerum saepe,
          ea cupiditate accusamus explicabo?
        </div>
        <div>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quasi itaque
          voluptatum impedit repudiandae modi exercitationem veritatis fuga
          ipsum adipisci ut accusantium optio aperiam dignissimos rerum saepe,
          ea cupiditate accusamus explicabo?
        </div>
        <div>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quasi itaque
          voluptatum impedit repudiandae modi exercitationem veritatis fuga
          ipsum adipisci ut accusantium optio aperiam dignissimos rerum saepe,
          ea cupiditate accusamus explicabo?
        </div>
        <div>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quasi itaque
          voluptatum impedit repudiandae modi exercitationem veritatis fuga
          ipsum adipisci ut accusantium optio aperiam dignissimos rerum saepe,
          ea cupiditate accusamus explicabo?
        </div>
        <div className={render_sequence}>
          <RenderSequence />
        </div>
      </div>
    </Layout>
  );
};

export default HowItWorks;
