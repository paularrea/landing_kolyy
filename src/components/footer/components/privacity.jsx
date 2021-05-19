import React from "react";
import {Link} from "gatsby";
import { privacity_container } from "../footer.module.scss";

const Privacity = () => {
  return (
    <div className={privacity_container}>
      <Link to='/'>Política de privacidad</Link>
      <Link to='/'>Aviso legal</Link>
      <Link to='/'>Política de cookies</Link>
    </div>
  );
};

export default Privacity;
