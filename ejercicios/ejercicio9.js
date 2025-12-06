import promptSync from 'prompt-sync';
const prompt = promptSync();
import { procesarPagos } from '../modulos/procesamiento/index.js';

export function ejecutarEjercicio9() {
    console.log("\nRegistro de pagos\n");

    let cantidad = parseInt(prompt("¿Cuántos pagos desea registrar?: "));
    let pagos = [];

    for (let i = 1; i <= cantidad; i++) {
        console.log(`\nPago ${i}:`);
        let id = prompt("ID del pago: ");
        let monto = parseFloat(prompt("Monto del pago: "));
        let metodo = prompt("Método de pago (tarjeta, efectivo): ");
        pagos.push({ id, monto, metodo });
    }

    console.log("\nDefina la regla de aprobación\n");
    console.log("1. Aprobar por monto mínimo");
    console.log("2. Aprobar solo pagos con tarjeta");
    console.log("3. Aprobar solo pagos con efectivo");
    console.log("4. Aprobar por coincidencia en ID\n");

    let opcion = parseInt(prompt("Seleccione la regla (1-4): "));
    let callback;

    if (opcion === 1) {
        let minimo = parseFloat(prompt("Ingrese el monto mínimo: "));
        callback = pago => pago.monto >= minimo;
    } else if (opcion === 2) {
        callback = pago => pago.metodo.toLowerCase() === "tarjeta";
    }else if (opcion === 3) {
        callback = pago => pago.metodo.toLowerCase() === "efectivo";
    } else if (opcion === 4) {
        let idBuscado = prompt("Ingrese el ID a aprobar: ");
        callback = pago => pago.id === idBuscado;
    } else {
        console.log("Regla no válida. Se rechazarán todos.");
        callback = () => false;
    }

    let resultado = procesarPagos(pagos, callback);

    console.log("\nResultados de validación\n");
    console.log("Pagos aprobados:", resultado.filter(p => p.estado === "Aprobado"));
    console.log("Pagos rechazados:", resultado.filter(p => p.estado === "Rechazado"));
}
