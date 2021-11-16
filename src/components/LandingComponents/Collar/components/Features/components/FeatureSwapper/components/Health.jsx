import React from "react";
import { hide } from "../swapper.module.scss";

const Health = ({ selected }) => {
  return <div className={`${selected !== 2 ? hide : ""}`}>Salud</div>;
};

export default Health;
