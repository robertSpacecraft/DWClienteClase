"use strict";

const datos = [
    { nombre: 'Jorge', nota: 9 },
    { nombre: 'Luisa', nota: 8 }
];

const container = document.getElementById("container");

function crearTable() {
    container.innerHTML = '';

    const table = document.createElement('table');
    const thead = document.createElement('thead');
    const trh = document.createElement('tr');

    ['Nombre', 'Nota'].forEach(texto => {
        const th = document.createElement('th');
        th.textContent = texto;
        trh.appendChild(th);

    });
    thead.appendChild(trh);

    const tbody = document.createElement('tbody');
    datos.forEach(alumno => {
        const trb = document.createElement('tr');
        const tdNombre = document.createElement('td');
        tdNombre.textContent = alumno.nombre;
        const tdNota = document.createElement('td');
        tdNota.textContent = alumno.nota;

        //Creamos clase para facilitar la búsqueda
        tdNota.className = 'nota';

        //Añado los nombres: uso append solo pero cuando son varios no se usa appendChild
        trb.append(tdNombre, tdNota);

        //Añado el tr
        tbody.appendChild(trb);
    });

    table.append(thead, tbody);
    container.appendChild(table);
}

crearTable();

document.getElementById('add').addEventListener('click', () => {
    let numeroAlumnos = datos.length + 1;
    datos.push({ nombre: 'Alumno ' + numeroAlumnos, nota: Math.floor(Math.random() * 11) });
    crearTable();
});

document.getElementById('suspensos').addEventListener('click', () => {
    const notas = document.getElementsByClassName('nota');
    for (let i = 0; i < notas.length; i++) {
        if (notas[i].textContent < 5) {
            notas[i].classList.toggle('rojo');
        }
    }
});

