import React from "react";
import "./scrollSections.scss";
import blueCollar from "../../../images/blue-collar.png";
import blackCollar from "../../../images/black-collar.png";
import yellowCollar from "../../../images/yellow-collar.png";
import CollarCollection from "../collarCollection";

import BgIntro1 from "./img/bgIntro1";
import BgIntro2 from "./img/bgIntro2";
import BgIntro3 from "./img/bgIntro3";
import EmpoderarIntro from "../empoderarIntro";
import PlacaIntro from "../placaIntro";
import Footer from "../../footer/footer";

const SectionScroll = () => {
  return (
    <div className="container-scroll">
      <div className="section-scroll">
        <div className="fixed">
          <div className="flex-container">
            <img data-sal="fade" data-sal-delay="100" data-sal-duration="1000" src={blueCollar} alt="" />
            <div data-sal="fade" data-sal-delay="100" data-sal-duration="1000" className="text-div">
              {" "}
              <h1>Dale lo que se merece.</h1>
              <p>
                Tu perro lo daría todo por ti, con el collar kolyy le estarás
                ofreciendo lo mismo.
              </p>
              <button style={{ backgroundColor: "#D9DADD", color: "black" }}>
                Saber más
              </button>{" "}
              <button>Reserva</button>
            </div>
          </div>
        </div>
      </div>
      <div className="section-scroll">
        <div className="fixed">
          <div className="flex-container">
            <img src={blackCollar} alt="" />
            <div className="text-div">
              {" "}
              <h1>Dale lo que se merece.</h1>
              <p>
                Tu perro lo daría todo por ti, con el collar kolyy le estarás
                ofreciendo lo mismo.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="section-scroll">
        <div className="p fixed">
          <div className="flex-container">
            <img src={yellowCollar} alt="" />
            <div className="text-div">
              {" "}
              <h1>Dale lo que se merece.</h1>
              <p>
                Tu perro lo daría todo por ti, con el collar kolyy le estarás
                ofreciendo lo mismo.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="section-scroll">
        <div className="p fixed" style={{ width: "100vw" }}>
          <BgIntro1>
            <div className="flex-container-bg">
              <div className="text-div">
                {" "}
                <h1>No lo pierdas.</h1>
                <p>
                  Localizador GPS para saber donde está en todo momento y alerta
                  por si tu perro sale de la zona que has marcado como segura.
                </p>
                <button>Saber más</button>
              </div>
            </div>
          </BgIntro1>
        </div>
      </div>
      <div className="section-scroll">
        <div className="p fixed" style={{ width: "100vw" }}>
          <BgIntro2>
            <div className="flex-container-bg">
              <div className="text-div">
                {" "}
                <h1>Motívale a llevar una vida mejor.</h1>
                <p>
                  Registro de actividad para que tu perro alcance sus objetivos
                  de ejercicio.
                </p>
                <button>Saber más</button>
              </div>
            </div>
          </BgIntro2>
        </div>
      </div>
      <div className="section-scroll">
        <div className="p fixed" style={{ width: "100vw" }}>
          <BgIntro3>
            <div className="flex-container-bg">
              <div className="text-div">
                {" "}
                <h1>Anticípate a los problemas.</h1>
                <p>
                  Registro de sus hábitos cotidianos para anticiparte a futuros
                  problemas de salud.
                </p>
                <button>Saber más</button>
              </div>
            </div>
          </BgIntro3>
        </div>
      </div>

      <div className="section-scroll-last">
        <EmpoderarIntro />
        <CollarCollection />
        <PlacaIntro />
        <Footer />
      </div>
    </div>
  );
};

export default SectionScroll;
