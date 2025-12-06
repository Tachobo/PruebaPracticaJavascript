import promptSync from 'prompt-sync';
const prompt = promptSync();

import { ejecutarEjercicio1 } from './ejercicios/ejercicio1.js';
import { ejecutarEjercicio2 } from './ejercicios/ejercicio2.js';

console.clear()
console.log("\nMENÚ DE EJERCICIOS\n");
console.log("1. Validación Asistencia");
console.log("2. Inventario");
console.log()
let opcion = parseInt(prompt("Seleccione el número del ejercicio a ejecutar: "));
console.log()
switch (opcion) {
    case 1:
        ejecutarEjercicio1();
        break;
    case 2:
        ejecutarEjercicio2();
        break;
    default:
        console.log("Opción no válida");
}