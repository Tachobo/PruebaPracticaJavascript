// Se importa la librería prompt-sync para poder pedir datos por consola
import promptSync from 'prompt-sync';
const prompt = promptSync();

// Se importa la función seleccionarPaciente desde el módulo paciente
import { seleccionarPaciente } from '../modulos/paciente/index.js';

/* Función principal que se exporta para ser usada desde app.js, se encarga
de registrar los pacientes y seleccionar al que tenga mayor prioridad */
export function ejecutarEjercicio12() {
    console.log("\nGestión de pacientes por prioridad\n");

    /* Se pide la cantidad de pacientes que se van a registrar y se guarda en
    una variable para controlar cuántas veces se repetirá el ciclo */
    let cantidad = parseInt(prompt("¿Cuántos pacientes desea registrar?: "));

    // Se crea un arreglo vacío donde se guardarán los pacientes
    let pacientes = [];

    /* Se usa un ciclo for para pedir los datos de cada paciente, se solicita el
    nombre, la edad y la prioridad, y todo se guarda en un objeto dentro del arreglo */
    for (let i = 1; i <= cantidad; i++) {
        console.log(`\nPaciente ${i}:`);
        let nombre = prompt("Nombre: ");
        let edad = parseInt(prompt("Edad: "));
        let prioridad = parseInt(prompt("Prioridad (número, entre mayor sea el numero más urgente): "));
        pacientes.push({ nombre, edad, prioridad });
    }

    /* Se llama a la función seleccionarPaciente, se le envía el arreglo de pacientes
    y esta función se encarga de buscar al paciente con la mayor prioridad */
    const seleccionado = seleccionarPaciente(pacientes);

    // Se muestran los datos del paciente seleccionado
    console.log("\nPaciente seleccionado");
    if (seleccionado) {
        console.log(`Nombre: ${seleccionado.nombre}`);
        console.log(`Edad: ${seleccionado.edad}`);
        console.log(`Prioridad: ${seleccionado.prioridad}`);
    } else {
        console.log("No hay pacientes registrados.");
    }
}
