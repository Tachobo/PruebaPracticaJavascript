import promptSync from 'prompt-sync';
import { ordenAsc, ordenDesc } from '../modulos/productos/index.js';

const prompt = promptSync();

export function ejecutarEjercicio4(){
console.log("\nOrden productos\n");
/*Declaramos una variable llamada cantidad a la que se le asigna los productos que se piden al usuario, se crea un 
arreglo vacio llamado productos, se crea un for para pedirle al usuario el nombre de los productos uno a uno,
el valor de cada producto, estos datos se asignan a dos variables, llamadas producto y valor, esas variables se añaden al arreglo
producto con .push
*/
let cantidad = parseInt (prompt("Ingrese la cantidad de productos a evaluar: "));
let productos = [];
for (let i = 1; i <= cantidad; i++){
    let producto = prompt(`Ingrese el nombre del producto ${i}: `);
    let valor = parseFloat(prompt(`Ingrese el valor del producto ${i}: `));
    productos.push({producto, valor})
}
/* Se crea una copia del arreglo productos llamada productosB,
esto para poder ordenar en forma descendente sin alterar
el arreglo original */
let productosB = [...productos];
/* Se llaman dos funciones: ordenAsc y ordenDesc, que reciben
los arreglos y devuelven una nueva lista ordenada según
el valor de los productos */
let respuestaA = ordenAsc(productos);
let respuestaB = ordenDesc(productosB);
/* Se muestran en consola los resultados del orden ascendente:
- La lista completa ordenada
- El primer elemento (menor valor)
- El último elemento (mayor valor) */
console.log("\nOrden ascendente\n");
console.log(respuestaA);
console.log(respuestaA[0]);
console.log(respuestaA[respuestaA.length - 1]);
/* Se muestran en consola los resultados del orden descendente:
- La lista completa ordenada
- El primer elemento (el de mayor valor)
- El último elemento (el de menor valor) */
console.log("\nOrden descendente\n");
console.log(respuestaB);
console.log(respuestaB[0]);
console.log(respuestaB[respuestaB.length -1]);}





