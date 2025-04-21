interface MiembroEquipo {
  name: string;
  role: string;
  image: string;
}

interface Departamento {
  name: string;
  members: MiembroEquipo[];
}

interface DatosEquipo {
  [departamentoNombre: string]: Departamento;
}

async function obtenerDatosEquipo(): Promise<DatosEquipo> {
  const respuesta = await fetch("../assets/data/team.json");

  if (!respuesta.ok) {
    console.error(`Error: ${respuesta.status}`);
    return {} as DatosEquipo;
  }

  const equipo: DatosEquipo = await respuesta.json();
  return equipo;
}


async function pintarDatosEquipo() {
  const datos: DatosEquipo = await obtenerDatosEquipo();

  const divEquipo = document.getElementById(
    "equipo-conocenos"
  ) as HTMLDivElement;
  divEquipo.innerHTML = ""; // Limpiar el contenido previo

  Object.values(datos).forEach((departamento: Departamento) => {
    const miembrosHTML = departamento.members
      .map(
        (miembro: MiembroEquipo) => `
      <div class="departamento-conocenos-miembro grid-child">
        <img src="${miembro.image}" alt="${miembro.name}" />
        <h3><strong>${miembro.name.toUpperCase()}</strong></h3>
        <p>${miembro.role}</p>
      </div>
    `
      )
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