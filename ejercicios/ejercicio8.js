// Se importa la librería prompt-sync para poder pedir datos por consola
import promptSync from 'prompt-sync';
const prompt = promptSync();

// Se importa la función buscarCursos desde el módulo catálogo
import { buscarCursos } from '../modulos/catalogo/index.js';

/* Función principal que se exporta para usarse desde app.js, se encarga de
registrar los cursos y luego buscar cursos por categoría */
export function ejecutarEjercicio8(){
    console.log("\nRegistro de cursos\n");
    console.log("\nCatalogo\n");

    /* Se pide al usuario la cantidad de cursos que desea registrar y se guarda
    en una variable para controlar el número de repeticiones */
    let cantidad = parseInt(prompt("¿Cuántos cursos desea registrar?: "));

    // Se crea un arreglo vacío donde se guardarán los cursos
    let catalogo = [];

    /* Se usa un ciclo for para pedir los datos de cada curso, se solicita el nombre,
    la categoría y la duración, y luego se guarda todo en un arreglo usando push */
    for (let i = 1; i <= cantidad; i++) {
        console.log(`\nCurso ${i}:\n`);
        let nombre = prompt("Nombre del curso: ");
        let categoria = prompt("Categoría del curso: ");
        let duracion = parseInt(prompt("Duración en horas: "));
        catalogo.push({ nombre, categoria, duracion });
    }

    console.log();

    // Se pide la categoría que el usuario desea buscar
    let categoriaBuscada = prompt("Ingrese la categoría a buscar: ");

    console.log();

    /* Se llama la función buscarCursos, a la que se le envía el catálogo completo
    y una función callback, esta función recibe cada curso y se encarga de comparar
    si la categoría del curso coincide con la categoría que ingresó el usuario,
    devuelve true o false y su responsabilidad es filtrar los cursos correctos */
    let resultado = buscarCursos(
        catalogo,
        curso => curso.categoria.toLowerCase() === categoriaBuscada.toLowerCase()
    );

    // Se muestran en consola los cursos que coincidieron con la búsqueda
    console.log(resultado);
}
