"use strict";

import { Entrenador } from "./Entrenador.js";

export class Actividad {
  constructor(nombre, horasSemanales, entrenador) {
    // Constructor: se ejecuta al crear una nueva Actividad
    this.nombre = nombre; 
    this.horasSemanales = Number(horasSemanales); 

    // instanceof comprueba que el objeto pasado es de tipo Entrenador
    // Evita que se pase cualquier otro tipo de objeto
    if (!(entrenador instanceof Entrenador)) {
      throw new Error("Entrenador debe ser un objeto Entrenador.");
    }

    this.entrenador = entrenador;
    // Guarda el objeto Entrenador completo dentro de la actividad
  }
}
