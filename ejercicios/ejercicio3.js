import promptSync from 'prompt-sync';
import { calcularPromedio } from '../modulos/promedio/index.js';

const prompt = promptSync();
/*Se encierra todo en una funcion principal que se exportara al app.js, se pide
el ingreso de la cantidad de notas, se guarda en cantidad, se crea un arreglo vacio llamado
notas, luego un ciclo for, dentro de ese ciclo se pide las notas individuales correspondientes
a la cantidad de notas registradas anteriormente, esto se guarda en una variable llamada notas,
luego esas notas se agregan al arreglo vacio anteriormente mencionado con un .push*/
export function ejecutarEjercicio3(){
console.log("\nPromedio\n");
let cantidad = parseInt(prompt("Ingrese la cantidad de notas a evaluar: "));
let notas = [];

for (let i = 1; i <= cantidad; i++) {
    let nota = parseFloat(prompt(`Ingrese la nota ${i}: `));
    notas.push(nota);
}
//Se llama la funcion y se asigna a una variable llamada resultados, posteriormente se
//imprime el promedio, y el rendimiento correspondiente a ese promedio, se usa el .toFixed,
//para que solo tome dos decimales
let resultado = calcularPromedio(notas);
console.log("Promedio final:", resultado.promedio.toFixed(2));
console.log("Rendimiento:", resultado.rendimiento);
}