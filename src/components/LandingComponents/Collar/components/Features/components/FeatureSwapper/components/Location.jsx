import React from "react";
import { hide } from "../swapper.module.scss";

const Location = ({ selected }) => {
  return <div className={`${selected !== 3 ? hide : ""}`}>Localización</div>;
};

export default Location;
