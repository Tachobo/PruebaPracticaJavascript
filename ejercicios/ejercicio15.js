import promptSync from 'prompt-sync';
const prompt = promptSync();
import { generarRecomendaciones } from '../modulos/sistema/index.js';

export function ejecutarEjercicio15() {
    console.log("\nSistema inteligente de recomendación de cursos\n");

    let cantidad = parseInt(prompt("¿Cuántos cursos completados desea registrar?: "));
    let cursos = [];

    for (let i = 1; i <= cantidad; i++) {
        console.log(`\nCurso ${i}:`);
        let nombre = prompt("Nombre del curso: ");
        let calificacion = parseFloat(prompt("Calificación final (0-5): "));
        let horas = parseInt(prompt("Horas dedicadas: "));
        let intentos = parseInt(prompt("Número de intentos: "));
        let finalizado = prompt("¿Está finalizado? (si/no): ").toLowerCase() === "si";

        cursos.push({ nombre, calificacion, horas, intentos, finalizado });
    }

    // Callback de recomendación (ejemplo: refuerzo si nota baja, o curso no finalizado)
    const criterioRecomendacion = (curso) => {
        if (curso.calificacion < 3) return 3; // prioridad alta
        if (!curso.finalizado) return 2;      // prioridad media
        if (curso.horas < 10 && curso.calificacion >= 4) return 1; // prioridad baja
        return 0; // no recomendado
    };

    const recomendaciones = generarRecomendaciones(cursos, criterioRecomendacion);

    console.log("\nRecomendaciones de cursos");
    if (recomendaciones.length === 0) {
        console.log("No hay cursos recomendados según el criterio definido.");
    } else {
        recomendaciones.forEach(c => {
            console.log(`Curso: ${c.nombre}`);
            console.log(`Calificación: ${c.calificacion}`);
            console.log(`Horas: ${c.horas}`);
            console.log(`Intentos: ${c.intentos}`);
            console.log(`Finalizado: ${c.finalizado ? "Sí" : "No"}`);
            console.log(`Prioridad: ${c.prioridad}`);
            console.log(`Motivo: ${c.motivo}\n`);
        });
    }
}
