import React, { useEffect } from "react";
import Layout from "../components/layout/layout";
import Seo from "../components/seo";
import Home from "./collar-para-cuidar-mi-perro"

const IndexPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0 );
  }, []);
  return (
    <Layout>
      <Seo title="Collar para cuidar mi perro" />
      <Home/>
    </Layout>
  );
};

export default IndexPage;
