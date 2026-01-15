"use strict";

/**
 * Pinta la lista de ideas.
 * @param {HTMLElement} listEl ul donde pintar
 * @param {Array} ideas array de ideas
 */
export const renderIdeas = (listEl, ideas) => {
  listEl.innerHTML = "";

  if (!ideas || ideas.length === 0) {
    listEl.innerHTML = "<li class='item'>No hay ideas todavía.</li>";
    return;
  }

  ideas.forEach((idea) => {
    const li = document.createElement("li");
    li.className = "item";

    const dateText = idea.createdAt?.toDate
      ? idea.createdAt.toDate().toLocaleString()
      : "sin fecha (aún)";

    li.innerHTML = `
      <span>${escapeHtml(idea.text)}</span>
      <span class="small">${dateText}</span>
    `;

    listEl.appendChild(li);
  });
};

/**
 * Muestra un mensaje y lo borra solo.
 */
export const flashMessage = (msgEl, text, ms = 1500) => {
  msgEl.textContent = text;
  if (!text) return;
  setTimeout(() => (msgEl.textContent = ""), ms);
};

function escapeHtml(text) {
  return String(text)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}
