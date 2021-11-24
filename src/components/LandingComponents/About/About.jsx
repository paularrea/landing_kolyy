import React, { useState } from "react";
import {
  container,
  green_container,
  flex_container,
  flex_div,
} from "./about.module.scss";
import { fb_insta_icons } from "../../../images/icons/fb_insta_icons.png";
import AboutImg from "./components/AboutImg";
import AnimatedCounter from "./components/AnimatedCounter";
import { InView } from "react-intersection-observer";
import FaQs from "./components/FaQs";

const About = () => {
  return (
    <div id="kolyy" className={container}>
      <h2>Sobre Kolyy</h2>
      <p>Kolyy te avisa si tu perro se escapa y te ayuda a encontrarlo.</p>
      <AboutImg />
      <InView>
        {({ inView, ref, entry }) => (
          <div ref={ref}>
            <div className={green_container}>
              <h2>Comunidad</h2>
              <div className={flex_container}>
                <div style={{ borderRight: "2px solid whitesmoke" }}>
                  <h3>
                    +
                    <AnimatedCounter
                      inView={inView}
                      number="22000"
                      duration="6"
                    />
                  </h3>
                  <div className={flex_div}>
                    <p>kolyers</p>
                    <img src={fb_insta_icons} alt="" />
                    <img src={fb_insta_icons} alt="" />
                  </div>
                </div>
                <div>
                  <h3>
                    +
                    <AnimatedCounter
                      inView={inView}
                      number="10000"
                      duration="4"
                    />
                  </h3>
                  <p>kolyers con placa identificativa</p>
                </div>
              </div>
            </div>
          </div>
        )}
      </InView>
      <FaQs/>
    </div>
  );
};

export default About;
