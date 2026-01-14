"use strict";

const localKey = "dwc_local_notes_v1";

export function seedLocalData(){
    const datos = [
        {text: "comprar pan", createdAt: Date.now()},
        {text: "Llamar al médico", createAt: Date.now() - 5000},
        {text: "Estudiar DWC", createdAt: Date.now() - 10000},
    ];

    localStorage.setItem(localKey, JSON.stringify(datos));
}

export function getLocalData(){
    const raw = localStorage.getItem(localKey);

    if (!raw) return [];

    try {
        const data = JSON.parse(raw);

        return Array.isArray(data) ? data : [];

    } catch {
        return [];
    }
}