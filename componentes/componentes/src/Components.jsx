import React from 'react';

export function GrupoPersonas(props) {
  let total = React.Children.count(props.children);
  let titulo = total > 3 ? "Equipo (grupo tocho)" : "Equipo";
  return (
    <>
      <h1>{titulo}Total: {total}</h1>
      <div className='grid'>
        {props.children}
      </div>
    </>
  )
}

export function Etiqueta(props){
  let clase = "etiqueta-" + (props.tipo || "");
  return(
    <span className={clase}>{props.children}</span>
  )
}

export function Person(props) {
  let c1 = props.color1 || "rgba(255, 72, 0, 0.651)";
  let c2 = props.color2 || " rgba(255, 0, 0, 0.822)";
  let descripcion = props.children || "Este bro no tiene descripción";
  let rol = props.rol;
  let esVip = !!props.esVip; //La doble exclamación indica que es boleano esctricto
  return (
    <div className={'person'+ (esVip ? "-vip" : "")} style={{
      background: "linear-gradient(135deg, " + c1 + ", " + c2 + ")"
    }}>

      <img src={props.foto} alt={props.nombre} width="200" />
      <h3>{esVip ? "💫" : ""} Nombre: {props.nombre}</h3>
      <p>Edad: {props.edad}</p>
      <p>Descripción: {descripcion}</p>
    
    <div className='etiquetas-extra'> 
    {rol ? <Etiqueta tipo="rol">{rol}</Etiqueta> : null}
    {esVip ? <Etiqueta tipo="vip">VIP</Etiqueta> : null}
    </div>
    </div>
  )
}