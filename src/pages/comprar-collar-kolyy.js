import React, { useState } from "react";
import Layout from "../components/layout/layout";
import Seo from "../components/seo";
import StripeCheckout from "../Stripe/checkout";
import Compra from "../components/compra/Compra"

const CheckoutPage = () => {
  const [products, setProducts] = useState(['price_1JxBsrAajQ6vOHCP0zfJ1TwW','price_1JnJZmAajQ6vOHCPazd021Mg']);

  const selectProductOnCick = (e) => {
    setProducts(e.target.value);
  };

  return (
    <Layout>
      <Seo title="Compra" />
      <Compra/>
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
      {products && <StripeCheckout productsID={products} />}
      </Layout>
  );
};

export default CheckoutPage;
