// Se importa la librería prompt-sync para poder capturar datos por consola
import promptSync from 'prompt-sync';
const prompt = promptSync();

/* Se importa la función registrarProductos desde el módulo de registro,
esta función se usará para procesar la lista de productos ingresados */ 
import { registrarProductos } from '../modulos/registro/index.js';

/* Función principal que se exporta para ser llamada desde app.js, se encarga de
pedir los nombres de los productos, almacenarlos y luego enviarlos a una función
que elimina los duplicados */
export function ejecutarEjercicio7() {
    console.log("\nRegistro dinamico de productos\n");

    /* Se pide al usuario la cantidad de productos que desea registrar y se guarda
    en una variable para controlar cuántas veces se repetirá el ciclo */
    let cantidad = parseInt(prompt("¿Cuántos productos desea registrar?: "));

    // Se crea un arreglo vacío donde se guardarán los productos que ingrese el usuario
    let productosIngresados = [];

    /* Se usa un ciclo for para pedir los nombres de los productos uno por uno,
    esto se hace así para construir una lista completa con la cantidad indicada */
    for (let i = 1; i <= cantidad; i++) {
        let producto = prompt(`Ingrese el nombre del producto ${i}: `);
        productosIngresados.push(producto);
    }

    /* Se llama a la función registrarProductos usando el operador spread (...),
    esto permite enviar cada producto como argumento separado, esta función se encarga
    de eliminar los productos duplicados y devolver la lista limpia */
    const resultado = registrarProductos(...productosIngresados);

    // Se muestra en consola la lista final de productos sin duplicados
    console.log("\nLista final de productos sin duplicados:\n");
    console.log(resultado);
}
