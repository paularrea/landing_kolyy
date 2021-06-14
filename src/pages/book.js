import React from "react";
import Layout from "../components/layout/layout";
import Seo from "../components/seo";
import { container, content, bg_img } from "../styles/book.module.scss";
import BookImg from "../components/bookingComponents/bookBackgroundImg";
import FormComponent from "../components/questionsComponents/formComponent";
import PrivateList from "../components/bookingComponents/privateList";
import ContactBook from "../components/bookingComponents/contactBook";

const Book = () => {
  return (
    <Layout>
      <Seo title="Reserva" />
      <BookImg>
        <div className={bg_img}>
          <div
            data-sal="fade"
            data-sal-delay="100"
            data-sal-duration="1000"
            className={content}
          >
            <h2>
              Lo mejor <br /> para tu perro. <br /> Lo mejor para ti.
            </h2>
            <p>Reserva ya tu collar y quédate tranquilo.</p>
          </div>
        </div>
      </BookImg>
      <div className={container}>
        <PrivateList />
      </div>
      <FormComponent
        data-sal="slide-up"
        data-sal-delay="100"
        data-sal-duration="1000"
      />
      <div className={container}>
        <ContactBook />
      </div>
    </Layout>
  );
};

export default Book;
