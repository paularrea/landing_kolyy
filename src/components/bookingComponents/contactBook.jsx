import React from "react";
import phone from "../../images/phone-book.png";
import mail from "../../images/mail-book.png";
import {
  section,
  flex_contacts,
  flex_container,
} from "../../styles/book.module.scss";

const ContactBook = () => {
  return (
    <section className={section}>
      <h2>¿Tienes alguna duda?</h2>
      <div className={flex_contacts}>
        <a className={flex_container} href="tel:+34 647 82 63 69" target='__blank' rel="noopener noreferrer">
          <img src={phone} alt="" />
          <div>
            <h4>Llámanos</h4>
            <p>+34 647 82 63 69 </p>
          </div>
        </a>
        <a target='__blank' rel="noopener noreferrer" href="mailto:team@kolyy.com" className={flex_container}>
          <img src={mail} alt="" />
          <div>
            <h4>Escríbenos</h4>
            <p>team@kolyy.com</p>
          </div>
        </a>
      </div>
    </section>
  );
};

export default ContactBook;
