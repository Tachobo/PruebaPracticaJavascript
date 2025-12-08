/* Se importa la librería prompt-sync para poder solicitar datos al usuario por consola,
esto se hace así porque Node.js no permite capturar entradas de forma directa */
import promptSync from 'prompt-sync';
const prompt = promptSync();

/* Se importa la función validar desde el módulo de asistencia, esta función será
la encargada de comprobar si un nombre se encuentra dentro de la lista de aprendices */
import { validar } from '../modulos/asistencia/index.js';

/* Función principal que se exporta para ser usada desde el archivo app.js en el menu,
esta función controla todo el flujo del programa, pide los datos al usuario,
los almacena y finalmente llama a la función que valida la asistencia */
export function ejecutarEjercicio1() {
    console.log("\nValidación Asistencia\n");

    // Se pide la cantidad de aprendices y se convierte a entero porque el prompt devuelve texto
    let cantidad = parseInt(prompt("Ingrese la cantidad de aprendices: "));

    // Se crea un arreglo vacío para guardar los nombres de los aprendices
    const aprendices = [];

    /* Se usa un ciclo for para pedir los nombres de los aprendices uno por uno,
    este diseño permite repetir el proceso según la cantidad indicada por el usuario */
    for (let i = 0; i < cantidad; i++) {
        let aprendiz = prompt("Ingrese el nombre del estudiante: ");
        aprendices.push(aprendiz);
    }

    // Se solicita el nombre que se desea buscar dentro de la lista
    let nombre = prompt("Ingrese el nombre a evaluar: ");

    /* Se llama a la función validar, está función recibe como argumentos el arreglo aprendices
    y el nombre que se desea buscar*/
    validar(aprendices, nombre);
}
