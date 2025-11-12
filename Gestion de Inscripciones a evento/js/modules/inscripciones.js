"use strict"

const STORAGE_KEY = 'inscripciones_ej2';

const leer = () => {
    try {
        return JSON.parse(localStorage.getItem(STORAGE_KEY)) || [];
    } catch {
        return [];
    }
}

//Convierto la lista de string a json
const guardar = (lista) => localStorage.setItem(STORAGE_KEY, JSON.stringify(lista));


function limpiarErrores(){
    document.querySelectorAll('.error').forEach(e => e.textContent = "");
    document.querySelectorAll('.invalid').forEach(e => e.classList.remove('invalid'));
}

function marcarError(element, msg){
    element.classList.add('invalid');
    const small = document.getElementById('error' + element.id.chartAt(0).toUpperCase()+element.id.slice(1));
    if (small){
        small.textContent = msg;
    }
}

function validar({nombre, correo, terminos}){
    let ok = true;
    limpiarErrores();

    if (!nombre && nombre.trim().length < 5){
        marcarError(document.getElementById('nombre'), 'Al menos 5 caracteres');
        ok = false;
    }

    const emailImput = document.getElementById('correo');
    const patron = new RegExp(emailImput.getAttribute('pattern'));
    if (!correo || !patron.test(correo)){
        marcarError(emailImput, 'Correo no válido');
        ok = false;
    }

    if (!terminos){
        marcarError(document.getElementById('terminos'), 'Debes aceptar los términos');
        ok = false;
    }
    
    return ok;
}

function renderTabla(){
    const tbody = document.getElementById('tbodyInscritos');
    tbody.innerHTML = "";

    const lista = leer();

    lista.forEach((ins, i) => {
        const tr = document.createElement('tr');
        tr.innerHTML = `
            <td>${i+1}</td>
            <td>${ins.nombre}</td>
            <td>${ins.correo}</td>
            <td>${ins.tipo}</td>
            <td><button type="button" class="btnEliminar" date-i=${i}>Eliminar</button></td>
            
        `;

        tbody.appendChild(tr);
    });

    tbody.querySelectorAll('btnEliminar').forEach(btn => {
        btn.addEventListener('click', (e) => {
            const i = parentInt(e.currentTarget.getAttribute('data-i'));
            const list = leer();
            lista.splice(i, 1);
            guardar(lista);
            rederTabla();
        });
    });
}
//prevenDefault cancela el evento por defecto del botón
export function initInscripciones(){
    const form = document.getElementById('formInscripcion');
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        const nombre = document.getElementById('nombre').value.trim();
        const correo = document.getElementById('correo').value.trim();
        const tipo = document.getElementById('tipo').value;
        const terminos = document.getElementById('terminos').checked;

        if (!validar({nombre, correo, terminos})){
            return;            
        }

        const lista = leer();
        lista.push({nombre, correo, tipo});
        guardar(lista);
        form.reset();
        limpiarErrores();
        alert('¡Inscripción guardada correctamente!');
    });
    
    document.getElementById('btnMostrar').addEventListener('click', renderTabla);
    
}

