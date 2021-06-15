import * as React from "react";
import {Link} from 'gatsby'
import Layout from "../components/layout/layout";
import Seo from "../components/seo";

const NotFoundPage = () => (
  <Layout>
    <Seo title="404: Not found" />
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection:'column',
        textAlign:'center',
        margin: "0 auto",
        width:'50%',
        height:'60vh'
      }}
    >
      <h2>No se puede encontrar la página que estás buscando.</h2>
      <Link to="/">
        <button style={{marginTop:'2rem'}}>Volver a la Home</button>
      </Link>
    </div>
  </Layout>
);

export default NotFoundPage;
