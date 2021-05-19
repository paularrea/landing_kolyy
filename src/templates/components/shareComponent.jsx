import React from "react";
import facebook from "../../images/icons/facebook.png";
import linkedin from "../../images/icons/linkedin.png";
import twitter from "../../images/icons/twitter.png";
import MediaQuery from "react-responsive";

import { share_component } from "../template.module.scss";

const ShareComponent = ({ title, path }) => {
  return (
    <>
      <MediaQuery maxWidth={870}>
        <span className={share_component}>
          <a
            href={`https://twitter.com/intent/tweet/?text=${title}&url=http://localhost:8000/${path}%2F&via=imariohernandez`}
            target="_blank"
            rel="noreferrer"
          >
            <img src={twitter} alt="twitter" />
          </a>
          <a
            href={`https://www.facebook.com/sharer/sharer.php?u=http://localhost:8000/o${path}`}
            target="_blank"
            rel="noreferrer"
          >
            <img src={facebook} alt="facebook" />
          </a>
          <a
            href={`https://www.linkedin.com/shareArticle?mini=true&url=http://localhost:8000/${path}&title=${title}&source=${title}`}
            target="_blank"
            rel="noreferrer"
          >
            <img src={linkedin} alt="linkedin" />
          </a>
        </span>
      </MediaQuery>

      <MediaQuery minWidth={870}>
        <span className={share_component}>
          Compártelo en{" "}
          <a
            href={`https://twitter.com/intent/tweet/?text=${title}&url=http://localhost:8000/${path}%2F&via=imariohernandez`}
            target="_blank"
            rel="noreferrer"
          >
            <img src={twitter} alt="twitter" />
          </a>
          <a
            href={`https://www.facebook.com/sharer/sharer.php?u=http://localhost:8000/o${path}`}
            target="_blank"
            rel="noreferrer"
          >
            <img src={facebook} alt="facebook" />
          </a>
          <a
            href={`https://www.linkedin.com/shareArticle?mini=true&url=http://localhost:8000/${path}&title=${title}&source=${title}`}
            target="_blank"
            rel="noreferrer"
          >
            <img src={linkedin} alt="linkedin" />
          </a>
        </span>
      </MediaQuery>
    </>
  );
};

export default ShareComponent;
