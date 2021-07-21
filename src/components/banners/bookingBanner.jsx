import React, { useState } from "react";
import { Link } from "gatsby";
import MediaQuery from "react-responsive";
import {
  banner_container,
  flex_container,
  close_banner,
} from "./banners.module.scss";
import collarsCollection from "../../images/coleccion-collar-perro-kolyy.png";
import close_banner_img from "../../images/icons/X.png";

const BookingBanner = () => {
  const [closeBanner, setCloseBanner] = useState(false);

  return (
    <>
      <MediaQuery maxWidth={700}>
        <div
          style={{ display: closeBanner && "none" }}
          className={banner_container}
        >
          <button onClick={() => setCloseBanner(true)} className={close_banner}>
            <img src={close_banner_img} alt="cerrar banner" />
          </button>
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
        <div
          style={{ display: closeBanner && "none" }}
          className={banner_container}
        >
          <button onClick={() => setCloseBanner(true)} className={close_banner}>
            <img src={close_banner_img} alt="cerrar banner" />
          </button>
          <img
            src={collarsCollection}
            alt="colección de collares para perros kolyy"
          />
          <div style={{ textAlign: "center" }}>
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
