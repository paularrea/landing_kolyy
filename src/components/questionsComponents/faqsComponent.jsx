import React, { useState } from "react";
import { faq_container, question } from "./faqs.module.scss";
import "./dropdown.css";

const FaqsComponent = () => {
  const [active1, setActive1] = useState(false);
  const [active2, setActive2] = useState(false);
  const [active3, setActive3] = useState(false);
  const [active4, setActive4] = useState(false);
  const [active5, setActive5] = useState(false);
  const [active6, setActive6] = useState(false);
  const [active7, setActive7] = useState(false);
  const [active8, setActive8] = useState(false);

  return (
    <div className={faq_container}>
      <span data-sal="slide-up" data-sal-delay="100" data-sal-duration="1000">
        Quédate completamente tranquilo.
      </span>
      <h2 data-sal="slide-up" data-sal-delay="100" data-sal-duration="1000">
        Preguntas frecuentes
      </h2>
      <div
        data-sal="slide-up"
        data-sal-delay="100"
        data-sal-duration="1000"
        className={question}
        onClick={() => setActive1(!active1)}
        role="button"
        tabIndex={0}
        onKeyDown={() => setActive1(!active1)}
      >
        <h4>¿Cuándo va a salir el collar kolyy?</h4>
        <p className={`question-collapse ${active1 ? "show" : ""}`}>
          Estamos fabricando 1.500 collares que estarán disponibles a principios
          de 2022. Si quieres conocer más sobre el collar y tener todas las
          noticias sobre su lanzamiento apúntate a la lista en la página
          “Collar” y te iremos informando.
        </p>
      </div>

      <div
        data-sal="slide-up"
        data-sal-delay="100"
        data-sal-duration="1000"
        className={question}
        onClick={() => setActive2(!active2)}
        role="button"
        tabIndex={0}
        onKeyDown={() => setActive2(!active2)}
      >
        <h4>
          ¿Apuntarme en la lista significa que estoy reservando un collar?
        </h4>
        <p className={`question-collapse ${active2 ? "show" : ""}`}>
          No, si te apuntas en la lista serás el primero en enterarte de todo lo
          referente al collar y su lanzamiento para asegurarte de que lo puedas
          reservar una vez salga al mercado.
        </p>
      </div>

      <div
        data-sal="slide-up"
        data-sal-delay="100"
        data-sal-duration="1000"
        className={question}
        onClick={() => setActive3(!active3)}
        role="button"
        tabIndex={0}
        onKeyDown={() => setActive3(!active3)}
      >
        <h4>¿Cuánto cuesta el collar kolyy?</h4>
        <p className={`question-collapse ${active3 ? "show" : ""}`}>
          Aún no hemos fijado un precio para el collar, queremos asegurarnos de
          que se adecúe a las necesidades de nuestros kolyers antes de
          decantarnos por una cifra fija. Prevemos que el coste final del collar
          estará entre los 100€ y los 250€.
        </p>
      </div>

      <div
        data-sal="slide-up"
        data-sal-delay="100"
        data-sal-duration="1000"
        className={question}
        onClick={() => setActive4(!active4)}
        role="button"
        tabIndex={0}
        onKeyDown={() => setActive4(!active4)}
      >
        <h4>¿Qué pasa si me quedo sin mi collar kolyy?</h4>
        <p className={`question-collapse ${active4 ? "show" : ""}`}>
          Los primeros 1.500 collares saldrán a principios de 2022 pero prevemos
          lanzar al mercado 10.000 más durante el resto del año. Asegúrate de
          que no te quedas sin el tuyo apuntándote en nuestra lista.
        </p>
      </div>

      <div
        data-sal="slide-up"
        data-sal-delay="100"
        data-sal-duration="1000"
        className={question}
        onClick={() => setActive5(!active5)}
        role="button"
        tabIndex={0}
        onKeyDown={() => setActive5(!active5)}
      >
        <h4>¿Es un collar para todos los perros?</h4>
        <p className={`question-collapse ${active5 ? "show" : ""}`}>
          Por el momento estamos desarrollando un collar que podrá llevar
          cualquier perro de más de 5kg. En el futuro queremos ofreceros arneses
          que puedan llevar también los perros pequeños y miniatura.
        </p>
      </div>

      <div
        data-sal="slide-up"
        data-sal-delay="100"
        data-sal-duration="1000"
        className={question}
        onClick={() => setActive6(!active6)}
        role="button"
        tabIndex={0}
        onKeyDown={() => setActive6(!active6)}
      >
        <h4>¿Cómo puedo asegurarme de que tendré el collar kolyy?</h4>
        <p className={`question-collapse ${active6 ? "show" : ""}`}>
          Pronto daremos la posibilidad a los integrantes de la lista de hacer
          una pre-reserva del collar para que se puedan asegurar el suyo antes
          que nadie.
        </p>
      </div>

      <div
        data-sal="slide-up"
        data-sal-delay="100"
        data-sal-duration="1000"
        className={question}
        onClick={() => setActive7(!active7)}
        role="button"
        tabIndex={0}
        onKeyDown={() => setActive7(!active7)}
      >
        <h4>¿El GPS funciona en zonas rurales?</h4>
        <p className={`question-collapse ${active7 ? "show" : ""}`}>Sí.</p>
      </div>

      <div
        data-sal="slide-up"
        data-sal-delay="100"
        data-sal-duration="1000"
        className={question}
        onClick={() => setActive8(!active8)}
        role="button"
        tabIndex={0}
        onKeyDown={() => setActive8(!active8)}
      >
        <h4>¿Cuanto dura la batería?</h4>
        <p className={`question-collapse ${active8 ? "show" : ""}`}>
          El sistema de carga es por USB y la batería tiene una duración de
          entre 20 y 30 días.
        </p>
      </div>
    </div>
  );
};

export default FaqsComponent;
