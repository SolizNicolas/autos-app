import Auto from "./Auto";
import Navbar from "./Navbar";
import json from "../Data/autos.json";

function NuestrosAutos() {
  return (
    <>
      <div>
        <Navbar></Navbar>
      </div>
      <div className="p-5">
        <Auto autos={json}></Auto>
      </div>
    </>
  );
}

export default NuestrosAutos;
