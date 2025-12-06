import promptSync from 'prompt-sync';
const prompt = promptSync();

import { ejecutarEjercicio1 } from './ejercicios/ejercicio1.js';
import { ejecutarEjercicio2 } from './ejercicios/ejercicio2.js';
import { ejecutarEjercicio3 } from './ejercicios/ejercicio3.js';
import { ejecutarEjercicio4 } from './ejercicios/ejercicio4.js';
import { ejecutarEjercicio5 } from './ejercicios/ejercicio5.js';
import { ejecutarEjercicio6 } from './ejercicios/ejercicio6.js';
import { ejecutarEjercicio7 } from './ejercicios/ejercicio7.js';
import { ejecutarEjercicio8 } from './ejercicios/ejercicio8.js';
import { ejecutarEjercicio9 } from './ejercicios/ejercicio9.js';
import { ejecutarEjercicio10 } from './ejercicios/ejercicio10.js';
import { ejecutarEjercicio11 } from './ejercicios/ejercicio11.js';
import { ejecutarEjercicio12 } from './ejercicios/ejercicio12.js';
import { ejecutarEjercicio13 } from './ejercicios/ejercicio13.js';
import { ejecutarEjercicio14 } from './ejercicios/ejercicio14.js';
import { ejecutarEjercicio15 } from './ejercicios/ejercicio15.js';
import { ejecutarEjercicio16 } from './ejercicios/ejercicio16.js';
import { ejecutarEjercicio17 } from './ejercicios/ejercicio17.js';

console.log("\nMENÚ DE EJERCICIOS\n");
console.log(" 1. Validación Asistencia");
console.log(" 2. Inventario");
console.log(" 3. Promedio");
console.log(" 4. Orden productos");
console.log(" 5. Validacion usuario");
console.log(" 6. Nomina");
console.log(" 7. Registro dinamico productos");
console.log(" 8. Catalogo");
console.log(" 9. Procesamiento de pagos");
console.log("10. Fusion de usuarios");
console.log("11. Resumen de mensaje");
console.log("12. Gestion de pacientes");
console.log("13. Control de gastos");
console.log("14. Evaluación de proyectos");
console.log("15. Sistema inteligente cursos");
console.log("16. Sistema de alerta");
console.log("17. Sistema control inventarios");
console.log()
let opcion = parseInt(prompt("Seleccione el número del ejercicio a ejecutar: "));
console.log()
switch (opcion) {
    case 1:
        console.clear()
        ejecutarEjercicio1();
        break;
    case 2:
        console.clear()
        ejecutarEjercicio2();
        break;
    case 3:
        console.clear()
        ejecutarEjercicio3();
        break;
    case 4:
        console.clear()
        ejecutarEjercicio4();
        break;
    case 5:
        console.clear()
        ejecutarEjercicio5();
        break;
    case 6:
        console.clear()
        ejecutarEjercicio6();
        break;
    case 7:
        console.clear()
        ejecutarEjercicio7();
        break;
    case 8:
        console.clear()
        ejecutarEjercicio8();
        break;
    case 9:
        console.clear()
        ejecutarEjercicio9();
        break;
    case 10:
        console.clear()
        ejecutarEjercicio10();
        break;
    case 11:
        console.clear()
        ejecutarEjercicio11();
        break;
    case 12:
        console.clear()
        ejecutarEjercicio12();
        break;
    case 13:
        console.clear()
        ejecutarEjercicio13();
        break;
    case 14:
        console.clear()
        ejecutarEjercicio14();
        break;
    case 15:
        console.clear()
        ejecutarEjercicio15();
        break;
    case 16:
        console.clear()
        ejecutarEjercicio16();
        break;
    case 17:
        console.clear()
        ejecutarEjercicio17();
        break;
    default:
        console.log("Opción no válida");
}