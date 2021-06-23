import React, { useEffect } from "react";
import Seo from "../components/seo";
import Home from "./collar-para-cuidar-mi-perro"

const IndexPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0 );
  }, []);
  return (
    <>
      <Seo title="Collar para cuidar mi perro" />
      <Home/>
    </>
  );
};

export default IndexPage;
