"use strict";

import { addIdea, listenIdeas } from "./ideasRepo.js";
import { renderIdeas, flashMessage } from "./ui.js";

window.onload = () => {
  const form = document.getElementById("ideaForm");
  const input = document.getElementById("ideaInput");
  const list = document.getElementById("list");
  const msg = document.getElementById("msg");

  // 1) Activar listener en tiempo real
  // Cada vez que haya cambios en Firestore se repinta la lista

  const unsuscribe = listenIdeas((ideas) => {
    renderIdeas(list, ideas);
  });



  // 2) Evento submit del formulario: añadir idea
  form.addEventListener(
    "submit",
    async (e) => {
      e.preventDefault();

      const text = input.value.trim();
      if (!text) {
        flashMessage(msg, "Escribe algo primero.");
        return;
      }

      // Limpieza rápida de UI
      input.value = "";
      input.focus();
      flashMessage(msg, "Enviando...");

      //Añadir idea
      try {
        await addIdea(text);
        flashMessage(msg, "Idea añadida correctamente");

      } catch (error) {
        console.error(error);
        flashMessage(msg, `Error: ${error}`);
      }

    },
    false
  );
};
