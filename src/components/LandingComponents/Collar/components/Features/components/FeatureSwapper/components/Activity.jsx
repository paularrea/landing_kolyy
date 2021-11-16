import React from "react";
import { hide } from "../swapper.module.scss";

const Activity = ({ selected }) => {
  return <div className={`${selected !== 1 ? hide : ""}`}>Actividad</div>;
};

export default Activity;
