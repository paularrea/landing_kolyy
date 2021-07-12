import { Link } from "gatsby";
import React from "react";
import { flex_links } from "../footer.module.scss";

const PageLinks = () => {
  return (
    <div className={flex_links}>
      <div>
        <h5>Kolyy</h5>
        <p>
          <Link to="/collar-perro-gps">Collar</Link>
        </p>
        <p>
          <Link to="/mundo-kolyy">Mundo Kolyy</Link>
        </p>
        <p>
          <Link to="/contacto">Pregúntanos</Link>
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
        <h5>Conoce a tu perro</h5>
        <p>
          <Link to="/perro-yorkshire-terrier">Yorkshire Terrier</Link>
        </p>
        <p>
          <Link to="/perro-chihuahua">Chihuahua</Link>
        </p>
        <p>
          <Link to="/perro-labrador-retriever">Labrador Retriever</Link>
        </p>
        <p>
          <Link to="/perro-pastor-aleman">Pastor Alemán</Link>
        </p>
        <p>
          <Link to="/perro-bull-terrier">Bull terrier</Link>
        </p>
        <p>
          <Link to="/perro-caniche">Caniche</Link>
        </p>
        <p>
          <Link to="/perro-bichon-maltes">Bichón Maltés</Link>
        </p>
        <p>
          <Link to="/perro-border-collie">Border Collie</Link>
        </p>
      </div>
      <div>
        <h5>Blog</h5>
        <p>
          <Link to="/plan-de-vacunacion-para-cachorros">Plan de vacunación</Link>
        </p>
        <p>
          <Link to="/como-saber-la-cantidad-de-comida-para-mi-perro">Cantidad correcta de comida para mi perro</Link>
        </p>
        <p>
          <Link to="/oruga-procesionaria">Oruga procesionaria</Link>
        </p>
        <p>
          <Link to="/curiosidades-bichon-maltes">Curiosidades del Bichón Maltés</Link>
        </p>
        <p>
          <Link to="/perro-sobrepeso">¿Mi perro tiene sobrepeso?</Link>
        </p>
        <p>
          <Link to="/mi-perro-tira-de-la-correa">¿Como enseñarle a no tirar en los paseos?</Link>
        </p>
      </div>
    </div>
  );
};

export default PageLinks;
