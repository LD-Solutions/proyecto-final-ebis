"use strict";
async function obtenerDatosEquipo() {
    const respuesta = await fetch("../assets/data/team.json");
    if (!respuesta.ok) {
        console.error(`Error: ${respuesta.status}`);
        return {};
    }
    const equipo = await respuesta.json();
    return equipo;
}
async function pintarDatosEquipo() {
    const datos = await obtenerDatosEquipo();
    const divEquipo = document.getElementById("equipo-conocenos");
    divEquipo.innerHTML = "";
    Object.values(datos).forEach((departamento) => {
        const miembrosHTML = departamento.members
            .map((miembro) => `
      <div class="departamento-conocenos-miembro grid-child">
        <img src="${miembro.image}" alt="${miembro.name}" />
        <h3><strong>${miembro.name.toUpperCase()}</strong></h3>
        <p>${miembro.role}</p>
      </div>
    `)
            .join("");
        divEquipo.innerHTML += `
      <div class="departamento-conocenos">
        <h2>${departamento.name}</h2>
        <div class="departamento-conocenos-miembros grid-parent">
          ${miembrosHTML}
        </div>
      </div>
    `;
    });
}
document.addEventListener("DOMContentLoaded", () => {
    pintarDatosEquipo();
});
