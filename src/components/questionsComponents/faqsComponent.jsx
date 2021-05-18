import React, { useState } from "react";
import { faq_container, question } from "./faqs.module.scss";
import "./dropdown.css"

const FaqsComponent = () => {
  const [active1, setActive1] = useState(false);
  const [active2, setActive2] = useState(false);
  const [active3, setActive3] = useState(false);
  const [active4, setActive4] = useState(false);

  return (
    <div className={faq_container}>
      <span>Quédate completamente tranquilo.</span>
      <h2>Preguntas frecuentes</h2>
        <div className={question} onClick={() => setActive1(!active1)}>
          <h4>¿Cómo registro mis perros en la webapp?</h4>
          <p className={`question-collapse ${active1 ? 'show' : ''}`}>
            Para registrar tus perros deberás ir a, símbolo de configuración y
            dirigirte al apartado “mis perros”. Desde ahí podrás borrar o añadir
            perros, modificar sus datos y activar las placas que te falten.
          </p>
        </div>

        <div className={question} onClick={() => setActive2(!active2)}>
          <h4>¿Puedo localizar a mi perro a través de la webapp?</h4>
          <p className={`question-collapse ${active2 ? 'show' : ''}`}>
            Para registrar tus perros deberás ir a símbolo de configuración y
            dirigirte al apartado “mis perros”. Desde ahí podrás borrar o añadir
            perros, modificar sus datos y activar las placas que te falten.
          </p>
        </div>

        <div className={question} onClick={() => setActive3(!active3)}>
          <h4>
            ¿Puedo pagar una suscripción por el collar sin el pago inicial?
          </h4>
          <p className={`question-collapse ${active3 ? 'show' : ''}`}>
            Para registrar tus perros deberás ir a símbolo de configuración y
            dirigirte al apartado “mis perros”. Desde ahí podrás borrar o añadir
            perros, modificar sus datos y activar las placas que te falten.
          </p>
        </div>

        <div className={question} onClick={() => setActive4(!active4)}>
          <h4>¿Cómo puedo desactivar las alertas de los perros perdidos?</h4>
          <p className={`question-collapse ${active4 ? 'show' : ''}`}>
            Para registrar tus perros deberás ir a símbolo de configuración y
            dirigirte al apartado “mis perros”. Desde ahí podrás borrar o añadir
            perros, modificar sus datos y activar las placas que te falten.
          </p>
        </div>
    </div>
  );
};

export default FaqsComponent;
