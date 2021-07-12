import React from "react";
import Layout from "../components/layout/layout";
import Seo from "../components/seo";
import features from "../images/features-booking.png";
import {
  container,
  flex_bookings,
  image,
  img_features,
  form,
} from "../styles/book.module.scss";
import ContactBook from "../components/bookingComponents/contactBook";
import BookingForm from "../components/bookingComponents/bookingForm";
import BannerImg from "../components/homeComponents/scrollSections/img/bannerImg";

const Book = () => {
  return (
    <Layout>
      <Seo title="Reserva tu collar Kolyy" />
      <div className={flex_bookings}>
        <div data-sal="fade" data-sal-delay="100" data-sal-duration="1000" className={image}>
          <BannerImg/>
          <img className={img_features} src={features} alt="características del collar para perros Kolyy" />
        </div>
        <div data-sal="fade" data-sal-delay="100" data-sal-duration="1000" className={form}>
          <BookingForm />
        </div>
      </div>
      <div className={container}>
        <ContactBook />
      </div>
    </Layout>
  );
};

export default Book;
