import config from "./config.js";
let arrayStock = [];
const nombresStock = ["AAPL", "MSFT"];
const API_KEY = config.API_KEY;
const globalUrl = "https://financialdata.net/api/v1/";
const boton = document.getElementById("boton");
async function datosStock(simboloStock) {
    const urlOriginal = `${globalUrl}stock-prices?key=${API_KEY}&identifier=${simboloStock}`;
    const urlConProxy = `https://api.allorigins.win/get?url=${encodeURIComponent(urlOriginal)}`;
    try {
        const respuesta = await fetch(urlConProxy);
        if (!respuesta.ok) {
            console.error(`Error: ${respuesta.status}`);
        }
        const dataProxy = await respuesta.json();
        console.log("Data proxy:", dataProxy);
        const objetoDatos = JSON.parse(dataProxy.contents);
        console.log("Objeto datos:", objetoDatos);
        return objetoDatos[0];
    }
    catch (error) {
        if (error instanceof Error) {
            console.error(`Error al llamar la API para ${simboloStock}: ${error.message}`);
        }
        else {
            console.error(`Error al llamar la API para ${simboloStock}`);
        }
        return null;
    }
}
async function obtenerDatos() {
    const promesas = nombresStock.map((simbolo) => datosStock(simbolo));
    arrayStock = await Promise.all(promesas);
    return arrayStock;
}
async function pintarDatos() {
    document.querySelectorAll(".contenido").innerHTML = "Cargando...";

    const datos = await obtenerDatos();
    console.log(datos);
    datos.forEach((element) => {
        if (!element) {
            console.warn("No se encontraron datos para uno de los símbolos.");
            return;
        }
        const contenido = document.querySelector(`#${element.trading_symbol} .contenido`);
        if (contenido) {
            contenido.innerHTML = `
        <ul>
          <li>Fecha: ${element.date}</li>
          <li>Apertura: $${element.open}</li>
          <li>Cierre: $${element.close}</li>
          <li>Máxima: $${element.high}</li>
          <li>Mínima: $${element.low}</li>
          <li>Volumen total: $${element.volume}</li>
        </ul>
      `;
        }
        else {
            console.warn(`No se encontró el elemento para ${element.trading_symbol}`);
        }
    });
}
boton.addEventListener("click", () => {
    pintarDatos();
    boton.disabled = true;
});
