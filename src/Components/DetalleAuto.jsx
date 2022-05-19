import { useParams } from "react-router-dom";
import Navbar from "./Navbar";
import json from "../Data/autos.json";

function DetalleAuto() {
  const { id } = useParams();
  let auto = null;

  for (const key in json) {
    if (json[key].id === id) {
      auto = json[key];
      break;
    }
  }

  return (
    <>
      <div>
        <Navbar></Navbar>
      </div>
      <div className="d-flex justify-content-center">
        <div className="contenedorPrincipal text-white bg-dark shadow-lg m-5 p-4 w-50 rounded">
          <div className="row">
            <div className="col d-flex justify-content-center align-items-center">
              <div>
                <h3 className="d-flex justify-content-center">
                  {auto.marca} {auto.modelo}
                </h3>
                <img
                  src={process.env.PUBLIC_URL + "/Images/" + auto.imagen}
                  alt="Foto de auto"
                  style={{ borderRadius: "5%" }}
                />
              </div>
            </div>
            <div className="col d-flex justify-content-center align-items-center">
              <div>
                <h5>Año: {auto.anio}</h5>
                <h5>Localidad: {auto.localidad}</h5>
                <h5>Kilómetros: {auto.km}</h5>
                {auto.precio === "0" ? (
                  <h5>Precio: Consultar</h5>
                ) : (
                  <h5>Precio: ${auto.precio}</h5>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default DetalleAuto;
