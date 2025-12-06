import promptSync from 'prompt-sync';
import { registrarProductos } from '../modulos/registro/index.js';

const prompt = promptSync();

export function ejecutarEjercicio7() {
    console.log("\nRegistro dinamico de productos\n");
    let cantidad = parseInt(prompt("¿Cuántos productos desea registrar?: "));
    let productosIngresados = [];

    for (let i = 1; i <= cantidad; i++) {
        let producto = prompt(`Ingrese el nombre del producto ${i}: `);
        productosIngresados.push(producto);
    }

    const resultado = registrarProductos(...productosIngresados);

    console.log("\nLista final de productos sin duplicados:\n");
    console.log(resultado);
}
