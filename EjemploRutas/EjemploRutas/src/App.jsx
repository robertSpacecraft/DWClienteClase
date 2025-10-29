import { BrowserRouter, Routes, Route } from "react-router-dom";
import modulosData from "./data/modulosData";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Dashboard from "./views/Dashboard";


function App() {
  return (
    <div className="contenedor-portal">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/"/>
            <Route index element={<Dashboard />}/>

        </Routes>
        <footer />
      </BrowserRouter>
    </div>
  )
}

export default App
