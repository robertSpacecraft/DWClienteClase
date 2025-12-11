"use strict";

import { fetchAllCountries, fetchCountryByCode } from "./api/countriesApi.js";
import { renderCountryList, renderMessage, renderCountrydetail, showLoading } from "./view/domUtils.js";

let allCountries = [];

function applyFiltersAndRender(listContainer, searchInput, regionSelect) {

    //Leemos los datos del input y el select
    const text = searchInput.value.toLowerCase().trim();
    const region = regionSelect.value;

    const filtered = allCountries.filter((country) => {
        const matchesName = country.name.common.toLowerCase().includes(text);
        const matchesRegion = region === "" || country.region === region;

        return matchesName && matchesRegion;
    });

    renderCountryList(filtered, listContainer);
}

function initApp() {
    const listContainer = document.getElementById("country-list");
    const detailContainer = document.getElementById("country-detail");
    const searchInput = document.getElementById("search-country");
    const regionSelect = document.getElementById("region-filter");

    if (!listContainer || !detailContainer) {
        console.log("No se han encontrado los contenedores");
        return;
    }

    showLoading(listContainer);
    renderCountrydetail(null, detailContainer);

    fetchAllCountries().then((countries) => {
        allCountries = countries;


        //Set es un set de colecciones (colección sin duplicados)
        const regions = Array.from(new Set(countries.map((c) => c.region).filter(Boolean))).sort();

        regions.forEach((region) => {
            const option = document.createElement("option");
            option.value = region;
            option.textContent = region;

            regionSelect.appendChild(option);
        });

        render.countryList(countries, listContainer);

    }).catch((error) => {
        console.error(error);
        renderMessage(listContainer, "Ha ocurrido un error al cargar los países");
    });

    searchInput.addEventListener("input", () => {
        applyFiltersAndRender(listContainer, searchInput, regionSelect);
    });

    regionSelect.addEventListener("change", () => {
        applyFiltersAndRender(listContainer, searchInput, regionSelect);
    });

    listContainer.addEventListener("click", async (event) => {
        const li = event.target.closest(".country-item");

        if (!li) return;


        const code = li.dataset.code;

        if (!code) return;

        showLoading(detailContainer);

        try {
            const country = await fetchCountryByCode(code);

            renderCountrydetail(country, detailContainer);

        } catch (error) {
            console.error(error);
            renderMessage(detailContainer, " no se ha podido cargar la ficha del país");
        }
    });

    document.addEventListener("DOMContentLoaded", initApp);

}

