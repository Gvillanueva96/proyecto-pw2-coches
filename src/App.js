import "./App.css";
import MainFooter from "./common/MainFooter";
import MainHeader from "./common/MainHeader";
import MainNav from "./common/MainNav";
import Inicio from "./pages/Inicio";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Miscelanea from "./home/Miscelanea";
import Concesionario from "./pages/Concesionario";
import VehiculoDetalles from "./pages/VehiculoDetalles";
import Carrito from "./pages/Carrito";
import Proveedores from "./pages/Proveedores";

function App() {
  return (
    <>
    <BrowserRouter>
      <MainHeader/>
      <MainNav id="main-content"/>
        <Routes>
          <Route path="/" element={<Inicio/>}/>
          <Route path="/proveedores" element={<Proveedores/>}/>
          <Route path="/concesionario" element={<Concesionario/>}/>
          <Route path="/vehiculodetalles/:idvehiculo" element={<VehiculoDetalles/>}/>
          <Route path="/carrito" element={<Carrito/>}/>
        </Routes>
        <Miscelanea/>
      <MainFooter />
    </BrowserRouter>
    </>
  );
}

export default App;