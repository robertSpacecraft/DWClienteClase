"use strict";


//var elementos = document.getElementsByTagName("p");
/************** Trabajando con el DOM **************/

/* Tipos de nodo en un document HTML.

  -> Element, nodo que contiene una etiqueta HTML (nodeType = 1).
  -> Attr, nodo que forma parte de un elemento HTML (nodeType = 2).
  -> Text, nodo que contiene texto y que no puede tener hijos (nodeType = 3).
  -> Existen 12 tipos de nodos.

*/

/********************************************************************************
 *  Posicionamiento relativo firstChild, lastChild, nextSibling, previousSibling.
 * */
//console.log("TEST");
//console.log(elementos);
/*var parrafo = document.body.firstChild; // #text "\n entre <body> y <div>"
var parrafo2 = document.body.firstElementChild; 
console.log("var parrafo = document.body.firstChild;");
console.log(parrafo);
console.log("var parrafo2 = document.body.firstElementChild;");
console.log(parrafo2);  */

/***************************************************
 *  Tipos de nodo Element (1), Attr (2) y Text (3).
 * */

/* console.log("console.log(parrafo.nodeType);");
console.log(parrafo.nodeType);
console.log("console.log(parrafo2.nodeType);");
console.log(parrafo2.nodeType);
console.log("console.log(parrafo.nodeName);");
console.log(parrafo.nodeName);
console.log("console.log(parrafo.nodeValue);");
console.log(parrafo.nodeValue);
console.log("console.log(parrafo2.nodeName);");
console.log(parrafo2.nodeName);
console.log("console.log(parrafo2.nodeValue);");
console.log(parrafo2.nodeValue); */

/*******************************************************************************************************
 *  Seleccionando elementos (recursivamente) -> getElementsByTagName, getElementById,
 *                                              getElementsByName y getElementByClassName.
 * */

/*console.log('var parrafos = document.getElementsByTagName("p"); ');
var parrafos = document.getElementsByTagName("p"); // Parrafos es un NodeList.
console.log(parrafos); // Ver la estructura del objeto (siempre es buena idea).
console.log(`Párrafos seleccionados ${parrafos.length}`);
for (var i = 0; i < parrafos.length; i++) {
  console.log(parrafos[i]);
}
*/
/*
// Error. No es un array. es una collection 
parrafos.map((p) => {
  console.log(p);
}); */

/******************************************************************************
 *  Seleccionando elementos como en CSS -> querySelectorAll y querySelector.
 * */

/*
var inputs = document.querySelectorAll("input");
console.log('var inputs = document.querySelectorAll("input");');
console.log(inputs);

// ¡¡¡CUIDADO CON ESTO!!! -> Consultad el prototipo del objeto antes.
console.log('node list no admite map');
inputs.map((i) => {
  console.log(i);
});*/ 


/*console.log('var capa_botones = document.querySelector("#botones");');
var capa_botones = document.querySelector("#botones");
console.log(capa_botones);


console.log('var capas = document.querySelectorAll("div div");');
var capas = document.querySelectorAll("div div");
console.log(capas);

console.log('var capas2 = document.querySelectorAll(".contenido");');
var capas2 = document.querySelectorAll(".contenido");
console.log(capas2);*/
 
/***********************************************
 *   ¡¡¡ATENCIÓN!!!
 *  -> Las referencias con getElementBy siempre contienen el estado actual del documento (están vivas).
 *  -> Las referencias con querySelector contienen los elementos en el momento de ejecución (no cambian).
 *
 * **********************************************/

/*********************************************************************************
 * Creando objetos en el DOM -> document.createElement y document.createTextNode.
 * */

const crearCE = function() {
//const crearCE = () => {
  // 1.- Se crea el texto (contenido),
  var contenido = document.createTextNode(
    "Nuevo párrafo creado <strong>dinámicamente</strong>"
  );
  // 2.- Se crea el elemento,
  var elemento = document.createElement("p");
  // 3.- Se añade el contenido (texto) al elemento,
  elemento.appendChild(contenido);
  // 4.- Se añade al DOM -> appendChild(nuevo), insertBefore(nuevo,existente),  removeChild(existente), replaceChild(nuevo,existente).
  console.log(document.getElementById("botones"));
  document.getElementById("botones").appendChild(elemento);
};



// Usando innerHTML (¡¡¡ATENCIÓN!!! -> reemplaza todo el contenido del nodo por el nuevo).

const crearIH = () => {
  // 1.- Se crea el elemento,
  var ele2 = document.createElement("div");
  // 2.- Se crea el texto (contenido),
  ele2.innerHTML =
    "<p>Nuevo párrafo 1 creado dinámicamente con <strong>innerHTML</strong></p><p>Nuevo párrafo 2 creado dinámicamente con <strong>innerHTML</strong></p><p>Nuevo párrafo 3creado dinámicamente con <strong>innerHTML</strong></p>";
  // 3.- Se añade al DOM -> appendChild(nuevo), insertBefore(nuevo,existente),  removeChild(existente), replaceChild(nuevo,existente).
  document.getElementById("botones").appendChild(ele2);
}; 

// Usando insertAdjacentHTML("dondeInsertar", "contenidoAInsertar") -> respeta el contenido previo.

/* Ejemplos e uso localización. 

<!-- beforebegin -->
<p id="feo">
  <!-- afterbegin -->
    Párrafo muy feo.
  <!-- beforeend -->
</p>
<!-- afterend --> 
*/
/*
document
  .getElementById("botones")
  .insertAdjacentHTML(
    "afterbegin", //beforebegin, afterbegin, beforeend, afterend
    "Nuevo párrafo creado dinámicamente con <strong>innerAdjacentHTML</strong>"
  );*/

/***************************************************************************************************************************
 * Acceso y modificacción de atributos -> getAttribute(nombre), setAttribute(nombre, valor) o como propiedades de elementos.
 * */

const derecha = () => {
  var der = document.getElementById("primero");
  console.log(der.getAttribute("align")); // No está definido. imprimirá null
  der.setAttribute("align", "right");
  console.log(der.getAttribute("align")); // Después del cambio es "right".
};

/* Usando la propiedad style pada dar formato -> elemento.style.propiedad (Mala idea). */

 const pintarAzul = () => {
  var azules = document.getElementsByClassName("contenido");
  //console.log(azules);
  for (var i = 0; i < azules.length; i++) {
    azules[i].style.color = "blue";
  }
}; 

/* Mejor se usa CSS -> className o classList (add, remove, toggle, length y contains). */

var primero = document.getElementById("primero");
primero.classList.add("verde"); 

const destacar = () => {
  var nuevos = document.getElementsByClassName("nuevo");
  for (var i = 0; i < nuevos.length; i++) {
    nuevos[i].classList.toggle("destacado");
  }
}; 

 const crearRosa = () => {
  const style = document.createElement('style');

  style.innerHTML = ".rosa { color: pink; font-family: Arial, Helvetica, sans-serif; border: red 2px solid; }";
  document.head.appendChild(style); // Añadir la nueva clase al documento

  var elementos = document.getElementsByClassName("contenido");
  for (var i = 0; i < elementos.length; i++) {
    elementos[i].classList.add('rosa');
  }
}; 
