import * as React from "react";
import Layout from "../components/layout/layout";
import Seo from "../components/seo";

import { container } from "../styles/home.module.scss";
const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
    <div className={container}>
      <h1>Home Page</h1>
    </div>
  </Layout>
);

export default IndexPage;
