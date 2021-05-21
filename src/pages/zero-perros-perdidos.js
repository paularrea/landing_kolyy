import React from "react";
import Layout from "../components/layout/layout";
import Seo from "../components/seo";
import {
  container,
  content,
  bg_img,
  flex_container,
  flex_container_2,
  clear_blue_container,
  clear_text,
  clear_logo,
  div_img_flex,
  mockup_container,
  mockup_text,
  mockup_img,
  text_flex,
  img_flex,
  container_title,
} from "../styles/placas.module.scss";

import mockup from "../images/phoneMockup.png";

const zeroPerrosPerdidos = () => {
  return (
    <Layout>
      <Seo title="0 perros perdidos" />
      <div className={bg_img}>
        <div className={content}>
          <h2>
            Un reto:
            <br /> 0 perros perdidos
          </h2>
          <p>Mantener a tu perro a salvo no cuesta nada.</p>
          <button>Súmate al reto</button>
        </div>
      </div>

      <div className={clear_blue_container}>
        <div className={clear_text}>
          <p>
            En Kolyy estamos obsesionados con cambiar las reglas. No queremos
            ver más fotos en redes sociales de perros perdidos o carteles
            colgados en árboles con un “Se busca” y una recompensa, por eso
            hemos lanzado una iniciativa con el fin de conseguir los{" "}
            <b>0 perros perdidos.</b>
            <br />
            <br />
            <i>¿Y cómo lo vamos a hacer?</i> <br /> Con una plataforma, una
            placa y una comunidad unida.
            <br />
            <br />
            <br />
            <i>¿Quieres saber más de esta iniciativa?</i>
          </p>
          <button>Saber más</button>
        </div>
        <div className={clear_logo}>
          <h2>
            Iniciativa <br /> 0 perros perdidos
          </h2>{" "}
          <br /> <h2>(logo)</h2>
        </div>
      </div>

      <div className={container}>
        <div>
          <div className={container_title}>
            <span>Vive sin miedo.</span>
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
                <h3>La placa</h3>
                <p>
                  Cualquier persona que encuentre a tu perro en caso de pérdida
                  podrá escanear la placa a través del <b>código QR</b> y
                  ponerse en contacto contigo.
                </p>
                <button>Conseguir una</button>
              </div>
            </div>
            <div className={div_img_flex}>
              <div className={img_flex}></div>
              <div className={text_flex}>
                <h3>La comunidad</h3>
                <p>
                  A través de nuestra plataforma podrás activar una alerta en
                  caso de pérdida de tu perro que avisará a todos los kolyers
                  cerca de tu zona de residencia o zona de pérdida para que nos
                  ayuden a encontrarlo.
                </p>
                <button>Entrar</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={mockup_container}>
        <div className={mockup_text}>
          <h2>
            Todo pasa por algo... <br /> Por nuestra plataforma.
          </h2>
          <p>
            Tanto si tienes una placa y quieres activarla como si quieres darte
            de alta únicamente en la comunidad entrarás en nuestra plataforma{" "}
            <a href="https://app.kolyy.com/">app.kolyy.com</a>, un canal
            habilitado para lograr nuestra misión: conseguir los{' '}
            <b>#0perrosperdidos.</b>
          </p>
          <a href="https://app.kolyy.com/">
            <button>Entrar</button>
          </a>
        </div>
        <div className={mockup_img}>
          <img src={mockup} alt="phone mockup" />
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
                perro. <br /> Consigue la tuya en{" "}
                <a href="https://shop.kolyy.com/">shop.kolyy.com/</a>
              </p>
            </div>
          </div>
          <div className={div_img_flex}>
            <div className={img_flex}></div>
            <div className={text_flex}>
              <h3>Actívala a través de nuestra plataforma</h3>
              <p>
                Entra en <a href="https://app.kolyy.com/">app.kolyy.com</a> o
                haz click en el botón de{" "}
                <a href="https://app.kolyy.com/">iniciar sesión</a> y activa tu
                placa. Podrás activar varias en caso de tener más de un perro.
              </p>
            </div>
          </div>
          <div className={div_img_flex}>
            <div className={img_flex}></div>
            <div className={text_flex}>
              <h3>Asegúrate de que todo está bien</h3>
              <p>
                Rellena el formulario con tus datos de contacto para que cuando
                alguien escanee el código QR dé con la información correcta.
              </p>
            </div>
          </div>
        </div>

        <div className={container_title}>
          <span>Forma parte de algo más grande.</span>
          <h2>Cómo funciona la comunidad</h2>
        </div>

        <div className={flex_container}>
          <div className={div_img_flex}>
            <div className={img_flex}></div>
            <div className={text_flex}>
              <h3>
                Regístrate gratis en{" "}
                <b>
                  <a href="https://app.kolyy.com/">app.kolyy.com</a>
                </b>
              </h3>
              <p>
                Entra en nuestra plataforma web y rellena todos los campos con
                tu información y la de tu perro.
              </p>
            </div>
          </div>
          <div className={div_img_flex}>
            <div className={img_flex}></div>
            <div className={text_flex}>
              <h3>Crea una alerta y pide ayuda a la comunidad</h3>
              <p>
                En la web encontrarás el botón de emergencia{" "}
                <b>He perdido a mi perro.</b>
                Haz click en el botón para dar la alerta en caso de pérdida.
              </p>
            </div>
          </div>
          <div className={div_img_flex}>
            <div className={img_flex}></div>
            <div className={text_flex}>
              <h3>Kolyy avisa a los kolyers que puedan ayudarte</h3>
              <p>
                Kolyy se pondrá en contacto con los kolyers que estén cerca de
                tu zona de residencia o de pérdida para que puedan ayudarte.
              </p>
            </div>
          </div>
        </div>

        <div className={container_title}>
          <span>Estar al día en todo su cuidado.</span>
          <h2>¿Qué más puedo hacer con la plataforma?</h2>
        </div>

        <div className={flex_container}>
          <div className={div_img_flex}>
            <div className={img_flex}></div>
            <div className={text_flex}>
              <h3>Mi agenda perruna</h3>
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
              <h3>Calendario de citas automatizadas</h3>
              <p>
                Automatizaremos el calendario de citas obligatorias, como baños,
                desparasitación y visitas al veterinario, teniendo en cuenta la
                raza y edad de tu perro
              </p>
            </div>
          </div>
          <div className={div_img_flex}>
            <div className={img_flex}></div>
            <div className={text_flex}>
              <h3>Ayuda a otro kolyer</h3>
              <p>
                Desde la misma plataforma podrás ver todos los perros con alerta
                de pérdida y ayudar en caso de que puedas.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div style={{ marginTop: "6rem" }} className={bg_img}>
        <div className={content}>
          <span>
            Iniciativa <i>0 perros perdidos</i>{" "}
          </span>
          <h2 style={{ marginTop: "1rem" }}>Somos más de 10.000</h2>
          <p style={{ margin: "2rem 0" }}>
            Son muchos los kolyers que ya se han apuntado a esta iniciativa para
            proteger a sus perros y a los de los demás. <br />
            <br /> ¿Quieres ser uno más?
          </p>
          <button>Súmate al reto</button>
        </div>
      </div>
    </Layout>
  );
};

export default zeroPerrosPerdidos;
