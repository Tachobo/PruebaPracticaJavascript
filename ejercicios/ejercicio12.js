import promptSync from 'prompt-sync';
const prompt = promptSync();
import { seleccionarPaciente } from '../modulos/paciente/index.js';

export function ejecutarEjercicio12() {
    console.log("\nGestión de pacientes por prioridad\n");

    let cantidad = parseInt(prompt("¿Cuántos pacientes desea registrar?: "));
    let pacientes = [];

    for (let i = 1; i <= cantidad; i++) {
        console.log(`\nPaciente ${i}:`);
        let nombre = prompt("Nombre: ");
        let edad = parseInt(prompt("Edad: "));
        let prioridad = parseInt(prompt("Prioridad (número, entre mayor sea el numero más urgente): "));
        pacientes.push({ nombre, edad, prioridad });
    }

    const seleccionado = seleccionarPaciente(pacientes);

    console.log("\nPaciente seleccionado");
    if (seleccionado) {
        console.log(`Nombre: ${seleccionado.nombre}`);
        console.log(`Edad: ${seleccionado.edad}`);
        console.log(`Prioridad: ${seleccionado.prioridad}`);
    } else {
        console.log("No hay pacientes registrados.");
    }
}

