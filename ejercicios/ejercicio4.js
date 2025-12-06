import promptSync from 'prompt-sync';
import { ordenAsc, ordenDesc } from '../modulos/productos/index.js';

const prompt = promptSync();

export function ejecutarEjercicio4(){
console.log("\nOrden productos\n");
let cantidad = parseInt (prompt("Ingrese la cantidad de productos a evaluar: "));
let productos = [];

for (let i = 1; i <= cantidad; i++){
    let producto = prompt(`Ingrese el nombre del producto ${i}: `);
    let valor = parseFloat(prompt(`Ingrese el valor del producto ${i}: `));
    productos.push({producto, valor})
}

let productosB = [...productos];
let respuestaA = ordenAsc(productos);
let respuestaB = ordenDesc(productosB);

console.log("\nOrden ascendente\n");
console.log(respuestaA);
console.log(respuestaA[0]);
console.log(respuestaA[respuestaA.length - 1]);
console.log("\nOrden descendente\n");
console.log(respuestaB);
console.log(respuestaB[0]);
console.log(respuestaB[respuestaB.length -1]);}





