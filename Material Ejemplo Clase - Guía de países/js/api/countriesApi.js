"use strict";

const BASE_URL = "https://restcountries.com/v3.1";

//Obtenemos todos los países
export async function fetchAllCountries(){
    const response = await fetch(`${BASE_URL}/all?fields=name,cca3,flags,region,capital,population,languages`);

    if (!response.ok){
        throw new Error("No se han podido cargar los países");
    }

    //Como lo quiero en json en lugar de en formato httpResponse:
    const data = await response.json();

    //Para ordenar alfabéticamente la respuesta
    //localCompare compara de acuerdo al alfabeto local, no al ASCII
    return data.sort((a,b) => a.name.common.localeCompare(b.name.common));
}

export async function fetchCountryByCode(cca3){
    const response = await fectch(`${BASE_URL}/alpha/${cca3}?fields=name,cca3,flags,region,subregion,capital,population,languages,area,timezones`);

    if(!response.ok) {
        throw new Error("No se ha podido cargar la información del país");
    }

    const data = await response.json();

    return Array.isArray(data) ? data[0] : data;
}