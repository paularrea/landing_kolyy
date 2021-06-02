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
      <p data-sal="slide-up" data-sal-delay="100" data-sal-duration="1000">
        Rellena este formulario o ponte en contacto con nosotros a través de
        nuestro móvil o correo.
      </p>
      <div data-sal="slide-up" data-sal-delay="100" data-sal-duration="1000" id="my-hubspot-form"></div>
      <div data-sal="slide-up" data-sal-delay="100" data-sal-duration="1000" className='contact-absolute'>
        <Contacts />
      </div>
    </div>
  );
};

export default FormComponent;
