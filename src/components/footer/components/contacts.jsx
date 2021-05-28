import React from "react";
import { contact_div, contact_icons } from "../footer.module.scss";

import LocationIcon from "../../../images/icons/location.png";
import MailIcon from "../../../images/icons/mail.png";
import PhoneIcon from "../../../images/icons/phone.png";

const Contacts = () => {
  return (
    <div>
      {" "}
      <div className={contact_div}>
        <div className={contact_icons}>
          <img src={LocationIcon} alt="location" />
        </div>
        <div>
          <a
            href="https://www.google.es/maps/place/Monestir+de+Sant+Cugat/@41.4711808,2.0774912,14z/data=!4m5!3m4!1s0x12a496c29669f9f3:0x720371f63bb694b7!8m2!3d41.4736491!4d2.0849934"
            rel="noreferrer"
            target="_blank"
          >
            Made with love in Barcelona.
          </a>
        </div>
      </div>
      <div className={contact_div}>
        <div className={contact_icons}>
          <img src={PhoneIcon} alt="phone" />
        </div>
        <div>
          <a href="tel:+41313019439">+34 66 666 66 66</a>
        </div>
      </div>
      <div className={contact_div}>
        <div className={contact_icons}>
          <img src={MailIcon} alt="mail" />
        </div>
        <div>
          <a href="mailto:hola@kolyy.com" rel="noreferrer" target="_blank">
            hola@kolyy.com
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contacts;
