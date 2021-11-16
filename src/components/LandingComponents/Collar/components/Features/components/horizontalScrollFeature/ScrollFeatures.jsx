import React from "react";
import { container, flex_scroll } from "./scrollFeatures.module.scss";
import tag1 from "../../../../../../../images/scroll_tag1.png";
import tag2 from "../../../../../../../images/scroll_tag2.png";
import tag3 from "../../../../../../../images/scroll_tag3.png";
import tag4 from "../../../../../../../images/scroll_tag4.png";

const ScrollFeatures = () => {
  return (
    <div className={container}>
      <h2>Una app para disfrutar</h2>
      <div className={flex_scroll}>
        <img src={tag1} alt="" />
        <img src={tag2} alt="" />
        <img src={tag3} alt="" />
        <img src={tag4} alt="" />
      </div>
    </div>
  );
};

export default ScrollFeatures;
