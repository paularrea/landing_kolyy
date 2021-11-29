import React from "react";
import Layout from "../components/layout/layout";
import Seo from "../components/seo";
import Compra from "../components/compra/Compra";

const CheckoutPage = () => {
  return (
    <Layout>
      <Seo title="Compra" />
      <Compra />
    </Layout>
  );
};

export default CheckoutPage;
