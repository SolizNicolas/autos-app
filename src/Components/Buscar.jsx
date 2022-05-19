import { useParams } from "react-router-dom";
import json from "../Data/autos.json";
import Navbar from "./Navbar";
import Auto from "./Auto";

function Buscar() {
  let { param } = useParams();
  param = param.toLowerCase();
  let _autos = [];

  for (const key in json) {
    if (
      json[key].marca.toLowerCase().includes(param) ||
      json[key].modelo.toLowerCase().includes(param) ||
      json[key].anio.includes(param)
    ) {
      _autos.push(json[key]);
    }
  }

  return (
    <>
      <div>
        <Navbar></Navbar>
      </div>
      <div>
        <Auto autos={_autos}></Auto>
      </div>
    </>
  );
}

export default Buscar;
