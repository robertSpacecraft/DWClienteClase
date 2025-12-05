import { useEffect, useState } from "react";

function SimuladorBateria() {
    const [nivel, setNivel] = useState(100);
    const [estaDescargando, setEstaDescargando] = useState(false);
    const [mensaje, setMensaje] = useState("");

    const manejarIniciar = () => {
        if (nivel === 0) {
            setMensaje("La batería está descargada. Cárgala antes de iniciar");
            return;
        }

        setEstaDescargando(true);
        setMensaje("descarga iniciada");
    }

    const manejarPausar = () => {
        setEstaDescargando(false);
        setMensaje("Descarga en pausa...");
    }

    const manejarCargar = () => {
        setNivel(100);
        setEstaDescargando(false);
        setMensaje("Batería totalmente cargada");
    }

    useEffect(() => {
        let idIntervalo = null;

        if (estaDescargando) {
            idIntervalo = setInterval(() => {
                setNivel((nivelAnterior) => {
                    const nuevoNivel = nivelAnterior - 1

                    if (nuevoNivel <= 0) {
                        setEstaDescargando(false);
                        setMensaje("Bateria agotada, cárgala para continuar.");
                        return 0;
                    }

                    return nuevoNivel;
                });
            }, 500);
        }
        return (() => {
            if (idIntervalo !== null) {
                clearInterval(idIntervalo);
            }
        })
    }, [estaDescargando]);


    const estiloNivel = {
        width: `${nivel}%`
    };

    return (
        <div className="bateria-container">
            <p className="bateria-texto">Nivel de bateria: {nivel}%</p>
            <div className="bateria-visual">
                <div className="bateria-marco">
                    <div className="bateria-nivel" style={estiloNivel}></div>
                </div>
                <div className="bateria-tapon"></div>
            </div>
            <div className="botones">
                <button onClick={manejarIniciar}>Iniciar descarga</button>
                <button onClick={manejarPausar}>Pausar</button>
                <button onClick={manejarCargar}>Cargar al 100%</button>
            </div>
            {mensaje && <p className="mensaje">{mensaje}</p>}
        </div>
    )
}

export default SimuladorBateria;