"use strict";

var elementos = document.getElementsByTagName("p");
console.log(elementos);
console.log(elementos.length); //Devuelve la cantidad de elementos

let parrafo = document.body.firstChild; //ojo accede al texto (salto de linea despuesdel body)
console.log(parrafo);

let parrafoElemento = document.body.firstElementChild;
console.log(parrafoElemento); //Este sí devuelve el primer hijo etiqueta

console.log(parrafo.nodeType);
console.log(parrafoElemento.nodeType);

console.log(parrafo.nodeName);
console.log(parrafoElemento);

console.log(parrafo.nodeValue);
console.log(parrafoElemento.nodeValue);

console.log(`Párrafos seleccionado: ${elementos.length}`);
console.log(elementos[0]);
console.log(elementos[elementos.length -1]);

for (let i = 0; i < elementos.length; i++){

    console.log(elementos[i]);
}

//query devuelve el contenido en el momento de ejecución, no cambia. usando getElementBy sí cambia dinámicamente.
let inputs = document.querySelectorAll("input");
console.log(inputs);

let botones = document.querySelector("#botones");
console.log(botones);

let divs = document.querySelectorAll("div div");
console.log(divs);

let claseContendio= document.querySelectorAll(".contenido");
console.log(claseContendio);

const crearCE = function(){
    let contenido = document.createTextNode(
        "nuevo párrafo crado <strong>dinámicamente</strong>" //No hace strong
    );
    let elemento = document.createElement("p");

    elemento.appendChild(contenido);
    console.log(document.getElementById("botones"));
    document.getElementById("botones").appendChild(elemento);
};

const crearIH = () => {
    let elemento2 = document.createElement("div");
    elemento2.innerHTML = 
    "<p>Nuevo párrafo creado dinámicamente con <strong>innerHTML</strong></p>"
    document.getElementById("botones").appendChild(elemento2);
};

const derecha = () => { 
    let der = document.getElementById("primero");
    console.log(der.getAttribute("align"));//Obtiene el atributo o da null
    der.setAttribute("align", "right");
    console.log(der.getAttribute("align")); //Establece (crea) el atributo
};

const destacar = () => {
    let nuevos = document.getElementsByClassName("nuevo");
    for (let i = 0; i < nuevos.length; i++){
        nuevos[i].classList.toggle("destacado"); //Cambia, pero vuelve al pulsar de nuevo
    }
};

const pintarAzul = () => {
    let azules = document.getElementsByClassName("contenido");
    for (let i = 0; i < azules.length; i++){
        azules[i].style.color = "blue";
    }
};

let primerP = document.getElementById("primero");
primerP.classList.add("verde");

const crearRosa = () => {
    let style = document.createElement("style");
    style.innerHTML = ".rosa {color: pink; border: red 2px solid;}";

    document.head.appendChild(style);
    let elementos = document.getElementsByClassName("contenido");
        for (let i = 0; i < elementos.length; i++){
        elementos[i].classList.toggle("rosa");
    }
}
