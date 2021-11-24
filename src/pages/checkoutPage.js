import React, { useState } from "react";
import StripeCheckout from "../Stripe/checkout";

const CheckoutPage = () => {
  const [product, setProduct] = useState(null);

  const selectProductOnCick = (e) => {
    setProduct(e.target.value);
  };

  return (
    <div>
      <button
        value="price_1JxBsrAajQ6vOHCP0zfJ1TwW"
        onClick={selectProductOnCick}
      >
        yellow
      </button>
      <button
        value="price_1JnJZmAajQ6vOHCPazd021Mg"
        onClick={selectProductOnCick}
      >
        blue
      </button>
      {product && <StripeCheckout productID={product} />}
    </div>
  );
};

export default CheckoutPage;
