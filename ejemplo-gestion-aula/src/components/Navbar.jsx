import { Link, useLocation } from 'react-router-dom';

function Navbar() {
    const location = useLocation();
    const esRutaActiva = (path) => location.pathname === path;
    return (
        <nav className="navbar">
            <div className="navbar-brand">Seleciona un ejercicio:</div>
            <div className='navbar-links'>
                <Link 
                    to="/ejercicio1"
                    className={'navbar-link' + (esRutaActiva('/ejercicio1') ? 'navbar-link-active' : '')}
                >Ejercicio 1
                </Link>
                <Link 
                    to="/ejercicio2"
                    className={'navbar-link' + (esRutaActiva('/ejercicio2') ? 'navbar-link-active' : '')}
                >Ejercicio 2
                </Link>
            </div>
        </nav>
    );
}

export default Navbar;