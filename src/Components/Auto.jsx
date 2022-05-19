import "../Styles/Auto.css";

function Auto(objeto) {
  let _autos = [];

  objeto.autos.map((auto, index) => {
    {
      _autos.push(
        <div key={index} className="grid-item">
          <div className="tarjeta">
            <a href={"/DetalleAuto/" + auto.id}>
              <img
                className="card-img-top"
                src={process.env.PUBLIC_URL + "/Images/" + auto.imagen}
                alt="Foto de Auto"
              ></img>
            </a>
            <h5 className="card-title">{auto.marca}</h5>
            <p className="card-text">
              {auto.modelo} {auto.anio}
              <br />
              {auto.km} Km
            </p>
            {auto.precio === "0" ? (
              <p
                style={{ color: "rgb(243, 117, 59)", fontWeight: "15px" }}
                className="card-text"
              >
                <strong>Consultar</strong>
              </p>
            ) : (
              <p
                style={{ color: "rgb(243, 117, 59)", fontWeight: "15px" }}
                className="card-text"
              >
                <strong>${auto.precio}</strong>
              </p>
            )}
          </div>
        </div>
      );
    }
  });

  return <div className="grid-container">{_autos}</div>;
}

export default Auto;
