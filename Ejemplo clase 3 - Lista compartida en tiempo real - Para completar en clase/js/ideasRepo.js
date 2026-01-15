"use strict";

import { app } from "./conexionFirebase.js";

import {
  getFirestore,      // Crea la conexión con la base de datos Firestore
  collection,        // Obtiene una referencia a una colección
  addDoc,            // Añade un documento nuevo a una colección
  onSnapshot,        // Escucha cambios en tiempo real en la base de datos
  query,             // Permite crear consultas sobre una colección
  orderBy,           // Ordena los resultados de una consulta
  serverTimestamp,   // Genera una fecha/hora en el servidor de Firebase
} from "https://www.gstatic.com/firebasejs/11.1.0/firebase-firestore.js";

// Conexión a Firestore a través de la app
const db = getFirestore(app);

// Colección donde guardamos las ideas
const ideasColección = collection(db, "ideas");

/**
 * Añade una idea nueva a Firestore.
*/

export const addIdea = async (text) => {
  await addDoc(ideasColección, {
    text,
    createdAt: serverTimestamp()
  });
}  

/**
 * Listener en tiempo real sobre la colección "ideas".
 * onChange es una función.
 * Llama a onChange con el array de ideas cada vez que haya cambios.
 * Devuelve una función "unsubscribe" para cancelar el listener si se desea.
*/

export const listenIdeas = (onChange) => {
  const q = query(ideasColección, orderBy("createdAt", "desc"));

  const unsuscribe = onSnapshot(q, (snapshot) => {
    const ideas = snapshot.docs.map((docu) => ({
      id: docu.id,
      ...docu.data(),
    }));

    onChange(ideas);
  });

  return unsuscribe;
  
}
