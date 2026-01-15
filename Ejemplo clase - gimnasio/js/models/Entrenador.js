"use strict"; // Modo estricto

import { Persona } from "./Persona.js"; // Importa la clase base

export class Entrenador extends Persona {
  #salario; 
  // Propiedad privada: solo accesible dentro de la clase Entrenador

  constructor(dni, nombre, apellidos, fechaNacimiento, especialidad, salario) {
    super(dni, nombre, apellidos, fechaNacimiento);
    // super llama al constructor de Persona y crea la parte heredada

    this.especialidad = especialidad; 
    // Propiedad propia del entrenador

    this.salario = salario; 
    // Asigna el salario usando el setter
  }

  set salario(value) {
    // Setter del salario (validación incluida)
    const num = Number(value);
    if (Number.isNaN(num) || num < 0) throw new Error("Salario inválido.");
    this.#salario = num; // Guarda el salario en la propiedad privada
  }

  get salario() {
    // Getter del salario
    return this.#salario;
  }
}
