import { calcularInventario } from '../modulos/inventario/index.js';

import promptSync from 'prompt-sync';
const prompt = promptSync();

export function ejecutarEjercicio2(){
console.log("\nInventario\n");
let inicial, vendida, recibida, temporal;
while (true) {
temporal = undefined;
if (inicial == undefined){
    temporal = parseInt(prompt("Ingrese la cantidad inicial: "));
    if(isNaN(temporal) || temporal < 0){
        console.log ("El valor ingresado no es valido")
        continue
    } else {
        inicial = temporal
    }
}
if(vendida == undefined){
    temporal = parseInt(prompt("Ingrese la cantidad vendida: "));
    if(isNaN(temporal) || temporal < 0){
        console.log ("El valor ingresado no es valido")
        continue
    } else {
        vendida = temporal
    }
}
if(recibida == undefined){
    temporal = parseInt(prompt("Ingrese la cantidad recibida: "));
    if(isNaN(temporal) || temporal < 0){
        console.log ("El valor ingresado no es valido")
        continue
    } else {
        recibida = temporal
    }
}
break;
}
let validacion = calcularInventario(inicial, vendida, recibida);
console.log(`Inventario final: ${validacion}`);

if (validacion < 5){
    console.log("Estado CRITICO, quedan pocos productos")
}else {
    console.log ("Estado estable")
}
}