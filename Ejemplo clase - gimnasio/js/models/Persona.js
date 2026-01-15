"use strict";

export class Persona { // Define una clase que sirve como modelo de persona
  constructor(dni, nombre, apellidos, fechaNacimiento) {
    // El constructor se ejecuta al crear un objeto con new Persona(...)
    // this hace referencia al objeto que se está creando
    this.dni = dni; // Propiedad dni del objeto Persona
    this.nombre = nombre; // Propiedad nombre del objeto Persona
    this.apellidos = apellidos; // Propiedad apellidos del objeto Persona
    this.fechaNacimiento = new Date(fechaNacimiento); // Guarda la fecha como objeto Date
  }

  getNombreCompleto() {
    return `${this.nombre} ${this.apellidos}`; // Accede a propiedades del propio objeto con this
  }

  getEdad() {
    const hoy = new Date();
    let edad = hoy.getFullYear() - this.fechaNacimiento.getFullYear(); 
    const m = hoy.getMonth() - this.fechaNacimiento.getMonth();
    if (m < 0 || (m === 0 && hoy.getDate() < this.fechaNacimiento.getDate())) edad--; 
    return edad; 
  }

  esMayorDeEdad() {
    return this.getEdad() >= 18; // Llama a otro método de la clase usando this
  }
}
