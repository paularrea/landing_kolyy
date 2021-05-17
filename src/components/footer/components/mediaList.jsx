import React from "react";

import { media_list } from "../footer.module.scss";

import instaIcon from "../../../images/icons/insta.png";
import facebookIcon from "../../../images/icons/facebook.png";
import linkedinIcon from "../../../images/icons/linkedin.png";
import twitterIcon from "../../../images/icons/twitter.png";

const MediaList = () => {
  return (
    <ul className={media_list}>
      <li>
        <a
          href="https://www.instagram.com/kolyy_official/"
          rel="noreferrer"
          target="_blank"
        >
          <img src={instaIcon} alt="instagram" />
        </a>
      </li>
      <li>
        <a
          href="https://www.facebook.com/kolyyofficial/"
          rel="noreferrer"
          target="_blank"
        >
          <img src={facebookIcon} alt="facebook" />
        </a>
      </li>
      <li>
        <a
          href="https://www.linkedin.com/company/petki/"
          rel="noreferrer"
          target="_blank"
        >
          <img src={linkedinIcon} alt="linkedin" />
        </a>
      </li>
      <li>
        <a
          href="https://twitter.com/Kolyy_official"
          rel="noreferrer"
          target="_blank"
        >
          <img src={twitterIcon} alt="twitter" />
        </a>
      </li>
    </ul>
  );
};

export default MediaList;
