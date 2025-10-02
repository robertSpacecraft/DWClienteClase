import './App.css'

function Person(props){
  let c1 = props.color1 || "rgba(255, 72, 0, 0.651)";
  let c2 = props.color2 || " rgba(255, 0, 0, 0.822)";
  let descripcion = props.children || "Este bro no tiene descripción";
  return (
    <div className='person' style={{
      background: "linear-gradient(135deg, "+c1+", "+c2+")"
    }}>
      <img src={props.foto} alt={props.nombre} width="200"/>
      <h3>Nombre: {props.nombre}</h3>
      <p>Edad: {props.edad}</p>
      <p>Descripción: {descripcion}</p>

    </div>
  )
}


function App() {

  return (
    <>
      <h1>Hola mundo</h1>    
      <Person foto="https://static-1.ivoox.com/audios/b/8/c/4/b8c4e9a27c6816564f8235ebc9a12d4d_XXL.jpg" nombre="Robert" edad="41">
        Es un tio de puta madre, un buen tronco, vamos un pedazo de bro, no como esos que ni son bro, ni tronco, ni nada.
        </Person>
      <Person nombre="Paco" edad="36" color1="green" color2="aqua">
        Este tio también en un pedazo de bro, un colega de puta madre, un tronco que flipas
        </Person>
      <Person nombre="María" edad="26" color1="blue" color2="lightblue"/>
      <Person nombre="Amalia" edad="16" color1="gold" color2="pink"/>
      <Person nombre="Triana" edad="22"/>
    </>
  )
}

export default App
