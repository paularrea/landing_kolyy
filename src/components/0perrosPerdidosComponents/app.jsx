import React from "react";
import {
  container,
  flex_container,
  text,
  img,
} from "../../styles/placas.module.scss";
import mockup from "../../images/app-zero-perros-perdidos.jpg";

const App = () => {
  return (
    <div className={container} style={{ backgroundColor: "#AFD0D0" }}>
      <div className={flex_container}>
        <div className={text}>
          <h2 data-sal="slide-up" data-sal-delay="100" data-sal-duration="1000">
            Una alerta de urgencia
          </h2>
          <p data-sal="slide-up" data-sal-delay="100" data-sal-duration="1000">
            Regístrate en nuestra plataforma y lanza una alerta a todos los
            kolyers de tu zona para que te ayuden a encontrarlo.
          </p>
          <a
            data-sal="slide-up"
            data-sal-delay="100"
            data-sal-duration="1000"
            href="https://app.kolyy.com/"
            target='__blank'
            rel='noopener noreferrer'
          >
            <button> <a style={{color:'white'}}>Entra</a></button>
          </a>
        </div>
        <div
          data-sal="slide-up"
          data-sal-delay="100"
          data-sal-duration="1000"
          className={img}
        >
          <img src={mockup} alt="phone mockup" />
        </div>
      </div>
    </div>
  );
};

export default App;
