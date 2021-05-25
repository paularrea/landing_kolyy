import React from "react";
import Layout from "../components/layout/layout";
import Seo from "../components/seo";
import { content, bg_img } from "../styles/book.module.scss";
import BookImg from "../components/bookingComponents/bookBackgroundImg"
import FormComponent from "../components/questionsComponents/formComponent";

const Book = () => {
  return (
    <Layout>
      <Seo title="Reserva" />
      <BookImg>
        <div className={bg_img}>
          <div className={content}>
            <h2>
              Lo mejor <br /> para tu perro. <br /> Lo mejor para ti.
            </h2>
            <p>Reserva ya tu collar y quédate tranquilo.</p>
          </div>
        </div>
      </BookImg>
      <FormComponent />
    </Layout>
  );
};

export default Book;
