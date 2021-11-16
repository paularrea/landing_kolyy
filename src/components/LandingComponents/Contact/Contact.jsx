import React from "react";
import {container} from "./contact.module.scss"
import ContactForm from "./components/Form";

const Contact = () => {
  return (
    <div id='contacto' className={container}>
      <h2>Contacta</h2>
      <ContactForm />
    </div>
  );
};

export default Contact;
