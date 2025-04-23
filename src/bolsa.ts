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
const nombresStock: string[] = ["AAPL", "MSFT", "NFLX", "AMZN"];
const API_KEY: string = config.API_KEY;
const globalUrl: string = "https://financialdata.net/api/v1/";

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

    const objetoDatos = JSON.parse(dataProxy.contents);

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

  datos.forEach((element, index) => {
    const simbolo = nombresStock[index];

    const contenido = document.querySelector(
      `#${simbolo} .contenido-carta-bolsa`
    ) as HTMLElement | null;

    if (!contenido) {
      console.error(`No se encontró el contenedor para ${simbolo}`);
      return;
    }

    if (!element) {
      contenido.innerHTML = `
      <p>Ha ocurrido un error al cargar los datos de ${simbolo}. Intenta recargando la página.</p>
    `;
      return;
    }

    const fechaDatos = new Date(element.date);
    const variacion = ((element.close - element.open) / element.open) * 100;
    // si la variacion en porcentaje diaria es mayor a 0, se pone un signo + delante
    const variacionFormateada = `${variacion > 0 ? "+" : ""}${variacion.toFixed(
      2
    )}%`;

    const resultadoDia = document.querySelector(
      `#${simbolo} .resultado-dia-bolsa`
    ) as HTMLElement;

    resultadoDia.style.backgroundColor = `${
        variacion > 0 ? "green" : variacion < 0 ? "red" : "black"
      }`;

    resultadoDia.innerHTML = `<p><strong>${variacionFormateada}</strong><p>`;

    contenido.innerHTML = `
    <ul>
      <li class="bullet-bolsa-fecha"><strong>Fecha último dato:</strong> ${fechaDatos.toLocaleDateString(
        "es-ES",
        { year: "numeric", month: "short", day: "numeric" }
      )}</li>
      <li class="bullet-bolsa-apertura"><strong>Apertura:</strong> $${formatearDinero(
        element.open
      )}</li>
      <li class="bullet-bolsa-cierre"><strong>Cierre:</strong> $${formatearDinero(
        element.close
      )}</li>
      <li class="bullet-bolsa-maxima"><strong>Máxima:</strong> $${formatearDinero(
        element.high
      )}</li>
      <li class="bullet-bolsa-minima"><strong>Mínima:</strong> $${formatearDinero(
        element.low
      )}</li>
      <li class="bullet-bolsa-volumen"><strong>Volumen total:</strong> $${formatearDinero(
        element.volume
      )}</li>
    </ul>
  `;
  });
}

function formatearDinero(valor: number): string {
  return new Intl.NumberFormat("es-ES", {
    minimumFractionDigits: 0,
    maximumFractionDigits: 2,
  }).format(valor);
}

document.addEventListener("DOMContentLoaded", () => {
  pintarDatos();
});
