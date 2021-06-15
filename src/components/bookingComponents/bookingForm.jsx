import React from "react";
import "./form-booking.css";

import { useHubspotForm } from "@aaronhayes/react-use-hubspot-form";

const BookingForm = () => {
  useHubspotForm({
    target: "#booking-hubspot-form",
    region: "na1",
    portalId: "8567670",
    formId: "cefecb98-7975-4597-b869-2d999834cbd2",
  });

  return (
    <div style={{textAlign:'center', padding:'2rem 0'}} id="booking-form-container">
      <span style={{color:'#30AAAA', fontWeight:'700', top:'2rem'}} data-sal="slide-up" data-sal-delay="100" data-sal-duration="1000">
        Formulario de inscripción a la lista
      </span>
      <div
        data-sal="slide-up"
        data-sal-delay="100"
        data-sal-duration="1000"
        id="booking-hubspot-form"
      ></div>
    </div>
  );
};

export default BookingForm;
