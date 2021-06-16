import React from "react";
import Layout from "../components/layout/layout";
import Seo from "../components/seo";
import { container, container_first } from "../styles/book.module.scss";
import PrivateList from "../components/bookingComponents/privateList";
import ContactBook from "../components/bookingComponents/contactBook";
import BookingForm from "../components/bookingComponents/bookingForm";

const Book = () => {
  return (
    <Layout>
      <Seo title="Reserva" />
      <div className={container_first}>
        <PrivateList />
      </div>
      <BookingForm />
      <div className={container}>
        <ContactBook />
      </div>
    </Layout>
  );
};

export default Book;
