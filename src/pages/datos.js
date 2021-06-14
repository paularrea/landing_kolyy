import React, { useEffect } from "react";
import Layout from "../components/layout/layout";
import { Link } from "gatsby";
import { container } from "../styles/legal.module.scss";

const ProteccionDatos = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <Layout>
      <div className={container}>
        <h2>Política de protección de datos</h2>
        Al utilizar el presente sitio web y/o al comunicarse electrónicamente
        con KOLYY, se recogen y tratan datos personales de los usuarios. Dicho
        tratamiento se rige por esta política de privacidad en los siguientes
        términos:
        <h6>Responsable del tratamiento</h6>
        <p>
          El responsable es la entidad Petki Labs, S.L con CIF B02878866 y
          domicilio social en c/ Ramon Escayola 20, Sant Cugat del Vallés, 08197
          (en adelante, el “Responsable”), inscrita en el Registro Mercantil de
          Barcelona al Tomo 47565, folio 173, hoja número B-555765.
        </p>
        <h6>Consentimiento y mayoría de edad</h6>
        <p>
          El usuario manifiesta ser mayor de edad y acepta que los datos cedidos
          quedarán incorporados en nuestros ficheros y serán tratados según lo
          establecido en nuestra Política de Privacidad, Política de Cookies y
          Condiciones de Uso del Sitio Web.
        </p>
        <h6>Tipo de datos</h6>
        <p>
          Los datos se corresponden con datos personales, bancarios,
          identificativos y de contacto, de aquellas personas que se han puesto
          en contacto con nosotros para participar en nuestras promociones,
          solicitar información, adquirir algún producto o recibir algún
          servicio, permitir que terceros les localicen en caso de pérdida de la
          mascota, ayudar a terceros a encontrar a sus mascotas extraviadas y/o
          recibir alertas sobre los principales eventos en relación con el
          calendario de sus mascotas.
        </p>
        <h6>Finalidad</h6>
        <p>
          Tratamos la información que nos facilitan los usuarios con el fin de
          atender las peticiones recibidas (participación en promociones,
          adquisición de productos, solicitudes de información, participación en
          la comunidad, compra de productos o prestación de servicios, permitir
          que terceros les localicen en caso de pérdida de la mascota, ayudar a
          terceros a encontrar a sus mascotas extraviadas y/o recibir alertas
          sobre los principales eventos en relación con el calendario de sus
          mascotas, etc.). <br /> Asimismo, cuando el usuario haya dado su
          consentimiento expreso a tal efecto o cuando la legislación y/o el
          interés legítimo lo permita le mantendremos informado de nuestra
          actividad y novedades comerciales.
        </p>
        <h6>Confidencialidad y conservación de datos</h6>
        <p>
          Los datos serán conservados mientras la relación existente con el
          usuario siga vigente y éste no solicite la supresión de los mismos.
          Cuando los datos personales ya no sean necesarios para dar
          cumplimiento al fin para el cual fueron recabados y mientras los
          mismos no sean cancelados se conservarán de forma bloqueada para
          responder ante posibles reclamaciones. Los datos personales serán
          siempre tratados de forma confidencial.
        </p>
        <h6>Justificación del tratamiento</h6>
        <p>
          El tratamiento encuentra su base legal en el consentimiento otorgado
          por el interesado o, en su caso, en el interés legítimo del
          Responsable en mantener la relación existente con el usuario o para
          ejecutar un contrato.
        </p>
        <h6>Veracidad de los datos</h6>
        <p>
          El usuario se compromete a facilitar datos verdaderos, exactos y
          completos. En especial, y en relación con el servicio “Perros
          Perdidos” resulta esencial que el usuario se cerciore de la exactitud
          y veracidad de los datos personales que facilita para ser localizado.
          En caso contrario, nos reservamos el derecho de no llevar a cabo la
          prestación de servicios, el envío de obsequios/compras y/o consulta
          informativa. <br />
          El usuario se compromete a notificar cualquier cambio o modificación
          de los datos personales que haya facilitado. <br />
          El usuario es el único responsable de cualquier perjuicio, directo o
          indirecto, que pudiera ocasionar la falta de veracidad de los datos.
        </p>
        <h6>Comunicación de datos</h6>
        <p>
          Los datos del usuario podrán ser cedidos y alojados por encargados de
          tratamiento (empresas que realizan envíos, entidades bancarias,
          fabricantes y/o empresas grabadoras de placas, etc.) con el fin de
          llevar a cabo las promociones en las que participan los usuarios y las
          compras o solicitudes de información y/o prestación de servicios
          tramitadas por los usuarios. Aunque no están previstas, se podrían
          comunicar datos a países extracomunitarios siempre que se den las
          condiciones legales para ello.
        </p>
        <h6>Medidas de seguridad</h6>
        <p>
          Los datos personales de los usuarios serán protegidos garantizando un
          nivel de seguridad adecuado de conformidad con la normativa existente
          en materia de protección de datos.
        </p>
        <h6>Derechos del usuario</h6>
        <p>
          El usuario podrá ejercer sus derechos de acceso, rectificación,
          supresión, limitación y oposición o solicitar la portabilidad de sus
          datos así como revocar el consentimiento prestado en cualquier momento
          enviando un correo electrónico a team@kolyy.com, siempre adjuntando
          una fotocopia del DNI. Para garantizar la confidencialidad de los
          datos, nos reservamos el derecho de adoptar todas las medidas
          razonables para confirmar la identidad del usuario antes de
          proporcionarle información sobre los datos personales que podamos
          tener.
        </p>
        <div>
          <p>En particular, podrá solicitar:</p>
          <ul>
            <li>
              El acceso a sus datos personales para saber cuáles de ellos
              estamos tratando y con qué finalidades.
            </li>
            <li>La rectificación de datos personales inexactos.</li>
            <li>
              La supresión de sus datos personales cuando la legislación lo
              permita.
            </li>
            <li>La limitación en el tratamiento de sus datos personales.</li>
            <li>
              La portabilidad de sus datos cuando la legislación lo permita.
            </li>
            <li>La oposición al tratamiento de sus datos personales.</li>
            <li>
              La revocación de su consentimiento al tratamiento de sus datos
              personales.
            </li>
          </ul>
        </div>
        <p>
          En todo caso, si considera que sus datos personales no han sido
          tratados correctamente podrá presentar una reclamación ante la Agencia
          Española de Protección de Datos (www.aepd.es).
        </p>
        <h6>Cookies</h6>
        <p>
          Únicamente utilizamos dispositivos de almacenamiento y recuperación de
          datos (“cookies”) una vez que el usuario haya otorgado su
          consentimiento a ello a través de la ventana emergente del navegador
          al acceder al sitio web por primera vez y de conformidad con nuestra{" "}
          <Link to="/política-cookies">Política de Cookies.</Link>
        </p>
      </div>
    </Layout>
  );
};

export default ProteccionDatos;
