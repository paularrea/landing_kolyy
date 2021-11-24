import React from "react";
import AppStoreImg from "./AppStoreImg";
import GooglePlayImg from "./GooglePlayImg";
import { container, flex_container, img } from "./connect.module.scss";

const GoogleAppleConnect = () => {
  return (
    <div className={container}>
      <p>Conecta el collar a nuestra app.</p>
      <div className={flex_container}>
        <div className={img}>
          <AppStoreImg />
        </div>
        <div className={img}>
          <GooglePlayImg />
        </div>
      </div>
    </div>
  );
};

export default GoogleAppleConnect;
