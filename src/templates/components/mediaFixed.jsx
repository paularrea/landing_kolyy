import React from "react";
import { fixed_container } from "./mediaFixed.module.scss";

import instaIcon from "../../images/icons/insta.png";
import facebookIcon from "../../images/icons/facebook.png";
import linkedinIcon from "../../images/icons/linkedin.png";
import twitterIcon from "../../images/icons/twitter.png";

const MediaFixed = () => {
  return (
    <div className={fixed_container}>
      <a
        href="https://www.instagram.com/kolyy_official/"
        rel="noreferrer"
        target="_blank"
      >
        <img src={instaIcon} alt="instagram" />
      </a>
      <a
        href="https://www.facebook.com/kolyyofficial/"
        rel="noreferrer"
        target="_blank"
      >
        <img src={facebookIcon} alt="facebook" />
      </a>
      <a
        href="https://www.linkedin.com/company/petki/"
        rel="noreferrer"
        target="_blank"
      >
        <img src={linkedinIcon} alt="linkedin" />
      </a>
      <a
        href="https://twitter.com/Kolyy_official"
        rel="noreferrer"
        target="_blank"
      >
        <img src={twitterIcon} alt="twitter" />
      </a>
    </div>
  );
};

export default MediaFixed;
