import React from "react";
import TimelineText from "./timelineText";
import Future from "./future";
import { Link } from "gatsby";
import {
  sky_timeline,
  flex_container,
  timeline,
  timeline_flex,
  desarrollo,
  date,
  text,
} from "./timeline.module.scss";
import MediaQuery from "react-responsive";
import DesarrolloText from "./desarrolloText";

const Chronology = () => {
  return (
    <>
      <TimelineText>
        <div className={sky_timeline}>
          <h5>MAYO 2020</h5>
          <h1>Sky nos deja</h1>{" "}
          <p>
            El invierno pasado, un día, Sky dejó de comer y, 20 días después, se
            fue. <br /> <br /> A pesar de llevarlo a los mejores especialistas,
            no pudieron obtener el diagnóstico hasta que fue demasiado tarde. Un
            linfoma intestinal de 8 meses sin ningún síntoma externo se lo llevó
            sin dejarnos hacer nada.{" "}
          </p>{" "}
          <Link style={{ marginTop: "2rem" }} to="/porque-nacio-kolyy">
            <button style={{ color: "black", backgroundColor: "#D9DADD" }}>
              Saber más
            </button>
          </Link>
        </div>
      </TimelineText>
      <div className={flex_container}>
        <div className={desarrollo}>
          <MediaQuery minWidth={869}>
            {" "}
            <DesarrolloText>
              <h2>
                Desarrollo <br />
                del collar
              </h2>
            </DesarrolloText>
          </MediaQuery>
          <MediaQuery maxWidth={870}>
            {" "}
            <DesarrolloText>
              <h2>Desarrollo del collar</h2>
            </DesarrolloText>
          </MediaQuery>
        </div>
        <div className={timeline}>
          <TimelineText>
            <div className={timeline_flex}>
              <div className={date}>
                <p>JULIO 2020</p>
              </div>
              <div className={text}>
                <h2>Nace Kolyy</h2>
                <p>
                  Con el objetivo de aumentar la esperanza y la calidad de vida
                  de nuestros perros, Inspirando y motivando a sus familias para
                  que, de forma divertida, puedan llevar un estilo de vida
                  activo y saludable.
                </p>
              </div>
            </div>
          </TimelineText>

          <TimelineText>
            <div className={timeline_flex}>
              <div className={date}>
                <p>SEPTIEMBRE 2020</p>
              </div>
              <div className={text}>
                <h2>El collar como solución</h2>
                <p>
                  Después de investigar con universidades y personalidades
                  relevantes del sector descubrimos que un collar con aplicación
                  tecnológica es la solución ideal para nuestros perros.
                </p>
              </div>
            </div>
          </TimelineText>

          <TimelineText>
            <div className={timeline_flex}>
              <div className={date}>
                <p>NOVIEMBRE 2020</p>
              </div>
              <div className={text}>
                <h2>Creamos una comunidad</h2>
                <p>
                  Empezamos con nuestro objetivo de revolucionar la vida de los
                  perros a través de contenido y consejos en las redes sociales.
                </p>
                <a
                  href="https://www.instagram.com/kolyy_official/"
                  rel="noreferrer"
                  target="_blank"
                >
                  <button
                    style={{
                      marginTop: "1rem",
                      color: "black",
                      backgroundColor: "#D9DADD",
                    }}
                  >
                    Síguenos
                  </button>
                </a>
              </div>
            </div>
          </TimelineText>

          <TimelineText>
            <div className={timeline_flex}>
              <div className={date}>
                <p>DICIEMBRE 2020</p>
              </div>
              <div className={text}>
                <h2>Reto #0PerrosPerdidos</h2>
                <p>
                  Creamos la iniciativa con la que queremos conseguir que nIngún
                  perro se pierda, placas de identificación con código QR y las
                  regalamos para que lleguen a todos los hogares.
                </p>{" "}
                <Link to="/zero-perros-perdidos">
                  <button
                    style={{
                      marginTop: "1rem",
                      color: "black",
                      backgroundColor: "#D9DADD",
                    }}
                  >
                    Saber más
                  </button>
                </Link>
              </div>
            </div>
          </TimelineText>

          <TimelineText>
            <div className={timeline_flex}>
              <div className={date}>
                <p>MARZO 2021</p>
              </div>
              <div className={text}>
                <h2>La comunidad llega a los 15.000 miembros</h2>
              </div>
            </div>
          </TimelineText>

          <TimelineText>
            <div className={timeline_flex}>
              <div className={date}>
                <p>ABRIL 2021</p>
              </div>
              <div className={text}>
                <h2>10.000 perros con placas Kolyy</h2>
                <p>
                  Conseguimos llegar a las 5.000 placas identificativas
                  repartidas por toda España.
                </p>{" "}
              </div>
            </div>
          </TimelineText>

          <TimelineText>
            <div className={timeline_flex}>
              <div className={date}>
                <p>MAYO 2021</p>
              </div>
              <div className={text}>
                <h2>Primeras pruebas del collar Kolyy</h2>
                <p>
                  Después de mucho trabajo de desarrollo tecnológico hacemos las
                  primeras pruebas del collar con resultados más que
                  satisfactorios.
                </p>{" "}
              </div>
            </div>
          </TimelineText>

          <TimelineText>
            <div className={timeline_flex}>
              <div className={date}>
                <p>JUNIO 2021</p>
              </div>
              <div className={text}>
                <h2>15.000 perros con placas kolyy</h2>
              </div>
            </div>
          </TimelineText>

          <TimelineText>
            <div className={timeline_flex}>
              <div className={date}>
                <p>JUNIO 2021</p>
              </div>
              <div className={text}>
                <h2>Web oficial</h2>
                <p>
                  Estrenamos nueva imagen corporativa junto con nuestra primera
                  web oficial.
                </p>{" "}
              </div>
            </div>
          </TimelineText>
        </div>
      </div>
      <Future />
    </>
  );
};

export default Chronology;
