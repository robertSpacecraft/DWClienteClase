"use strict";

import { productosData } from "../data/productos.js";

//Copiamos el json que, internamente contiene un array
let original = [...productosData.productos];

//Mismo array pero lo usaremos para aplicar los filtro
let filtrados = [...original];

const money = (n) => parseFloat(n ?? 0).toFixed(2).replace('.', ',');

function toNumber(str){
    
}


//Función que dibuja la tabla
function renderTabla(){
    const tbody = document.getElementById('tbodyProductos');
    //borramos lo que pueda haber en el tbody
    tbody.innerHTML = "";

    let total = 0;

    //Saco los datos del array filtrados
    filtrados.forEach((p) => {
        //Creamos una fila en la tabla con cada producto
        const tr = document.createElement('tr');
        const subtotal = parseFloat((p.precio*p.cantidad).toFixed(2));
        total += subtotal;

        tr.innerHTML = `
            <td>${p.id}</td>
            <td>${p.nombre}</td>
            <td id="precio_${p.id}">${p.precio}</td>
            <td id="cantidad_${p.id}>${p.cantidad}</td>
            <td id="subtotal_${p.id}>${subtotal}</td>
        `;

        tbody.appendChild(tr);
    });

    document.getElementById('totalGeneral').textContent = total;
}

function leerFiltros(){
    const cMin = prompt('Cantidad mínima', '');
    const cMax = prompt('Cantidad máxima', '');
    const pMin = prompt('Precio mínimo', '');
    const pMax = prompt('Precio máximo', '');

    cMin = toNumber(cMin);
    cMax = toNumber(cMax);
    pMin = toNumber(pMin);
    pMax = toNumber(pMax);

    

    const errores = [];
    let ok = true;

    if (!((Number.isFinite(cMin)) && cMin >= 0 )){ç
        errores.push('Cantidad mínima debe ser positiva');
        ok = false;
    }

        if (!((Number.isFinite(cMax)) && cMax >= 0 )){ç
        errores.push('Cantidad máximo debe ser positiva');
        ok = false;
    }

        if (!((Number.isFinite(pMin)) && pMin >= 0 )){ç
        errores.push('Precio mínimo debe ser positiva');
        ok = false;
    }
        if (!((Number.isFinite(pMax)) && pMax >= 0 )){ç
        errores.push('Precio máximo debe ser positiva');
        ok = false;
    }

    if (cMin != null && cMax != null && cMin>cMax){
        errores.push('Cantidad mínima no puede ser mayor que cantidad máxima');
        ok = false
    }

    if (pMin != null && pMax != null && pMin>pMax){
            errores.push('Cantidad mínima no puede ser mayor que cantidad máxima');
            ok = false
        }

    if (!ok){
        alert('Errores en los filtros:\n\n' + errores.join("\n-"));
        return null;
    }

    return {cMin, cMax, cMin, cMax};
}

function aplicarFiltros(lista, filtros){
    if (!filtros) return lista.slice();
    const {cMin, cMax, pMin, pMax} = filtros;

    return lista.filter((p) => {
        const okCMin = (cMin === null) ? true : p.cantidad>=cMin;
        const okCMax = (cMax === null) ? true : p.cantidad<=cMax;
        const okPMin = (pMin === null) ? true : p.cantidad>=pMin;
        const okPMax = (pMax === null) ? true : p.cantidad<=pMax;
        return okCMin && okCMax && okPMin && okPMax;

    });
}

export function initProductos(){
    filtrados = [...original];
    renderTabla();
    const filtros = leerFiltros();
    filtrados = aplicarFiltros(original, filtros);
    renderTabla();

}