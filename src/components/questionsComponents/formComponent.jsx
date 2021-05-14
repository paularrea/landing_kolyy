import React from "react";
import "./form.css";
import Contacts from "../footer/components/contacts";

import { useHubspotForm } from "@aaronhayes/react-use-hubspot-form";

const FormComponent = () => {
  useHubspotForm({
    portalId: "8567670",
    formId: "662bb340-622d-4d8b-b9c3-94c89d2335ca",
    target: "#my-hubspot-form",
  });

  return (
    <div id="form-container">
      <p>
        Rellena este formulario o ponte en contacto con nosotros a través de
        nuestro móvil o correo.
      </p>
      <div id="my-hubspot-form"></div>
      <div className='contact-absolute'>
        <Contacts />
      </div>
    </div>
  );
};

export default FormComponent;
