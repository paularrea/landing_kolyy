import React, { useState } from "react";
import { getStripe } from "./Stripe";

const buttonStyles = {
  fontSize: "12px",
  fontWeight: 300,
  textAlign: "center",
  color: "white",
  padding: ".3rem 1rem",
  backgroundColor: "#30AAAA",
  borderRadius: "100px",
};

const buttonDisabledStyles = {
  opacity: "0.5",
  cursor: "not-allowed",
};

const Checkout = ({ productsID }) => {
  const [loading, setLoading] = useState(false);

  const redirectToCheckout = async (event) => {
    event.preventDefault();
    setLoading(true);
    const stripe = await getStripe();
    console.log(stripe, "stripe");
    const { error } = await stripe.redirectToCheckout({
      mode: "payment",
      lineItems: [
        { price: productsID[0], quantity: 1 },
        { price: productsID[1], quantity: 2 },
      ],
      discounts: [{
        coupon: 'kolyy_40_discount',
      }],
      successUrl: `http://localhost:8000/page-2/`,
      cancelUrl: `http://localhost:8000/`,
    });
    if (error) {
      console.warn("Error:", error);
      setLoading(false);
    }
  };

  return (
    <button
      disabled={loading}
      style={
        loading ? { ...buttonStyles, ...buttonDisabledStyles } : buttonStyles
      }
      onClick={redirectToCheckout}
    >
      Comprar Ya
    </button>
  );
};

export default Checkout;
