import React, { useState } from "react";

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
        const todosLosAsientos = Array.from({length: totalAsientos}, (valorContenidoIndex, index) => index + 1);

        const asientosOcupados = asignaciones.map((asignacion) => 
            asignacion.asiento);

        const asientosLibres = todosLosAsientos.filter((numeroAsiento) => !asientosOcupados.includes(numeroAsiento));

        if (asientosLibres === 0) {
            return null;
        }

        const indiceAleatorio = Math.floor(Math.random() * asientosLibres.length);
        const asientoElegido = asientosLibres[indiceAleatorio];
        return asientoElegido;

        const manejarVaciarAsignaciones = () => {
            setAsignaciones([]);
            setMensaje("Se han borrado todas las asignaciones");
        };
    };


    return (

    );
}
