import * as React from "react";
import Layout from "../components/layout/layout";
import Seo from "../components/seo";
import ScrollText from "../components/scrollText";
import RenderSequence from "../components/Sequence/RenderSequence";
import {
  render_sequence,
  container,
  flex_text,
} from "../styles/home.module.scss";
import ScrollTextInicial from "../components/scrollTextInicial";

const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
    <ScrollTextInicial>
      <h1>Inseparables de por vida.</h1>
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
        <h1>Un collar que te abre a nuevas posibilidades.</h1>
        <div className={flex_text}>
          {" "}
          <p>
            Con localizador GPS y registro de actividad para que tu perro pueda
            alcanzar sus objetivos de ejercicio.
          </p>
        </div>
        <button>Saber más</button>
      </ScrollText>
      <div
        style={{
          margin: "50vh 0",
        }}
      ></div>
      <ScrollText>
        <h1>Desde cualquier lugar, siempre conectado a ti.</h1>

        <div className={flex_text}>
          <p>
            Con la app puedes saber en tiempo real todo lo que el collar reporta
            y anticiparte a cualquier imprevisto.
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
            Creamos un collar que te lo pone muy fácil y te motiva para alcanzar
            los retos de tu perro. Nadie puede cuidar mejor a los perros que su
            familia.
          </p>{" "}
        </div>
      </ScrollText>
      <div
        style={{
          margin: "50vh 0",
        }}
      ></div>
      <ScrollText>
        <h1>Disponible en 2022.</h1>{" "}
        <div className={flex_text}>
          {" "}
          <p>
            Kolyy es el primer collar inteligente para perros con un potencial y
            recorrido infinitos. Este año estamos fabricando solo 500 para los
            más doglovers. <br />
            ¿Eres uno de ellos?
          </p>{" "}
        </div>
        <button>Resérvalo</button>
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
            No esperes hasta 2022, nosotros no lo hacemos. <br /> Súmate a
            nuestra iniciativa <b>0 perros perdidos</b> con nuestras placas de
            identificación kolyy y nuestra plataforma web para evitar las fugas
            o pérdidas de nuestros mejores amigos.
          </p>{" "}
        </div>
        <button>Súmate al reto</button>
      </ScrollText>
    </div>
  </Layout>
);

export default IndexPage;
