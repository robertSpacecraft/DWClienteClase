"use strict"; // Activa el modo estricto

import { Persona } from "./Persona.js"; // Importa la clase base Persona

export class Cliente extends Persona { 
  // extends indica que Cliente hereda de Persona
  // Cliente tendrá las propiedades y métodos de Persona

  #cuota; 
  // Propiedad privada: solo se puede usar dentro de la clase Cliente

  constructor(dni, nombre, apellidos, fechaNacimiento, cuota) {
    // El constructor se ejecuta al crear un objeto con new Cliente(...)
    
    super(dni, nombre, apellidos, fechaNacimiento);
    // super llama al constructor de la clase padre (Persona)
    // Inicializa las propiedades heredadas

    this.cuota = cuota; 
    // Asigna la cuota usando el setter (permite validar el valor)

    this.actividades = []; 
    // Array para guardar las actividades del cliente
  }

  set cuota(value) {
    // Setter: se ejecuta al hacer this.cuota = algo
    const num = Number(value); // Convierte a número
    if (Number.isNaN(num) || num < 0) throw new Error("Cuota inválida."); // Valida el valor
    this.#cuota = num; // Guarda el valor en la propiedad privada
  }

  get cuota() {
    // Getter: se ejecuta al acceder a this.cuota
    return this.#cuota; // Devuelve la cuota privada
  }

  apuntarActividad(nombreActividad) {
    // Añade una actividad al cliente si no está repetida
    if (typeof nombreActividad !== "string" || !nombreActividad.trim()) return; // Valida el nombre
    if (!this.actividades.includes(nombreActividad)) this.actividades.push(nombreActividad); // Evita duplicados
  }
}
