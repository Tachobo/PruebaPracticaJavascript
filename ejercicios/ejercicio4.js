// Se importa la librería prompt-sync para poder pedir datos al usuario por consola
import promptSync from 'prompt-sync';
const prompt = promptSync();

/* Se importan las funciones ordenAsc y ordenDesc desde el módulo de productos,
estas funciones se usarán para ordenar los productos según su valor */ 
import { ordenAsc, ordenDesc } from '../modulos/productos/index.js';

/* Función principal que se exporta para ser usada desde app.js, se encarga de
pedir los datos de los productos, guardarlos en un arreglo y luego mostrar los
resultados del ordenamiento */
export function ejecutarEjercicio4(){
    console.log("\nOrden productos\n");

    /* Se declara una variable llamada cantidad donde se guarda la cantidad de productos,
    se crea un arreglo vacío llamado productos, luego se usa un ciclo for para pedirle al
    usuario el nombre y el valor de cada producto, estos datos se guardan en un objeto y
    se agregan al arreglo con push para poder trabajarlos fácilmente después */
    let cantidad = parseInt(prompt("Ingrese la cantidad de productos a evaluar: "));
    let productos = [];

    /* Ciclo que se repite según la cantidad ingresada, en cada vuelta se pide el nombre
    del producto y su valor, esto se hace así para construir una lista completa de productos */
    for (let i = 1; i <= cantidad; i++){
        let producto = prompt(`Ingrese el nombre del producto ${i}: `);
        let valor = parseFloat(prompt(`Ingrese el valor del producto ${i}: `));
        productos.push({producto, valor});
    }

    /* Se crea una copia del arreglo productos llamada productosB, esto se hace para poder
    ordenar en forma descendente sin modificar el arreglo original */
    let productosB = [...productos];

    /* Se llaman las funciones ordenAsc y ordenDesc, estas funciones reciben los arreglos
    como argumentos y devuelven nuevas listas ya ordenadas según el valor de los productos */
    let respuestaA = ordenAsc(productos);
    let respuestaB = ordenDesc(productosB);

    /* Se muestran en consola los resultados del orden ascendente, se imprime la lista completa,
    luego el primer elemento que corresponde al producto con menor valor, y el último que
    corresponde al producto con mayor valor */
    console.log("\nOrden ascendente\n");
    console.log(respuestaA);
    console.log(respuestaA[0]);
    console.log(respuestaA[respuestaA.length - 1]);

    /* Se muestran en consola los resultados del orden descendente, se imprime la lista completa,
    luego el primer elemento que corresponde al producto con mayor valor, y el último que
    corresponde al producto con menor valor */
    console.log("\nOrden descendente\n");
    console.log(respuestaB);
    console.log(respuestaB[0]);
    console.log(respuestaB[respuestaB.length -1]);
}
