"use strict";

import { Gimnasio } from "./models/Gimnasio.js";
import { Cliente } from "./models/Cliente.js";
import { Entrenador } from "./models/Entrenador.js";
import { Actividad } from "./models/Actividad.js";
import { clear, renderTabla } from "./utils/dom.js";

document.addEventListener("DOMContentLoaded", () => {
  const salida = document.getElementById("salida");

  const gym = new Gimnasio("Gym Poeta Paco Mollá");

  const e1 = new Entrenador("111A", "Laura", "Pérez", "1990-05-10", "Fuerza", 1600);
  const e2 = new Entrenador("222B", "Miguel", "Sánchez", "1985-02-22", "Cardio", 1550);

  gym.addActividad(new Actividad("Funcional", 3, e1));
  gym.addActividad(new Actividad("Spinning", 2, e2));
  gym.addActividad(new Actividad("HIIT", 2, e1));

  const c1 = new Cliente("333C", "Paco", "López", "2007-01-12", 29.99);
  const c2 = new Cliente("444D", "Juan", "García", "2003-11-03", 35);
  const c3 = new Cliente("555E", "Sara", "Martínez", "1999-07-20", 25);

  gym.altaCliente(c1);
  gym.altaCliente(c2);
  gym.altaCliente(c3);

  gym.matricularClienteEnActividad("333C", "Funcional");
  gym.matricularClienteEnActividad("444D", "Spinning");
  gym.matricularClienteEnActividad("555E", "HIIT");

  // 2) Botones
  document.getElementById("btnInforme").addEventListener("click", () => {
    mostrarInforme(gym, salida);
  });

  document.getElementById("btnOrdenEdadAsc").addEventListener("click", () => {
    mostrarListadoClientes(gym, salida, "edad", "asc");
  });

  document.getElementById("btnOrdenCuotaDesc").addEventListener("click", () => {
    mostrarListadoClientes(gym, salida, "cuota", "desc");
  });

  // Primera vista
  mostrarInforme(gym, salida);
});

function mostrarInforme(gym, salida) {
  clear(salida);
  const info = gym.generarInforme();

  const p = document.createElement("p");
  p.innerHTML =
    `<strong>${info.nombre}</strong> · ` +
    `<span class="pill">Clientes: ${info.numClientes}</span> ` +
    `<span class="pill">Actividades: ${info.numActividades}</span> ` +
    `<span class="pill">Media cuotas: ${info.mediaCuotas.toFixed(2)} €</span>`;
  salida.appendChild(p);

  renderTabla(
    salida,
    "Profesorado / Actividades",
    ["Actividad", "Horas/sem", "Entrenador", "Especialidad"],
    info.profesorado.map((x) => [x.actividad, String(x.horas), x.entrenador, x.especialidad])
  );

  renderTabla(
    salida,
    "Clientes",
    ["DNI", "Nombre", "Edad", "Mayor de edad", "Cuota", "Actividades"],
    info.clientes.map((c) => [
      c.dni,
      c.nombre,
      String(c.edad),
      c.mayorEdad ? "Sí" : "No",
      `${c.cuota.toFixed(2)} €`,
      c.actividades,
    ])
  );
}

function mostrarListadoClientes(gym, salida, criterio, direccion) {
  clear(salida);
  const lista = gym.listarClientes(criterio, direccion);

  const titulo = `Clientes ordenados por ${criterio} (${direccion})`;
  renderTabla(
    salida,
    titulo,
    ["DNI", "Nombre", "Edad", "Cuota"],
    lista.map((c) => [c.dni, c.getNombreCompleto(), String(c.getEdad()), `${c.cuota.toFixed(2)} €`])
  );
}
