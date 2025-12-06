import promptSync from 'prompt-sync';
import { calcularPromedio } from '../modulos/promedio/index.js';

const prompt = promptSync();

export function ejecutarEjercicio3(){
console.log("\nPromedio\n");
let cantidad = parseInt(prompt("Ingrese la cantidad de notas a evaluar: "));
let notas = [];

for (let i = 1; i <= cantidad; i++) {
    let nota = parseFloat(prompt(`Ingrese la nota ${i}: `));
    notas.push(nota);
}

let resultado = calcularPromedio(notas);
console.log("Promedio final:", resultado.promedio.toFixed(2));
console.log("Rendimiento:", resultado.rendimiento);
}