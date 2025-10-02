"use strict";

function formatearHora(num){
    return String(num).padStart(2,"0");
}

function mostrarHora(){
    let ahora = new Date();
    let horas = formatearHora(ahora.getHours());
    let minutos = formatearHora(ahora.getMinutes());
    let seconds = formatearHora(ahora.getSeconds());
    console.log(`${horas}: ${minutos}: ${seconds}`);
}



function iniciarReloj(){
    mostrarHora();
    let id = setInterval(mostrarHora, 1000);
    return id;
}

function detenerReloj(idInterval){
    clearInterval(idInterval);
}

let id = iniciarReloj();

//No ha funcionado pero para detener el reloj
//setTimeout(detenerReloj(id, 10000));
