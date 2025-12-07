// Importamos la función 'validar' desde el módulo de asistencia.
// Esta función será la encargada de verificar si un aprendiz está en la lista.
import { validar } from '../modulos/asistencia/index.js';

// Importamos la librería 'prompt-sync' para poder capturar entradas del usuario por consola.
// Se usa porque en Node.js no existe un método nativo para leer datos sincrónicamente.
import promptSync from 'prompt-sync';
const prompt = promptSync();

/*
Función principal: ejecutarEjercicio1
Responsabilidad: gestionar el flujo de validación de asistencia.
- Muestra un título en consola.
- Solicita al usuario la cantidad de aprendices.
- Registra los nombres de los aprendices en un arreglo.
- Pide un nombre específico para evaluar su asistencia.
Llama a la función 'validar' para comprobar si el aprendiz está en la lista.
*/
export function ejecutarEjercicio1() {
    console.log("\nValidación Asistencia\n");

    // Capturamos la cantidad de aprendices que se van a registrar.
    // Se convierte a número entero porque prompt devuelve texto.
    let cantidad = parseInt(prompt("Ingrese la cantidad de aprendices: "));

    // Creamos un arreglo vacío donde se almacenarán los nombres de los aprendices.
    const aprendices = [];

    // Bucle para registrar cada aprendiz según la cantidad indicada.
    // Se diseñó así porque permite capturar dinámicamente los nombres.
    for (let i = 0; i < cantidad; i++) {
        let aprendiz = prompt("Ingrese el nombre del estudiante: ");
        aprendices.push(aprendiz);
    }

    // Solicitamos el nombre del aprendiz que se desea evaluar.
    let nombre = prompt("Ingrese el nombre a evaluar: ");

    /*
    Callback: validar(aprendices, nombre)
    Parámetros:
    - aprendices: arreglo con los nombres registrados.
    - nombre: cadena con el aprendiz a verificar.
    Retorno:
    - Generalmente devuelve un mensaje o resultado indicando si el aprendiz está presente.
    Responsabilidad:
    - Encargado de comprobar si el nombre ingresado existe dentro del arreglo de aprendices.
    - Forma parte del flujo de validación de asistencia.
    */
    validar(aprendices, nombre);
}