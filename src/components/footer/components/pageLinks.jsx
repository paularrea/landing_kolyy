import { Link } from "gatsby";
import React from "react";
import { flex_links } from "../footer.module.scss";

const PageLinks = () => {
  return (
    <div className={flex_links}>
      <div>
        <h5>Koly</h5>
        <p>
          <Link to="/collar">Collar</Link>
        </p>
        <p>
          <Link to="/about">¿Qué es Kolyy?</Link>
        </p>
        <p>
          <Link to="/questions">Pregúntanos</Link>
        </p>
      </div>
      <div>
        <h5>Protege</h5>
        <p>
          <Link to="/zero-perros-perdidos">#0perrosperdidos</Link>
        </p>
        <p>
          <a rel="noopener noreferrer" target="​_blank" href="https://app.kolyy.com/">Iniciar sesión</a>
        </p>
      </div>
      <div>
        <h5>Aprende</h5>
        <p>
          <Link to="/blog">Blog</Link>
        </p>
        <p>
          <Link to="/doggipedia">Conoce a tu perro</Link>
        </p>
      </div>
    </div>
  );
};

export default PageLinks;
