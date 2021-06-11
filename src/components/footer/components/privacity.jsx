import React from "react";
import { Link } from "gatsby";
import { privacity_container } from "../footer.module.scss";
import MediaQuery from "react-responsive";

const Privacity = () => {
  return (
    <>
      <MediaQuery minWidth={800}>
        <section>
          <h5>©Petki Labs S.L</h5>
          <div className={privacity_container}>
            <Link to="/datos">Política de privacidad</Link> |
            <Link to="/cookies">Política de cookies</Link> |
            <Link to="/aviso-legal">Aviso legal</Link>
          </div>
        </section>
      </MediaQuery>
      <MediaQuery maxWidth={800}>
        <section>
          <h5>©Petki Labs S.L</h5>
          <div className={privacity_container}>
            <Link to="/datos">Política de privacidad</Link>
            <Link to="/cookies">Política de cookies</Link>
            <Link to="/aviso-legal">Aviso legal</Link>
          </div>
        </section>
      </MediaQuery>
    </>
  );
};

export default Privacity;
