import { Routes, Route, BrowserRouter } from 'react-router-dom';
import { Navbar } from './components/Navbar.jsx';
import asignadorAsientos from './views/asignadorAsientos.jsx';
import simuladorBateria from './views/simuladorBateria.jsx';

function PaginaInicio() {
  return (
    <div className="pagina-inicio">
      <h1>Gestión de Aula y simulación de Bateria</h1>
      <p>Usa al menú para acceder a cada ejercicio</p>
      <ul>
        <li><strong>Ejercicio 1 - Asignador de asientos en un aula</strong>Estado con arrays, eventos, objetos y generación aleatoria sin repetir</li>
        <li><strong>Ejercicio 2 - Simulador de batería</strong>Estado Uso de useEffect con setInterval y función limpieza</li>
      </ul>
    </div>
  );
}
function App() {
  return (
    <div>
      <BrowserRouter>
      <Navbar />
        <div className='app-container'>
          <Routes>
            <Route path="/" element={<PaginaInicio/>} />
            <Route path="/ejercicio1" element={
              <section className='seccion'>
                <h2>Ejerccio 1- Asignador de asientos</h2>
                <asignadorAsientos/>
              </section>
            }/>

            <Route path="/ejercicio2" element={
              <section className='seccion'>
                <h2>Ejerccio 2- Simulador de batería</h2>
                <simuladorBateria/>
              </section>
            }/>
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App
