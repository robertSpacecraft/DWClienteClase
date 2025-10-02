"use strict";

function cuentaVocalesConsonates(texto){
    let minuscula = texto.toLowerCase();
    let vocales = 0;
    let consonantes = 0;

    for (let i = 0; i < minuscula.length; i++){
        //metodo test = le das un dato y comprueba si aparece
        let c = minuscula[i];
        if (/[a-záéíóúüñ]/.test(c)){
            if (/[aeiouáéíóúü]/.test(c)){
                vocales++;
            } else {
                consonantes++;
            }

        }
    }
    console.log(`Vocales = ${vocales} \nConsonantes = ${consonantes}`);

}

cuentaVocalesConsonates("los cansados caminantes con los pies calenturientos caminaban por peligrosas sendas.");

cuentaVocalesConsonates("a e i o u y b c f g h j");

