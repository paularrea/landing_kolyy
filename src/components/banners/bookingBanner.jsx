import React from "react";
import { Link } from "gatsby";
import MediaQuery from "react-responsive";
import { banner_container, flex_container } from "./banners.module.scss";
import collarsCollection from "../../images/coleccion-collar-perro-kolyy.png";

const BookingBanner = () => {
  return (
    <>
      <MediaQuery maxWidth={700}>
        <div className={banner_container}>
          <h3>¡Apúntate a la lista para reservar tu collar!</h3>
          <div className={flex_container}>
            <img
              src={collarsCollection}
              alt="colección de collares para perros kolyy"
            />
            <Link to="/reserva-collar-kolyy">
              <button>Apuntarme</button>
            </Link>
          </div>
        </div>
      </MediaQuery>
      <MediaQuery minWidth={700}>
      <div className={banner_container}>
          <img
            src={collarsCollection}
            alt="colección de collares para perros kolyy"
          />
          <div style={{textAlign:'center'}}>
            <h3>¡Apúntate a la lista para reservar tu collar!</h3>
            <Link to="/reserva-collar-kolyy">
              <button>Apuntarme</button>
            </Link>
          </div>
        </div>
      </MediaQuery>
    </>
  );
};

export default BookingBanner;
