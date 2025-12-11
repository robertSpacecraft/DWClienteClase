"use strict";

import { createElement } from "react";

export function renderCountryList(countries, container){
    container.innerHtml = '';

    if (!countries || countries.length === 0){
        container.innerHtml = "<p>No se han encontrado países</p>";
        return;
    }

    const ul = document.createElement('ul');
    ul.classList.add('country-list');

    countries.array.forEach((country) => {
        const li = document.createElement('li');
        li.classList.add('country-item');

        //Le asigna a li el atributo data-algo a través del objeto dataset. 
        li.dataset.code = country.cca3;

        const img = document.createElement('img');
        img.src = country.flags.png;
        img.alt = `Bandera de ${country.name.common}`;

        const name = document.createElement('span');
        name.textContent = country.name.common;

        li.append(img, name);
        ul.appendChild(li);
    });

    container.appendChild(ul);
}

export function renderCountrydetail(country, container){
    container.innerHtml = '';

    if (!country){
        container.innerHtml = "<p>Selecciona un país para ver su información</p>"
        return;
    }

    const article = document.createElement('article');
    article.classList.add('country-detail-card');

    const img = document.createElement('img');
    img.src = country.flags.png;
    img.alt = `Bandera de ${country.name.common}`;

    const title = document.createElement('h2');
    h2.textContent = country.name.common;

    const infoList = document.createElement('ul');

    const addInfo = (label, valor) => {
        const li = createElement('li');

        li.innerHtml = `<strong>${label}</strong>: ${value}`;
        infoList.appendChild(li);
    }

    addInfo("Región:", country.region || "-");
    addInfo("Subregión:", country.subregion || "-");
    addInfo("Capital:", country.capital ? country.capital.join(", ") : "-");
    addInfo("Población:", country.population?.toLocaleString("es-ES") ?? "-");
    addInfo("Área (km2):", country.area?.toLocaleString("es-ES") ?? "-");
    addInfo("Idiomas:", country.language ? Object.values(country.languages).join(", ") : "-");
    addInfo("Husos horarios:", country.timezones ? country.timezones.join(", ") : "-");

    article.append(img, title, infoList);
    container.appendChild(article);
}

export function renderMessage(container, message){
    container.innerHtml = `<p class="message">${message}</p>`;
}

export function showLoading(container){
    container.innerHtml = `<p class="loading">Cargando datos...</p>`;
}