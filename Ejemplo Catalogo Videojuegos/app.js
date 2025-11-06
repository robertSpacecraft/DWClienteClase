"use strict"

import { datosJuegosIniciales } from "./data/datos.js";

//Hago una copia del array
let datosJuegos = [...datosJuegosIniciales];
let siguienteId = datosJuegos.length;

const divListaJuegos = document.getElementById("listaJuegos");
const formularioJuego = document.getElementById("formularioJuego");
const divFiltros = document.getElementById("filtros");
const divMensaje = document.getElementById("divMensaje");

const inputTituloEntrada = document.getElementById("tituloEntrada");
const inputSelectorGenero = document.getElementById("selectorGenero");
const inputanio = document.getElementById("anioEntrada");

//Usamos querySelector porque permite seleccionarlo por su atributo
const labelTitulo = formularioJuego.querySelector("label[for='tituloEntrada']");
const labelanio = formularioJuego.querySelector("label[for='anioEntrada']");

function crearTarjetaJuego(juego){
    const tarjeta = document.createElement("div");
    tarjeta.classList.add("tarjeta-juego");
    tarjeta.setAttribute("dataGenero", juego.genero);

    tarjeta.innerHTML = `
        <h3>${juego.titulo}</h3>
        <p><strong>Género:</strong>${juego.genero}</p>
        <p><strong>Año:</strong>${juego.anio}</p>
    `;

    return tarjeta;
}

function renderizarVistaJuegos(generoFiltro = "all"){
    divListaJuegos.innerHTML = ``;
    const juegosARenderizar = datosJuegos.filter(juego =>
        generoFiltro === "all" || juego.genero === generoFiltro
    );

    if (juegosARenderizar.length === 0){
        divListaJuegos.innerHTML = ` <p>No hay juegos que coincidan con el filtro seleccionado</p>`;
        return;
    }

    juegosARenderizar.forEach(juego => {
        const tarjeta = crearTarjetaJuego(juego);
        divListaJuegos.appendChild(tarjeta);
    });
}

function validarFormulario(){
    let esValido = true;
    let mensajesError = [];

    divMensaje.innerHTML = ``;

    inputTituloEntrada.classList.remove("entrada-error");
    inputanio.classList.remove("entrada-error");
    inputSelectorGenero.classList.remove("entrada-error");
    labelTitulo.classList.remove("etiqueta-error");
    labelanio.classList.remove("etiqueta-error");

    //Validamos el título
    if (inputTituloEntrada.value.trim().length < 2){
        mensajesError.push("El título debe contener, al menos, dos caracteres");
        esValido = false;
        inputTituloEntrada.classList.add("entrada-error");
        labelTitulo.classList.add("entrada-error");
    }
    const anio = parseInt(inputanio.value);

    //Validamos año
    if (isNaN(anio) || inputanio.value.length !== 4){
        mensajesError.push("¡Pon un año válido!");
        esValido = false;
        inputanio.classList.add("entrada-error");
        labelanio.classList.add("entrada-error");
    }

    //Validamos género
    if (inputSelectorGenero.value === ""){
        mensajesError.push("Debes seleccionar un género");
        esValido = false;
        inputSelectorGenero.classList.add("entrada-error");
    }

    if (!esValido){
        const ul = document.createElement("ul");
        mensajesError.forEach(msg => {
            const li = document.createElement("li");
            li.textContent = `ERROR: ${msg}`;
            ul.appendChild(li);
        });
        divMensaje.appendChild(ul);
    }

    return esValido;
}

function manejarEnvioFormulario(evento){
    evento.preventDefault(); //cancela el evento submit por defecto

    if (!validarFormulario()){
        return;
    }

    const nuevoJuego = {
        id:siguienteId++,
        titulo: inputTituloEntrada.value.trim(),
        genero: inputSelectorGenero.value,
        anio: parseInt(inputanio.value)
    };

    datosJuegos.push(nuevoJuego);

    renderizarVistaJuegos("all");
    formularioJuego.reset();
    divMensaje.textContent = `¡Juego añadido Correctamente!`
    
}

function manejarClickFiltro(evento){
    //para identificar el elemento (etiqueta HTML) más bajo (en este caso el botón se usa target)
    //primero, para asegurar que pinchamos sobre un botón, usamos su clase:

    if (evento.target.classList.contains("boton-filtro")){
        //Para identificar cada botón que tiene la misma clase usamos data-genero (que es un atributo creado por nosotros)
        const geenroSeleccionado = evento.target.getAttribute('data-genero');

        divFiltros.querySelectorAll(".boton-filtro").forEach(btn => {
           btn.classList.remove("activo"); 
        });

        evento.target.classList.add("activo");
        renderizarVistaJuegos(geenroSeleccionado);
    }
}

document.addEventListener("DOMContentLoaded", () => {
    formularioJuego.addEventListener('submit', manejarEnvioFormulario, false);

    divFiltros.addEventListener("click", manejarClickFiltro, false);

    inputTituloEntrada.addEventListener("input", () => {
        inputTituloEntrada.classList.remove("entrada-error");
        labelTitulo.classList.remove("etiqueta-error");
        divMensaje.textContent = "";
    });

    inputanio.addEventListener("input", () => {
        inputanio.classList.remove("entrada-error");
        labelanio.classList.remove("etiqueta-error");
        divMensaje.textContent = "";
    });
    
    renderizarVistaJuegos("all");

});

