"use strict";

function diasHasta(){
    let ahora = new Date();
    let objetivo = new Date(ahora.getFullYear(), 11, 31);
    let diferencia = objetivo - ahora;
    let dias = Math.ceil(diferencia/(1000*60*60*24));
    console.log(`Faltan ${dias} dias para ${objetivo.toDateString()}`);
}

diasHasta();