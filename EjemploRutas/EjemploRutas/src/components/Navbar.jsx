import {Link} from 'react-router-dom';

function Navbar(){
    return(
        <>
        <h1>Módulos 2º DAW</h1>
        <nav className='nav-bar'>
            <Link to="/">Dashboard</Link>
            <Link to="/modulos">Módulos</Link>
            <Link to="/mantenimiento">Mantenimiento</Link>
        </nav>
        </>
    )
}

export default Navbar;