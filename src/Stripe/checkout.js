import React, { useState } from "react";
import { getStripe } from "./Stripe";
import { button } from "./stripe.module.scss";

const Checkout = ({ selected }) => {
  const [loading, setLoading] = useState(false);
  
  const redirectToCheckout = async (event) => {
    event.preventDefault();
    setLoading(true);
    const stripe = await getStripe();
    const { error } = await stripe.redirectToCheckout({
      mode: "payment",
      lineItems: [{ price: selected.id, quantity: 1 }],
      successUrl: `http://localhost:8000/page-2/`,
      cancelUrl: `http://localhost:8000/comprar-collar-kolyy/`,
    });
    if (error) {
      console.warn("Error:", error);
      setLoading(false);
    }
  };

  return (
    <button
      className={button}
      style={{
        backgroundColor: selected && !selected.id && "gray",
        boxShadow: selected && !selected.id && "0px 0px 13px gray",
      }}
      disabled={loading && selected.id ? true : false}
      onClick={redirectToCheckout}
    >
      Comprar
    </button>
  );
};

export default Checkout;
