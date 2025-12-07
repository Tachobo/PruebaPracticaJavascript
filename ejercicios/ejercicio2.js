// Importamos la función 'calcularInventario' desde el módulo de inventario.
// Esta función será la encargada de calcular el inventario final con base en los datos ingresados.
import { calcularInventario } from '../modulos/inventario/index.js';

import promptSync from 'prompt-sync';
const prompt = promptSync();

/*
Función principal: ejecutarEjercicio2
Responsabilidad:
- Gestionar el flujo de cálculo del inventario.
- Solicitar al usuario los valores iniciales, vendidos y recibidos.
- Validar que los datos ingresados sean correctos (números no negativos).
- Calcular el inventario final y mostrar un estado según el resultado.
*/

export function ejecutarEjercicio2(){
console.log("\nInventario\n");
// Variables que almacenarán las cantidades necesarias para el cálculo.
let inicial, vendida, recibida, temporal;
// Bucle principal para capturar y validar los datos.
// Se diseñó así para asegurar que cada valor ingresado sea válido antes de continuar.
while (true) {
temporal = undefined;
// Captura y validación de la cantidad inicial.
if (inicial == undefined){
    temporal = parseInt(prompt("Ingrese la cantidad inicial: "));
    if(isNaN(temporal) || temporal < 0){
        console.log ("El valor ingresado no es valido")
        continue
    } else {
        inicial = temporal
    }
}
// Captura y validación de la cantidad vendida.
if(vendida == undefined){
    temporal = parseInt(prompt("Ingrese la cantidad vendida: "));
    if(isNaN(temporal) || temporal < 0){
        console.log ("El valor ingresado no es valido")
        continue
    } else {
        vendida = temporal
    }
}
// Captura y validación de la cantidad recibida.
if(recibida == undefined){
    temporal = parseInt(prompt("Ingrese la cantidad recibida: "));
    if(isNaN(temporal) || temporal < 0){
        console.log ("El valor ingresado no es valido")
        continue
    } else {
        recibida = temporal
    }
}
//Si todas las variables que se pidieron, se asignaron correctamente, sale del bucle.
break;
}

/*
Callback: calcularInventario(inicial, vendida, recibida)
Parámetros:
- inicial: cantidad inicial de productos.
- vendida: cantidad de productos vendidos.
- recibida: cantidad de productos recibidos.
Retorno:
- Devuelve un número que representa el inventario final.
Responsabilidad:
- Realizar el cálculo del inventario con base en las operaciones de entrada y salida.
*/

let validacion = calcularInventario(inicial, vendida, recibida);
//Se muestra el resultado final del inventario.
console.log(`Inventario final: ${validacion}`);
//Segun el resultado anterior se valida el estado y se imprime un mensaje, segun el estado correspondiente
if (validacion < 5){
    console.log("Estado CRITICO, quedan pocos productos")
}else {
    console.log ("Estado estable")
}
}