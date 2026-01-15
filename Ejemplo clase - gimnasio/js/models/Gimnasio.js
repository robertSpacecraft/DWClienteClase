"use strict"; 

import { Cliente } from "./Cliente.js"; 
import { Actividad } from "./Actividad.js";

export class Gimnasio {
  constructor(nombre) {
    // Constructor: crea un nuevo objeto Gimnasio
    this.nombre = nombre; // Nombre del gimnasio
    this.clientes = []; // Array donde se guardan objetos Cliente
    this.actividades = {}; 
    // Objeto donde cada clave es el nombre de la actividad y el valor es un objeto Actividad
  }

  altaCliente(cliente) {
    // Da de alta un cliente en el gimnasio
    if (!(cliente instanceof Cliente)) throw new Error("Debe ser Cliente.");
    // Comprueba que lo que se pasa es un objeto de la clase Cliente

    if (this.clientes.some((c) => c.dni === cliente.dni)) return false;
    // Evita clientes duplicados comparando el DNI

    this.clientes.push(cliente); // Añade el cliente al array
    return true; // Indica que el alta se ha realizado correctamente
  }

  addActividad(actividad) {
    // Añade una nueva actividad al gimnasio
    if (!(actividad instanceof Actividad)) throw new Error("Debe ser Actividad.");
    // Comprueba que el objeto es de la clase Actividad

    if (this.actividades[actividad.nombre]) return false;
    // Evita actividades duplicadas usando el nombre como clave

    this.actividades[actividad.nombre] = actividad;
    // Guarda la actividad dentro del objeto actividades

    return true;
  }

  matricularClienteEnActividad(dniCliente, nombreActividad) {
    // Matricula un cliente en una actividad concreta
    const cliente = this.clientes.find((c) => c.dni === dniCliente);
    // Busca el cliente por DNI

    const act = this.actividades[nombreActividad];
    // Obtiene la actividad por su nombre

    if (!cliente || !act) return false;
    // Si no existe el cliente o la actividad, no se puede matricular

    cliente.apuntarActividad(nombreActividad);
    // Llama a un método del objeto Cliente

    return true;
  }

  getMediaCuotas() {
    // Calcula la media de las cuotas de todos los clientes
    if (this.clientes.length === 0) return 0;

    const total = this.clientes.reduce((acc, c) => acc + c.cuota, 0);
    // Suma todas las cuotas usando reduce

    return total / this.clientes.length;
  }

  listarClientes(criterio, direccion = "asc") {
    // Devuelve una lista de clientes ordenada
    const copia = [...this.clientes];
    // Crea una copia para no modificar el array original

    const factor = direccion === "desc" ? -1 : 1;
    // Factor para cambiar entre orden ascendente y descendente

    if (criterio === "edad") {
      // Ordena usando un método de la clase Persona
      copia.sort((a, b) => (a.getEdad() - b.getEdad()) * factor);
    } else if (criterio === "cuota") {
      // Ordena usando una propiedad con getter
      copia.sort((a, b) => (a.cuota - b.cuota) * factor);
    }

    return copia; // Devuelve el array ordenado
  }

  getProfesoradoDeActividades() {
    // Genera un listado con los entrenadores de cada actividad
    return Object.values(this.actividades).map((a) => ({
      actividad: a.nombre,
      horas: a.horasSemanales,
      entrenador: a.entrenador.getNombreCompleto(),
      // Usa métodos y propiedades del objeto Entrenador
      especialidad: a.entrenador.especialidad,
    }));
  }

  generarInforme() {
    // Crea un objeto con toda la información del gimnasio
    return {
      nombre: this.nombre,
      numClientes: this.clientes.length,
      numActividades: Object.keys(this.actividades).length,
      mediaCuotas: this.getMediaCuotas(),
      // Llama a métodos de la propia clase Gimnasio

      profesorado: this.getProfesoradoDeActividades(),
      clientes: this.clientes.map((c) => ({
        // Transforma cada objeto Cliente en un objeto sencillo
        dni: c.dni,
        nombre: c.getNombreCompleto(),
        edad: c.getEdad(),
        mayorEdad: c.esMayorDeEdad(),
        cuota: c.cuota,
        actividades: c.actividades.join(", ") || "(ninguna)",
      })),
    };
  }
}
