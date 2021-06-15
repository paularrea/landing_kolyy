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
                <p>JULIO 2021</p>
              </div>
              <div className={text}>
              <h6 style={{fontWeight:'400'}}>PRÓXIMOS PASOS</h6>
                <h2>App Kolyy</h2>
              </div>
            </div>
          </TimelineText>

          <TimelineText>
            <div className={timeline_flex}>
              <div className={date}>
                <p>JULIO 2021</p>
              </div>
              <div className={text}>
                <h2>Primeros 50 perros con el collar Kolyy</h2>
              </div>
            </div>
          </TimelineText>

          <TimelineText>
            <div className={timeline_flex}>
              <div className={date}>
                <p>SEPTIEMBRE 2021</p>
              </div>
              <div className={text}>
                <h2>Certificación europea del collar</h2>
              </div>
            </div>
          </TimelineText>
      </div>
    </div>
  );
};

export default Future;
