"use strict";

export function renderTabla(container, titulo, columnas, filas) {
  const h2 = document.createElement("h2");
  h2.textContent = titulo;

  const table = document.createElement("table");
  const thead = document.createElement("thead");
  const trh = document.createElement("tr");

  columnas.forEach((col) => {
    const th = document.createElement("th");
    th.textContent = col;
    trh.appendChild(th);
  });

  thead.appendChild(trh);
  table.appendChild(thead);

  const tbody = document.createElement("tbody");

  filas.forEach((fila) => {
    const tr = document.createElement("tr");
    fila.forEach((celda) => {
      const td = document.createElement("td");
      td.innerHTML = celda; // OJO: aquí lo usamos a propósito para “pills”
      tr.appendChild(td);
    });
    tbody.appendChild(tr);
  });

  table.appendChild(tbody);

  container.appendChild(h2);
  container.appendChild(table);
}

export function clear(container) {
  container.innerHTML = "";
}
