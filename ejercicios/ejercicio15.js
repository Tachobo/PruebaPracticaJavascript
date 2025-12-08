// Se importa la librería prompt-sync para poder pedir datos al usuario por consola
import promptSync from 'prompt-sync';
const prompt = promptSync();

// Se importa la función generarRecomendaciones desde el módulo sistema
import { generarRecomendaciones } from '../modulos/sistema/index.js';

/* Función principal que se exporta para ser usada desde app.js, se encarga de
registrar los cursos del usuario y generar recomendaciones usando una regla */
export function ejecutarEjercicio15() {
    console.log("\nSistema inteligente de recomendación de cursos\n");

    /* Se pide la cantidad de cursos que el usuario ha completado y se guarda en una
    variable para controlar cuántas veces se repetirá el ciclo */
    let cantidad = parseInt(prompt("¿Cuántos cursos completados desea registrar?: "));
    let cursos = [];

    /* Se usa un ciclo for para pedir los datos de cada curso, se captura el nombre,
    la calificación, las horas, los intentos y si fue finalizado, y se guarda todo
    en un objeto dentro del arreglo */
    for (let i = 1; i <= cantidad; i++) {
        console.log(`\nCurso ${i}:`);
        let nombre = prompt("Nombre del curso: ");
        let calificacion = parseFloat(prompt("Calificación final (0-5): "));
        let horas = parseInt(prompt("Horas dedicadas: "));
        let intentos = parseInt(prompt("Número de intentos: "));
        let finalizado = prompt("¿Está finalizado? (si/no): ").toLowerCase() === "si";

        cursos.push({ nombre, calificacion, horas, intentos, finalizado });
    }

    /* Se crea una función que se usará como callback, esta función recibe un curso
    y devuelve un número que representa la prioridad de recomendación, su trabajo
    es decidir si un curso debe recomendarse o no */
    const criterioRecomendacion = (curso) => {
        if (curso.calificacion < 3) return 3;
        if (!curso.finalizado) return 2;
        if (curso.horas < 10 && curso.calificacion >= 4) return 1;
        return 0;
    };

    /* Se llama a la función generarRecomendaciones enviándole el arreglo de cursos
    y el callback, esta función se encarga de aplicar el criterio a cada curso y
    devolver una lista con las recomendaciones finales */
    const recomendaciones = generarRecomendaciones(cursos, criterioRecomendacion);

    // Se muestran los resultados en consola
    console.log("\nRecomendaciones de cursos");

    /* Se valida si la lista de recomendaciones está vacía, si no hay elementos se
    muestra un mensaje indicando que no hay cursos recomendados */
    if (recomendaciones.length === 0) {
        console.log("No hay cursos recomendados según el criterio definido.");
    } else {
        /* Se usa forEach para recorrer las recomendaciones una por una y mostrar
        toda la información en consola */
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
