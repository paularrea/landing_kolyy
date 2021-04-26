import React from "react";
import Layout from "../components/layout/layout"
import Seo from "../components/seo"
import {container} from "../styles/team.module.scss"

const Team = () => {
  return (
    <Layout>
      <Seo title="Team" />
      <div className={container}>
        <h1>Team Page
          </h1></div>
    </Layout>
  );
};

export default Team;
