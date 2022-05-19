import Navbar from "./Navbar";
import json from "../Data/autos.json";
import Auto from "./Auto";

function Home() {
  const destacados = [];
  for (const key in json) {
    if (json[key].destacado === "Y") {
      destacados.push(json[key]);
    }
  }

  return (
    <>
      <div>
        <Navbar></Navbar>
      </div>
      <div
        className="p-3"
        style={{
          fontFamily: "Verdana",
          fontSize: "25px",
          fontWeight: "bold",
          display: "flex",
          justifyContent: "center",
          color: "red",
        }}
      >
        A TODO MOTOR AUTOS
      </div>
      <div
        className="p-3"
        style={{
          fontFamily: "Verdana",
          fontSize: "15px",
          display: "flex",
          justifyContent: "center",
        }}
      >
        Publicá sin registrarte y en un sólo paso. ¿Apurado por vender? Recibí
        ofertas en Efectivo de concesionarios registrados. ¡Súper!
      </div>
      <div>
        <div className="p-3 fw-bold">Destacados</div>
        <div>
          <Auto autos={destacados}></Auto>
        </div>
      </div>
    </>
  );
}

export default Home;
