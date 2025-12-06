import { validar } from '../modulos/asistencia/index.js';

import promptSync from 'prompt-sync';
const prompt = promptSync();

export function ejecutarEjercicio1(){
console.log("\nValidación Asistencia\n");
let cantidad = parseInt(prompt("Ingrese la cantidad de aprendices: "))
const aprendices = []
for (let i = 0; i < cantidad; i++){
    let aprendiz = prompt("Ingrese el nombre del estudiante: ");
    aprendices.push(aprendiz)
}

let nombre = prompt("Ingrese el nombre a evaluar: ");
validar(aprendices, nombre)
}