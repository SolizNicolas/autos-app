import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Components/Home";
import NuestrosAutos from "./Components/NuestrosAutos";
import Contacto from "./Components/Contacto";
import DetalleAuto from "./Components/DetalleAuto";
import Buscar from "./Components/Buscar";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/NuestrosAutos" element={<NuestrosAutos />} />
        <Route path="/DetalleAuto/:id" element={<DetalleAuto />} />
        <Route path="/Contacto" element={<Contacto />} />
        <Route path="/Buscar/:param" element={<Buscar />} />
      </Routes>
    </Router>
  );
}

export default App;
