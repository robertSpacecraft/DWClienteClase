import {useParams} from 'react-router-dom';
//Esto viene desde Link el apartado "to"

function DetallesModulo(props){
    const {moduleId} = useParams();
    //Ahora no puedo usar un map, quiero uno concreto, así que el id tiene que coincidir con el moduleID del useParams
    //O séa lee la url para saber que ruta está y lo guada en moduleId
    const moduloSeleccionado = props.modulos.find(modulo => modulo.id === moduleId);

    if (!moduloSeleccionado){
        return <p>Selecciona un módulo de la lista para ve sus detalles</p>
    }

    return (
        <div className='detalle-card'>
            <h3>Detalles: {moduloSeleccionado.nombre}</h3>
            <p><strong>ID:</strong>{moduloSeleccionado.id.toUpperCase()}</p>
            <p><strong>Carga Horaria:</strong>{moduloSeleccionado.horas}h</p>
            <p><strong>Descripción:</strong>{moduloSeleccionado.descripcion}</p>

        </div>
    )

    return(
<></>
    )
}

export default DetallesModulo;