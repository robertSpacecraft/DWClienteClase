import './App.css'
import React from 'react';
import {Person, GrupoPersonas} from './Components';

function App() {

  return (
    <>
      <GrupoPersonas>
        <Person foto="https://static-1.ivoox.com/audios/b/8/c/4/b8c4e9a27c6816564f8235ebc9a12d4d_XXL.jpg" nombre="Robert" edad="41" esVip={true} rol="Alumno">
          Es un tio de puta madre, un buen tronco, vamos un pedazo de bro, no como esos que ni son bro, ni tronco, ni nada.
        </Person>
        <Person foto="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_687xkE4M2vPnNVBNROacbllcHEo84KkHeg&s" nombre="Paco" edad="36" color1="green" color2="aqua">
          Este tio también en un pedazo de bro, un colega de puta madre, un tronco que flipas
        </Person>
        <Person foto="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0njquLukkL_8ydpQg9-yIan_oyabFsJGPmA&s" nombre="María" edad="26" color1="blue" color2="lightblue" esVip={true} rol="Profesor"/>
        <Person foto="https://s2.abcstatics.com/abc/www/multimedia/gente/2025/10/02/amalia-holanda-joven-aleman-RkfBkVZvflcG3m04LH1WOuM-1200x840@diario_abc.jpg" nombre="Amalia" edad="16" color1="gold" color2="pink" />
        <Person foto="https://hips.hearstapps.com/hmg-prod/images/triana-marrash-influencer-686bac785c676.jpg?crop=0.549xw:1.00xh;0.226xw,0&resize=1200:*" nombre="Triana" edad="22" />
      </GrupoPersonas>
    </>
  )
}

export default App
