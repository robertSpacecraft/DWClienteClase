import React, { useState } from "react";
import { Link } from "react-router-dom";

function AsignadorAsientos() {
    const [nombre, setNombre] = useState("");
    const [asignaciones, setAsignaciones] = useState([]);
    const [mensaje, setMensaje] = useState("");
    const [siguienteId, setSiguienteId] = useState(1);

    const totalAsientos = 20;

    const manejarCambioNombre = (event) => {
        setNombre(event.target.value);
    };

    const generarAsientoLibre = (event) => {
        const todosLosAsientos = Array.from({ length: totalAsientos }, (valorContenidoIndex, index) => index + 1);

        const asientosOcupados = asignaciones.map((asignacion) =>
            asignacion.asiento);

        const asientosLibres = todosLosAsientos.filter((numeroAsiento) => !asientosOcupados.includes(numeroAsiento));

        if (asientosLibres === 0) {
            return null;
        }

        const indiceAleatorio = Math.floor(Math.random() * asientosLibres.length);
        const asientoElegido = asientosLibres[indiceAleatorio];
        return asientoElegido;
    };

    const manejarVaciarAsignaciones = () => {
        setAsignaciones([]);
        setMensaje("Se han borrado todas las asignaciones");
    };

    const manejarAsignarAsiento = () => {
        if (nombre.trim() === "") {
            setMensaje("El nombre no puede estar vacío");
            return;
        }

        const asientoLibre = generarAsientoLibre();

        if (asientoLibre === null) {
            setMensaje("El aula está llena, no hay asientos libres");
        }

        const nuevaAsignacion = {
            id: siguienteId,
            nombre: nombre.trim(),
            asiento: asientoLibre
        }

        setAsignaciones((asignacionesAteriores) =>
            [...asignacionesAteriores, nuevaAsignacion]);

        setSiguienteId((idAnterior) => idAnterior + 1);

        setNombre("");
        setMensaje(`El asiento ${asientoLibre} se ha asignado a ${nuevaAsignacion.nombre}`);
    };
    const manejarEliminarAsignacion = (id) => {
        setAsignaciones((asignacionesAnteriores) => asignacionesAnteriores.filter((asignacion) => asignacion.id !== id));
        setMensaje("Asignación eliminada");
    }

    return (
        <div className="asignador-container">
            <div className="asignador-formulario">
                <label htmlFor="input-nombre">Nombre del alumno</label>
                <input type="text" id="input-nombre" value={nombre} onChange={manejarCambioNombre} placeholder="Escribe un nombre" />

                <div className="botones">
                    <button onClick={manejarAsignarAsiento}>Asignar Asiento</button>

                    <button className="botones" onClick={manejarVaciarAsignaciones}>Vaciar asignaciones</button>
                </div>

                {mensaje && <p className="mensaje">{mensaje}</p>}

                <p className="info-asientos">
                    Asientos ocupados: {asignaciones.length} / {totalAsientos}
                </p>
            </div>

            <ul className="lista-asignaciones">
                 {asignaciones.length === 0 && <li className="lista-cacia">No hay asignaciones</li>}

                 {asignaciones.map((asignacion) => {
                    <li key={asignacion.id}
                    className="asignacion-item"
                    onClick={() => manejarEliminarAsignacion(asignacion.id)}
                    title="Haz click para eliminar esta asignación">
                        <span className="asignacion-nombre">{asignacion.nombre}</span>
                        <span className="asignacion-flecha">-</span>
                        <span className="asignacion-asiento">asiento {asignacion.asiento}</span>
                    </li>
                 })}
            </ul>
        </div>
    );
}

export default AsignadorAsientos;