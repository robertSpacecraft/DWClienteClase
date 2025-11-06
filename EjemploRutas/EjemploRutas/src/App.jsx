import { BrowserRouter, Routes, Route } from "react-router-dom";
import modulosData from "./data/modulosData";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Dashboard from "./views/Dashboard";
import Mantenimiento from "./views/Mantenimiento";
import Modulos from "./views/Modulos";
import Error404 from "./views/Error404";
import DetallesModulo from "./views/subviews/DetallesModulo";


function App() {
  return (
    <div className="contenedor-portal">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/">
            <Route index element={<Dashboard />}/>
            <Route path="mantenimiento" element={<Mantenimiento />}/>
            <Route path="modulos" element={<Modulos modulos={modulosData} />}>
              <Route path=":moduleId" element={<DetallesModulo modulos={modulosData}/>}/>
            </Route>
            <Route path="*" element={<Error404/>}/>
          </Route>
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  )
}

export default App
