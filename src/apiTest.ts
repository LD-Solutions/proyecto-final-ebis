import config from "./config.js";

// Define la interfaz para los datos del stock
interface StockData {
  trading_symbol: string;
  date: string;
  open: number;
  close: number;
  high: number;
  low: number;
  volume: number;
}

let arrayStock: (StockData | null)[] = [];
const nombresStock: string[] = ["AAPL", "MSFT"];
const API_KEY: string = config.API_KEY;
const globalUrl: string = "https://financialdata.net/api/v1/";
const boton = document.getElementById("boton") as HTMLButtonElement;

// Obtiene los últimos datos financieros de un STOCK en concreto del último día disponible
async function datosStock(simboloStock: string): Promise<StockData | null> {
  const urlOriginal: string = `${globalUrl}stock-prices?key=${API_KEY}&identifier=${simboloStock}`;
  const urlConProxy: string = `https://api.allorigins.win/get?url=${encodeURIComponent(
    urlOriginal
  )}`;

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

  } catch (error) {
    if (error instanceof Error) {
      console.error(
        `Error al llamar la API para ${simboloStock}: ${error.message}`
      );
    } else {
      console.error(`Error al llamar la API para ${simboloStock}`);
    }
    return null;
  }
}

// Devuelve todos los datos de todos los stocks a analizar en un solo array
async function obtenerDatos(): Promise<(StockData | null)[]> {
  const promesas = nombresStock.map((simbolo) => datosStock(simbolo));
  arrayStock = await Promise.all(promesas);
  return arrayStock;
}

// pinta los datos en los divs del html con los datos del array obtenido en obtenerDatos()
async function pintarDatos(): Promise<void> {
  const datos = await obtenerDatos();

  console.log(datos);

  datos.forEach((element) => {
    if (!element) {
      console.warn("No se encontraron datos para uno de los símbolos.");
      return;
    }

    const contenido = document.querySelector(
      `#${element.trading_symbol} .contenido`
    ) as HTMLElement | null;

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
    } else {
      console.warn(`No se encontró el elemento para ${element.trading_symbol}`);
    }
  });
}

boton.addEventListener("click", () => {
  pintarDatos();
});