import React, { useState } from "react";
import Layout from "../components/layout/layout";
import Seo from "../components/seo";
import StripeCheckout from "../Stripe/checkout";
import Compra from "../components/compra/Compra"

const CheckoutPage = () => {
  const [product, setProduct] = useState(null);

  const selectProductOnCick = (e) => {
    setProduct(e.target.value);
  };

  return (
    <Layout>
      <Seo title="Blog" />
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
      <Compra/>
      {product && <StripeCheckout productID={product} />}
      </Layout>
  );
};

export default CheckoutPage;
