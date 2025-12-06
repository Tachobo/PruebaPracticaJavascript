import promptSync from 'prompt-sync';
const prompt = promptSync();

import { generarInforme } from '../modulos/evaluacionPro/index.js';

export function ejecutarEjercicio14() {
    console.log("\nEvaluación de proyectos colaborativos\n");

    let cantidad = parseInt(prompt("¿Cuántos proyectos desea registrar?: "));
    let proyectos = [];

    for (let i = 1; i <= cantidad; i++) {
        console.log(`\nProyecto ${i}:\n`);
        let nombre = prompt("Nombre del proyecto: ");
        let activo = prompt("¿Está activo? (si/no): ").toLowerCase() === "si";
        let numParticipantes = parseInt(prompt("Número de participantes: "));
        let participantes = [];

    for (let j = 1; j <= numParticipantes; j++) {
        console.log();
        participantes.push(prompt(`Nombre del participante ${j}: `));
    }

    let duracionMeses = parseInt(prompt("Duración del proyecto en meses: "));
    let numEntregables = parseInt(prompt("Número de entregables: "));
    let entregables = [];

    for (let k = 1; k <= numEntregables; k++) {
        console.log();
        entregables.push(prompt(`Nombre del entregable ${k}: `));
    }

    proyectos.push({ nombre, activo, participantes, duracionMeses, entregables });
}

    // Definimos reglas de evaluación con callback
    const reglaEvaluacion = (proyecto) => {
    if (proyecto.duracionMeses > 6) {
        return "Requiere refuerzo: duración excesiva";
    }
    if (proyecto.entregables.length === 0) {
        return "Requiere refuerzo: sin entregables";
    }
    if (proyecto.participantes.length < 2) {
        return "Requiere refuerzo, pocos participantes";
    }
    return "Estable";
};

    const informe = generarInforme(proyectos, reglaEvaluacion);

    console.log("\nInforme de proyectos activos\n");
    informe.forEach(p => {
        console.log(`Proyecto: ${p.nombre}`);
        console.log(`Participantes: ${p.participantes}`);
        console.log(`Estado: ${p.estado}\n`);
    });
}
