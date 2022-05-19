import Navbar from "./Navbar";

function Contacto() {
  return (
    <>
      <div>
        <Navbar></Navbar>
      </div>
      <div className="p-3">
        <h2>¿Necesitas ayuda o tenes alguna consulta?</h2>
      </div>
      <div className="p-3">
        <p>
          Es importante que sepas que sólo somos un sitio web de clasificados.
          No nos hagas consultas respecto a la información de los vehículos que
          se publican en el portal. Éstas son responsabilidades exclusivas de
          sus anunciantes, y debes contactarlos desde la ficha de cada vehículo.
          <br />
          <br />
          ¿Aún querés escribirnos? Entonces envíanos tus consultas, dudas o
          sugerencias a <a href="#">consultas@atodomotor.com.ar</a>, te
          responderemos a la brevedad.
        </p>
      </div>
    </>
  );
}

export default Contacto;
