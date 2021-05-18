import * as React from "react";
import Layout from "../components/layout/layout";
import Seo from "../components/seo";
import ScrollText from "../components/scrollText";
import RenderSequence from "../components/Sequence/RenderSequence";
import { render_sequence, container, flex_text } from "../styles/home.module.scss";
import ScrollTextInicial from "../components/scrollTextInicial";

const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
      <ScrollTextInicial>
      <h1>Revolucionamos la conexión con tu perro.</h1>
        <div className={flex_text}>
          <p>Saber lo que necesita nunca había sido tan fácil.</p>
        </div>
      </ScrollTextInicial>
    <div className={render_sequence}>
      <RenderSequence />
    </div>
    <div className={container}>
      <div
        style={{
          margin: "50vh 0",
        }}
      ></div>
      <ScrollText>
        <h1>
          Un collar inteligente que te permitirá tomar las mejores decisiones.
        </h1>
        <div className={flex_text}>
          {" "}
          <p>
            Con localizador GPS a tiempo real, señal de alerta ante pérdida,
            registro de actividad física, horas de sueño y mucho más.{" "}
          </p>
        </div>
      </ScrollText>
      <div
        style={{
          margin: "50vh 0",
        }}
      ></div>
      <ScrollText>
        <h1>Conoce, aprende, actúa.</h1>

        <div className={flex_text}>
          <p>
            Con la app podrás conocer todo lo que el collar reporte para poder
            anticiparte a cualquier problema y encontrar una solución antes de
            que sea demasiado tarde.{" "}
          </p>
        </div>
      </ScrollText>
      <div
        style={{
          margin: "50vh 0",
        }}
      ></div>
      <ScrollText>
        <h1>Empoderarte a ti es cuidar de él.</h1>{" "}
        <div className={flex_text}>
          <p>
            Creamos un collar que te ayuda a conocer y aprender de tu perro para
            cuidar de él, porque nadie puede cuidar mejor de los perros que los
            que están a cargo de ellos.
          </p>{" "}
        </div>
      </ScrollText>
      <div
        style={{
          margin: "50vh 0",
        }}
      ></div>
      <ScrollText>
        <h1>Disponible en 2023.</h1>{" "}
        <div className={flex_text}>
          {" "}
          <p>
            Kolyy es un collar único en el mercado por lo que estamos aún en
            proceso de desarrollo. Resérvalo y consigue un descuento del precio
            final.
          </p>{" "}
        </div>
        <button>Resérvalo con un 20% de descuento</button>
      </ScrollText>
      <div
        style={{
          margin: "50vh 0",
        }}
      ></div>
      <ScrollText>
        <h1>¿Hasta entonces qué?</h1>{" "}
        <div className={flex_text}>
          {" "}
          <p>
            No esperes hasta 2023, nosotros no lo hacemos. Súmate a nuestra
            iniciativa 0 perros perdidos con nuestras placas de identificación
            kolyy y nuestra web-app para evitar fugas o pérdidas evitables.
          </p>{" "}
        </div>
        <button>Consigue una</button>
      </ScrollText>
    </div>
  </Layout>
);

export default IndexPage;
