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
} from "../styles/placas.module.scss";

const Placas = () => {
  return (
    <Layout>
      <Seo title="Placas QR" />
      <div className={bg_img}>
        <div className={text}>
          <h2>
            Placas <br /> identificativas
          </h2>
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
          <h2>Cómo funcionan nuestras placas</h2>
        </div>

        <div className={flex_container}>
          <div className={div_img_flex}>
            <div className={img_flex}></div>
            <div className={text_flex}>
              <h3>Consigue una placa identificativa única</h3>
              <p>
                Cada placa contiene un código QR único para identificar a cada
                perro. <br /> Consigue la tuya en shop.kolyy.com/
              </p>
            </div>
          </div>
          <div className={div_img_flex}>
            <div className={img_flex}></div>
            <div className={text_flex}>
              <h3>Actívala a través de nuestra webapp</h3>
              <p>
                Entra en app.kolyy.com y activa tu placa. Puedes activar todas
                las que tengas.
              </p>
            </div>
          </div>
          <div className={div_img_flex}>
            <div className={img_flex}></div>
            <div className={text_flex}>
              <h3>Añade tus datos de contacto</h3>
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
            <h2>
              He perdido a mi perro, <br />
              ¿cómo lo encuentro?
            </h2>
            <p>Existen dos formas en las que podemos ayudarte.</p>
          </div>
          <div className={flex_container_2}>
            <div className={div_img_flex}>
              <div className={img_flex}></div>
              <div className={text_flex}>
                <h3>Mi agenda personal</h3>
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
                <h3>Calendario de vacunación</h3>
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
          <h2>¿Qué más puedo hacer en la webapp?</h2>
        </div>

        <div className={flex_container}>
          <div className={div_img_flex}>
            <div className={img_flex}></div>
            <div className={text_flex}>
              <h3>Mi agenda personal</h3>
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
              <h3>Calendario de vacunación</h3>
              <p>
                Automatizaremos el calendario de vacunas obligatorias teniendo
                en cuenta la raza y edad de tu perro
              </p>
            </div>
          </div>
          <div className={div_img_flex}>
            <div className={img_flex}></div>
            <div className={text_flex}>
              <h3>Ayuda a otro kolyer</h3>
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
          <h2 style={{ marginTop: "1rem"}}>Somos más de 10.000</h2>
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
