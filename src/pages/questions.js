import React from "react";
import Layout from "../components/layout/layout";
import Seo from "../components/seo";
import Form from "../components/questionsComponents/formComponent";
import Faqs from "../components/questionsComponents/faqsComponent";
import MediaQuery from "react-responsive";
import { bg_img, content } from "../styles/questions.module.scss";
import MediaFixed from "../components/questionsComponents/mediaFixed";
import ContactImg from "../components/questionsComponents/contactBackgroundImg";

const Questions = () => {
  return (
    <Layout>
      <Seo title="Questions" />
      <MediaQuery minWidth={1000}>
        <MediaFixed />
      </MediaQuery>
      <ContactImg>
        <div className={bg_img}>
          <div className={content}>
            <h2>Estamos conectados</h2>
            <p>
              No dudes en ponerte en contacto con nosotros para cualquier duda.
            </p>
          </div>
        </div>
      </ContactImg>
      <Form />
      <Faqs />
    </Layout>
  );
};

export default Questions;
