import promptSync from 'prompt-sync';
const prompt = promptSync();
import { buscarCursos } from '../modulos/catalogo/index.js';


export function ejecutarEjercicio8(){console.log("\nRegistro de cursos\n");
console.log("\nCatalogo\n");
let cantidad = parseInt(prompt("¿Cuántos cursos desea registrar?: "));
let catalogo = [];

for (let i = 1; i <= cantidad; i++) {
    console.log(`\nCurso ${i}:\n`);
    let nombre = prompt("Nombre del curso: ");
    let categoria = prompt("Categoría del curso: ");
    let duracion = parseInt(prompt("Duración en horas: "));
    catalogo.push({ nombre, categoria, duracion });
}

console.log();
let categoriaBuscada = prompt("Ingrese la categoría a buscar: ");
console.log();
let resultado = buscarCursos(catalogo, curso => curso.categoria.toLowerCase() === categoriaBuscada.toLowerCase());
console.log(resultado);}
