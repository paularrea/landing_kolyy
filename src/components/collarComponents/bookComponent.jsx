import React from "react";
import {book_container, img_bg, img_text} from "../../styles/collar.module.scss"
const BookComponent = () => {
  return (
    <div className={book_container}>
      <h2>Consíguelo a un precio único</h2>
      <div className={img_bg}>
        <div className={img_text}>
          <button>Resérvalo con un 20% de descuento</button>
          <p>Collar dispoonible a principios de 2022</p>
        </div>
      </div>
    </div>
  );
};

export default BookComponent;
