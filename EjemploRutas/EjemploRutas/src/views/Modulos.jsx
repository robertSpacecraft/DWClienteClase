import { Link, Outlet } from "react-router-dom";

function Modulos(props){
    return(
        <div className="modulos-layout">
            <aside className="modulos-list">
                <h3>Módulos 2º DAW</h3>
                <nav className="modulo-links">
                    {props.modulos.map(modulo => (
                        <Link key={modulo.id} to={modulo.id}>{modulo.nombre} ({modulo.horas}h)</Link>
                    ))}
                </nav>
            </aside>
            <section className="modulos-detalle">
                <h4>Detalles del módulo</h4>
                <Outlet />

            </section>

        </div>
    )

}

export default Modulos;