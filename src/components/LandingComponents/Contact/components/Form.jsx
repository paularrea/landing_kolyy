import React from "react";
import "./form.css";
import { useHubspotForm } from "@aaronhayes/react-use-hubspot-form";

const ContactForm = () => {
  useHubspotForm({
    portalId: "8567670",
    formId: "662bb340-622d-4d8b-b9c3-94c89d2335ca",
    target: "#my-hubspot-form",
  });

  return (
    <div id="form-container">
      <div id="my-hubspot-form"></div>
    </div>
  );
};

export default ContactForm;
