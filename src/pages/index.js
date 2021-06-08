import React, { useEffect, useState } from "react";
import Layout from "../components/layout/layout";
import Seo from "../components/seo";
import {container_scroll} from "../styles/home.module.scss"
import InitialAnimation from "../components/initialAnimation";
import SectionScroll from "../components/homeComponents/scrollSections/sectionScroll";
import CollarCollection from "../components/homeComponents/collarCollection";

const IndexPage = () => {
  const [lateEntry, setLateEntry] = useState(false);

  useEffect(() => {
    const entry = setTimeout(() => {
      setLateEntry(true);
    }, 2200);
    return () => clearTimeout(entry);
  }, [lateEntry]);

  return (
    <Layout>
      <Seo title="Home" />
      {!lateEntry && <InitialAnimation />}
      <div className={container_scroll}>
        <SectionScroll />
      </div>
    </Layout>
  );
};

export default IndexPage;
