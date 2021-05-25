import React from "react";
import TimelineText from "./timelineText";
import {
  flex_container_future,
  timeline,
  timeline_flex,
  desarrollo,
  date,
  text,
} from "./timeline.module.scss";
import DesarrolloTextFuture from "./desarrolloTextFuture";

const Future = () => {
  return (
    <div className={flex_container_future}>
      <div className={desarrollo}>
        <DesarrolloTextFuture>
        </DesarrolloTextFuture>
      </div>

      <div className={timeline}>
        <TimelineText>
          <div className={timeline_flex}>
            <div className={date}>
              <p></p>
            </div>
            <div className={text}>
              <h5>PRÓXIMOS PASOS</h5>
              <h2>Primeros prototipos del collar</h2>
            </div>
          </div>
        </TimelineText>

        <TimelineText>
          <div className={timeline_flex}>
            <div className={date}>
              <p></p>
            </div>
            <div className={text}>
              <h2>App kolyy</h2>
            </div>
          </div>
        </TimelineText>

        <TimelineText>
          <div className={timeline_flex}>
            <div className={date}>
              <p></p>
            </div>
            <div className={text}>
              <h2>Primeros 1.000 collares</h2>
            </div>
          </div>
        </TimelineText>

        <TimelineText>
          <div className={timeline_flex}>
            <div className={date}>
              <p></p>
            </div>
            <div className={text}>
              <h2>Producción a gran escala</h2>
            </div>
          </div>
        </TimelineText>
      </div>
    </div>
  );
};

export default Future;
