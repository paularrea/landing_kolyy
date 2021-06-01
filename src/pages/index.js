import * as React from "react";
import Layout from "../components/layout/layout";
import Seo from "../components/seo";
import ScrollText from "../components/scrollText";
// import RenderSequence from "../components/Sequence/RenderSequence";
// import {
//   render_sequence,
//   container,
//   flex_text,
//   big_button,
// } from "../styles/home.module.scss";
import {
  container,
  flex_text,
  big_button,
} from "../styles/home.module.scss";
import ScrollTextInicial from "../components/scrollTextInicial";

const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
    <ScrollTextInicial>
      <h1>Vive más con tu perro.</h1>
      <div className={flex_text}>
        <p>
          Te gustaría pasar toda tu vida con él, <br />
          ¿por qué no intentarlo?
        </p>
      </div>
    </ScrollTextInicial>
    {/* <div className={render_sequence}>
      <RenderSequence />
    </div> */}
    <div className={container}>
      <div
        style={{
          margin: "50vh 0",
        }}
      ></div>
      <ScrollText>
        <h1>Empoderarte a ti es cuidar de él.</h1>{" "}
        <div className={flex_text}>
          <p>
            Te damos las herramientas necesarias para que tomes las mejores
            decisiones.
          </p>{" "}
        </div>
      </ScrollText>
      <div
        style={{
          margin: "50vh 0",
        }}
      ></div>
      <ScrollText>
        <h1>¿Por dónde empezamos?</h1>{" "}
        <div className={flex_text}>
          {" "}
          <p>Por un collar que te abre a nuevas posibilidades.</p>{" "}
        </div>
      </ScrollText>
      <div
        style={{
          margin: "50vh 0",
        }}
      ></div>
      <ScrollText>
          <button className={big_button}>Te interesa.</button>
        <div className={flex_text}>
          {" "}
          <p>Haz click y revoluciona la conexión con tu perro.</p>{" "}
        </div>
      </ScrollText>
    </div>
  </Layout>
);

export default IndexPage;
