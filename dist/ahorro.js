"use strict";
const inputIngresos = document.getElementById("salario");
const divResultado = document.getElementById("resultado");
const pNecesidades = document.getElementById("calculadora-necesidades-texto");
const pCaprichos = document.getElementById("calculadora-caprichos-texto");
const pAhorros = document.getElementById("calculadora-ahorros-texto");
const checkboxTiempo = document.getElementById("checkbox-calculadora");
let calculoAnual = false;
inputIngresos.addEventListener("input", calcuarDatos);
checkboxTiempo.addEventListener("change", (event) => {
    calculoAnual = event.target.checked;
    calcuarDatos();
});
function calcuarDatos() {
    const ingresos = Number(inputIngresos.value);
    if (ingresos > 0 && calculoAnual === false) {
        pNecesidades.textContent = `${formatearDinero(ingresos * 0.50)} €`;
        pCaprichos.textContent = `${formatearDinero(ingresos * 0.30)} €`;
        pAhorros.textContent = `${formatearDinero(ingresos * 0.20)} €`;
    }
    else if (ingresos > 0 && calculoAnual === true) {
        pNecesidades.textContent = `${formatearDinero(ingresos * 0.50 * 12)} €`;
        pCaprichos.textContent = `${formatearDinero(ingresos * 0.30 * 12)} €`;
        pAhorros.textContent = `${formatearDinero(ingresos * 0.20 * 12)} €`;
    }
    else {
        pNecesidades.textContent = `0 €`;
        pCaprichos.textContent = `0 €`;
        pAhorros.textContent = `0 €`;
    }
}
function formatearDinero(valor) {
    return new Intl.NumberFormat("es-ES", {
        minimumFractionDigits: 0,
        maximumFractionDigits: 2,
    }).format(valor);
}
