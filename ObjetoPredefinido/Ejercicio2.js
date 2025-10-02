"use strict";

function redondeo(num){
    console.log(`floor: ${Math.floor(num)}\nceil: ${Math.ceil(num)}\nround: ${Math.round(num)}`);
}

function enteroAleatorio(min, max){
    return Math.floor((Math.random() * (max - min) + 1) + min);
}

redondeo(3.6);
console.log(`Dado ${enteroAleatorio(1, 6)}`);
   