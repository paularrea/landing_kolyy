import React from "react";
import {container_intro} from "../../styles/placas.module.scss"

const Intro = () => {
  return (
    <div className={container_intro}>
      <h2>#0perrosperdidos</h2>
      <p>
        En kolyy estamos obsesionados con cambiar las reglas. No queremos ver
        más fotos en redes sociales de perros perdidos o carteles colgados en
        árboles con un “Se busca” y una recompensa, por eso hemos lanzado dos
        iniciativas con el fin de conseguir los #0perrosperdidos.
      </p>
      <button>Saber más</button>
    </div>
  );
};

export default Intro;
