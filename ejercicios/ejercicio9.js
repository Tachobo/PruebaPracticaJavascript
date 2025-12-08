// Se importa la librería prompt-sync para poder pedir datos al usuario
import promptSync from 'prompt-sync';
const prompt = promptSync();

// Se importa la función procesarPagos desde el módulo de procesamiento
import { procesarPagos } from '../modulos/procesamiento/index.js';

/* Función principal que se exporta para ser usada desde app.js, se encarga de
registrar los pagos, crear la regla de validación y mostrar los resultados */
export function ejecutarEjercicio9() {
    console.log("\nRegistro de pagos\n");

    /* Se pide cuántos pagos se van a registrar y se guarda el valor para
    controlar cuántas veces se repite el ciclo */
    let cantidad = parseInt(prompt("¿Cuántos pagos desea registrar?: "));

    // Se crea un arreglo vacío donde se guardarán los pagos
    let pagos = [];

    /* Se usa un ciclo for para pedir los datos de cada pago, se solicita el id,
    el monto y el método de pago, y luego se guardan en un objeto dentro del arreglo */
    for (let i = 1; i <= cantidad; i++) {
        console.log(`\nPago ${i}:`);
        let id = prompt("ID del pago: ");
        let monto = parseFloat(prompt("Monto del pago: "));
        let metodo = prompt("Método de pago (tarjeta, efectivo): ");
        pagos.push({ id, monto, metodo });
    }

    /* Se muestran las opciones de reglas para que el usuario elija cómo se van a
    aprobar los pagos */
    console.log("\nDefina la regla de aprobación\n");
    console.log("1. Aprobar por monto mínimo");
    console.log("2. Aprobar solo pagos con tarjeta");
    console.log("3. Aprobar solo pagos con efectivo");
    console.log("4. Aprobar por coincidencia en ID\n");

    // Se pide la opción de la regla
    let opcion = parseInt(prompt("Seleccione la regla (1-4): "));

    // Se declara una variable que almacenará la función callback
    let callback;

    /* Según la opción elegida, se crea una función callback diferente, esta función
    recibe un pago y devuelve true o false, y su responsabilidad es decidir si ese
    pago debe ser aprobado o rechazado */
    if (opcion === 1) {
        let minimo = parseFloat(prompt("Ingrese el monto mínimo: "));
        callback = pago => pago.monto >= minimo;
    } else if (opcion === 2) {
        callback = pago => pago.metodo.toLowerCase() === "tarjeta";
    } else if (opcion === 3) {
        callback = pago => pago.metodo.toLowerCase() === "efectivo";
    } else if (opcion === 4) {
        let idBuscado = prompt("Ingrese el ID a aprobar: ");
        callback = pago => pago.id === idBuscado;
    } else {
        console.log("Regla no válida. Se rechazarán todos.");
        callback = () => false;
    }

    /* Se llama a la función procesarPagos, enviándole el arreglo de pagos y el
    callback, esta función se encarga de recorrer los pagos, aplicar la regla y
    devolver una nueva lista con el estado de cada pago */
    let resultado = procesarPagos(pagos, callback);

    // Se muestran en consola los pagos aprobados y rechazados usando filter
    console.log("\nResultados de validación\n");
    console.log("Pagos aprobados:", resultado.filter(p => p.estado === "Aprobado"));
    console.log("Pagos rechazados:", resultado.filter(p => p.estado === "Rechazado"));
}
