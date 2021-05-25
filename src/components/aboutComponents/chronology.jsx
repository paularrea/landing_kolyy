import React from "react";
import TimelineText from "./timelineText";
import Future from "./future"
import {
  flex_container,
  timeline,
  timeline_flex,
  desarrollo,
  date,
  text,
} from "./timeline.module.scss";
import DesarrolloText from "./desarrolloText";

const Chronology = () => {
  return (
    <>
    <div className={flex_container}>
      <div className={desarrollo}>
        <DesarrolloText>
          <h2>Desarrollo del collar</h2>
        </DesarrolloText>
      </div>

      <div className={timeline}>
        <TimelineText>
          <div className={timeline_flex}>
            <div className={date}>
              <p>MAYO 2020</p>
            </div>
            <div className={text}>
              <h2>Sky nos deja</h2>
              <p>
                El invierno pasado, un día, Sky dejó de comer y, 20 días
                después, se fue. <br /> <br /> A pesar de llevarlo a los mejores
                especialistas, no pudieron obtener el diagnóstico hasta que fue
                demasiado tarde. Un linfoma intestinal de 8 meses sin ningún
                síntoma externo se lo llevó sin dejarnos hacer nada.{" "}
              </p>
            </div>
          </div>
        </TimelineText>

        <TimelineText>
          <div className={timeline_flex}>
            <div className={date}>
              <p>OCTUBRE 2020</p>
            </div>
            <div className={text}>
              <h2>Nace la comunidad Kolyy</h2>
              <p>
                Empezamos con nuestro objetivo de revolucionar la vida de los
                perros a través de contenido y consejos en las redes sociales.
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
              <h2>El collar</h2>
              <p>
                Empezamos a investigar y desarrollar los primeros prototipos del
                collar inteligente.
              </p>
            </div>
          </div>
        </TimelineText>

        <TimelineText>
          <div className={timeline_flex}>
            <div className={date}>
              <p>DICIEMBRE 2020</p>
            </div>
            <div className={text}>
              <h2>Iniciativa 0 perros perdidos</h2>
              <p>
                Creamos la iniciativa con la que queremos conseguir que nungún
                perro se pierda, placas de identificación con código QR y las
                regalamos para que lleguen a todos los hogares.
              </p>{" "}
            </div>
          </div>
        </TimelineText>

        <TimelineText>
          <div className={timeline_flex}>
            <div className={date}>
              <p>ENERO 2021</p>
            </div>
            <div className={text}>
              <h2>3.000 kolyers con placa</h2>
              <p>
                Conseguimos llegar a los 3.000 kolyers y probar la fiabilidad de
                nuestras placas.
              </p>{" "}
            </div>
          </div>
        </TimelineText>

        <TimelineText>
          <div className={timeline_flex}>
            <div className={date}>
              <p>MARZO 2021</p>
            </div>
            <div className={text}>
              <h2>5.000 kolyers con placa</h2>
              <p>
                Conseguimos llegar a las 5.000 placas identificativas repartidas
                por toda España.
              </p>{" "}
            </div>
          </div>
        </TimelineText>

        <TimelineText>
          <div className={timeline_flex}>
            <div className={date}>
              <p>ABRIL 2021</p>
            </div>
            <div className={text}>
              <h2>Creación de la webapp</h2>
              <p>
                Creamos una webapp que ayuda a los kolyers a la agenda de sus
                perros y a colaborar en la búsqueda de perros kolyers perdidos.
              </p>{" "}
            </div>
          </div>
        </TimelineText>
      </div>
    </div>
    <Future/>
    </>
  );
};

export default Chronology;
