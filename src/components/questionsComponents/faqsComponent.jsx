import React from "react";
import { faq_container, question } from "./faqs.module.scss";

const FaqsComponent = () => {
  return (
    <div className={faq_container}>
      <span>Quédate completamente tranquilo.</span>
      <h2>Preguntas frecuentes</h2>
      <div className={question}>
        <h4>¿Cómo registro mis perros en la webapp?</h4>
        <p>
          Para registrar tus perros deberás ir a símbolo de configuración y
          dirigirte al apartado “mis perros”. Desde ahí podrás borrar o añadir
          perros, modificar sus datos y activar las placas que te falten.
        </p>
      </div>
      <div className={question}>
        <h4>¿Puedo localizar a mi perro a través de la webapp?</h4>
        <p>
          Para registrar tus perros deberás ir a símbolo de configuración y
          dirigirte al apartado “mis perros”. Desde ahí podrás borrar o añadir
          perros, modificar sus datos y activar las placas que te falten.
        </p>
      </div>
      <div className={question}>
        <h4>¿Puedo pagar una suscripción por el collar sin el pago inicial?</h4>
        <p>
          Para registrar tus perros deberás ir a símbolo de configuración y
          dirigirte al apartado “mis perros”. Desde ahí podrás borrar o añadir
          perros, modificar sus datos y activar las placas que te falten.
        </p>
      </div>
      <div className={question}>
        <h4>¿Cómo puedo desactivar las alertas de los perros perdidos?</h4>
        <p>
          Para registrar tus perros deberás ir a símbolo de configuración y
          dirigirte al apartado “mis perros”. Desde ahí podrás borrar o añadir
          perros, modificar sus datos y activar las placas que te falten.
        </p>
      </div>
    </div>
  );
};

export default FaqsComponent;
