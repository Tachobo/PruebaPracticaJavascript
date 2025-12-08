// Se importa la librería prompt-sync para poder pedir datos por consola
import promptSync from 'prompt-sync';
const prompt = promptSync();

// Se importa la función generarInforme desde el módulo de evaluación
import { generarInforme } from '../modulos/evaluacionPro/index.js';

/* Función principal que se exporta para ser usada desde app.js, se encarga
de registrar los proyectos y generar un informe según reglas definidas */
export function ejecutarEjercicio14() {
    console.log("\nEvaluación de proyectos colaborativos\n");

    /* Se pide la cantidad de proyectos y se crea un arreglo vacío para guardarlos */
    let cantidad = parseInt(prompt("¿Cuántos proyectos desea registrar?: "));
    let proyectos = [];

    /* Ciclo que se repite según la cantidad de proyectos para pedir los datos
    de cada uno */
    for (let i = 1; i <= cantidad; i++) {
        console.log(`\nProyecto ${i}:\n`);
        let nombre = prompt("Nombre del proyecto: ");

        /* Se pregunta si el proyecto está activo y se convierte la respuesta
        a true o false comparando con la palabra "si" */
        let activo = prompt("¿Está activo? (si/no): ").toLowerCase() === "si";

        let numParticipantes = parseInt(prompt("Número de participantes: "));
        let participantes = [];

        /* Se usa un ciclo interno para registrar los nombres de los participantes */
        for (let j = 1; j <= numParticipantes; j++) {
            console.log();
            participantes.push(prompt(`Nombre del participante ${j}: `));
        }

        let duracionMeses = parseInt(prompt("Duración del proyecto en meses: "));
        let numEntregables = parseInt(prompt("Número de entregables: "));
        let entregables = [];

        /* Se usa otro ciclo para registrar los nombres de los entregables */
        for (let k = 1; k <= numEntregables; k++) {
            console.log();
            entregables.push(prompt(`Nombre del entregable ${k}: `));
        }

        // Se guarda toda la información de cada proyecto en el arreglo
        proyectos.push({ nombre, activo, participantes, duracionMeses, entregables });
    }

    /* Se define una función que será usada como callback para evaluar cada proyecto,
    esta función recibe un proyecto y devuelve un texto indicando el estado del mismo,
    su responsabilidad es aplicar las reglas de evaluación que estan en los if, si
    alguna de esas reglas se cumple, retornara un mensaje correspondiente, a dicha
    regla cumplida, ejemplo, si la duración es mayor a 6 meses, retornara que necesita un
    refuerzo porque la duración es excesiva */
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

    /* Se llama a la función generarInforme y se le envía el arreglo de proyectos
    junto con el callback, esta función se encarga de aplicar la regla a cada proyecto
    y devolver un nuevo arreglo con la información evaluada */
    const informe = generarInforme(proyectos, reglaEvaluacion);

    /* Se recorren los resultados usando forEach para mostrar la información de cada
    proyecto ya evaluado */
    console.log("\nInforme de proyectos activos\n");
    informe.forEach(p => {
        console.log(`Proyecto: ${p.nombre}`);
        console.log(`Participantes: ${p.participantes}`);
        console.log(`Estado: ${p.estado}\n`);
    });
}
