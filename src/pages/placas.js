import React from "react";
import Layout from "../components/layout/layout";
import Seo from "../components/seo";
import {
  container,
  text,
  bg_img,
  flex_container,
  flex_container_2,
  div_img_flex,
  text_flex,
  img_flex,
  container_title,
  book_container,
  img_bg,
  img_text,
} from "../styles/placas.module.scss";

const Placas = () => {
  return (
    <Layout>
      <Seo title="Placas QR" />
      <div className={bg_img}>
        <div className={text}>
          <h1>
            Placas <br /> identificativas
          </h1>
          <p>
            Escanea. Click. Encontrado <br />
            <br />
            La solución más económica para mantener a tu perro a salvo.
          </p>
          <button>Consigue una</button>
        </div>
      </div>
      <div className={container}>
        <div className={container_title}>
          <span>Su seguridad. Tu tranquilidad</span>
          <h1>Cómo funcionan nuestras placas</h1>
        </div>

        <div className={flex_container}>
          <div className={div_img_flex}>
            <div className={img_flex}></div>
            <div className={text_flex}>
              <h2>Consigue una placa identificativa única</h2>
              <p>
                Cada placa contiene un código QR único para identificar a cada
                perro. <br /> Consigue la tuya en shop.kolyy.com/
              </p>
            </div>
          </div>
          <div className={div_img_flex}>
            <div className={img_flex}></div>
            <div className={text_flex}>
              <h2>Actívala a través de nuestra webapp</h2>
              <p>
                Entra en app.kolyy.com y activa tu placa. Puedes activar todas
                las que tengas.
              </p>
            </div>
          </div>
          <div className={div_img_flex}>
            <div className={img_flex}></div>
            <div className={text_flex}>
              <h2>Añade tus datos de contacto</h2>
              <p>
                Una vez activada la placa podrás rellenar tu cuenta con tus
                datos personales.
              </p>
            </div>
          </div>
        </div>

        <div>
          <div className={container_title}>
            <span>Una comunidad para ayudarnos.</span>
            <h1>
              He perdido a mi perro, <br />
              ¿cómo lo encuentro?
            </h1>
            <p>Existen dos formas en las que podemos ayudarte.</p>
          </div>
          <div className={flex_container_2}>
            <div className={div_img_flex}>
              <div className={img_flex}></div>
              <div className={text_flex}>
                <h2>Mi agenda personal</h2>
                <p>
                  Desde tu área personal podrás añadir todas las citas o
                  recordatorios de tu perro. En kolyy te avisaremos cuando
                  llegue el día para que no se te pase.
                </p>
              </div>
            </div>
            <div className={div_img_flex}>
              <div className={img_flex}></div>
              <div className={text_flex}>
                <h2>Calendario de vacunación</h2>
                <p>
                  Automatizaremos el calendario de vacunas obligatorias teniendo
                  en cuenta la raza y edad de tu perro
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className={container_title}>
          <span>Estar al día en todo su cuidado.</span>
          <h1>¿Qué más puedo hacer en la webapp?</h1>
        </div>

        <div className={flex_container}>
          <div className={div_img_flex}>
            <div className={img_flex}></div>
            <div className={text_flex}>
              <h2>Mi agenda personal</h2>
              <p>
                Desde tu área personal podrás añadir todas las citas o
                recordatorios de tu perro. En kolyy te avisaremos cuando llegue
                el día para que no se te pase.
              </p>
            </div>
          </div>
          <div className={div_img_flex}>
            <div className={img_flex}></div>
            <div className={text_flex}>
              <h2>Calendario de vacunación</h2>
              <p>
                Automatizaremos el calendario de vacunas obligatorias teniendo
                en cuenta la raza y edad de tu perro
              </p>
            </div>
          </div>
          <div className={div_img_flex}>
            <div className={img_flex}></div>
            <div className={text_flex}>
              <h2>Ayuda a otro kolyer</h2>
              <p>
                Desde la misma webapp podrás ver todos los perros con alerta de
                pérdida y ayudar en caso de que puedas.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div style={{ margin: "6rem 0" }} className={bg_img}>
        <div style={{ textAlign: "left" }} className={text}>
          <span>Iniciativa 0 perros perdidos</span>
          <h1 style={{ marginTop: "1rem"}}>Somos más de 10.000</h1>
          <p style={{ margin: "2rem 0" }}>
            Son muchos los kolyers que ya se han apuntado a esta iniciativa para
            proteger a sus perros y a los de los demás. <br />
            <br /> ¿Quieres ser uno más?
          </p>
          <button>Consigue tu placa</button>
        </div>
      </div>
    </Layout>
  );
};

export default Placas;
