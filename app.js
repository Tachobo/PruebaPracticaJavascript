import promptSync from 'prompt-sync';
const prompt = promptSync();

import { ejecutarEjercicio1 } from './ejercicios/ejercicio1.js';
import { ejecutarEjercicio2 } from './ejercicios/ejercicio2.js';
import { ejecutarEjercicio3 } from './ejercicios/ejercicio3.js';
import { ejecutarEjercicio4 } from './ejercicios/ejercicio4.js';
import { ejecutarEjercicio5 } from './ejercicios/ejercicio5.js';
import { ejecutarEjercicio6 } from './ejercicios/ejercicio6.js';


console.clear()
console.log("\nMENÚ DE EJERCICIOS\n");
console.log("1. Validación Asistencia");
console.log("2. Inventario");
console.log("3. Promedio");
console.log("4. Orden productos");
console.log("5. Validacion usuario");
console.log("6. Nomina");
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
    case 3:
        ejecutarEjercicio3();
        break;
    case 4:
        ejecutarEjercicio4();
        break;
    case 5:
        ejecutarEjercicio5();
        break;
    case 6:
        ejecutarEjercicio6();
        break;
    default:
        console.log("Opción no válida");
}