// Se importa la librería prompt-sync para poder capturar datos por consola
import promptSync from 'prompt-sync';
const prompt = promptSync();

/* Se importa la función calcularInventario desde el módulo de inventario.
Esta función será la encargada de calcular el inventario final con base en los datos ingresados.*/ 
import { calcularInventario } from '../modulos/inventario/index.js';

/* Se encierra todo en una funcion principal que se exportara e importara al app.js,
esta función se encarga de controlar todo el ejercicio, pedir los datos,
validarlos y mostrar los resultados al usuario */
export function ejecutarEjercicio2(){
    console.log("\nInventario\n");

    /* Variables que almacenan los valores necesarios para el cálculo,
    se declaran al inicio para poder usarlas y validarlas dentro del ciclo */
    let inicial, vendida, recibida, temporal;

    /* Se usa un ciclo while(true) para repetir la solicitud de datos hasta que
    todos los valores sean válidos, esto asegura que el programa no continúe
    hasta que la información ingresada sea correcta */
    while (true) {
        temporal = undefined;

        /* Captura y validación de la cantidad inicial, se pide el dato y se
        comprueba que sea un número y que no sea negativo antes de guardarlo */
        if (inicial == undefined){
            temporal = parseInt(prompt("Ingrese la cantidad inicial: "));
            if(isNaN(temporal) || temporal < 0){
                console.log("El valor ingresado no es valido");
                continue;
            } else {
                inicial = temporal;
            }
        }

        /* Captura y validación de la cantidad vendida, se sigue la misma lógica
        para evitar que se guarden valores incorrectos */
        if(vendida == undefined){
            temporal = parseInt(prompt("Ingrese la cantidad vendida: "));
            if(isNaN(temporal) || temporal < 0){
                console.log("El valor ingresado no es valido");
                continue;
            } else {
                vendida = temporal;
            }
        }

        /* Captura y validación de la cantidad recibida, se valida que el usuario
        ingrese un número correcto antes de continuar */
        if(recibida == undefined){
            temporal = parseInt(prompt("Ingrese la cantidad recibida: "));
            if(isNaN(temporal) || temporal < 0){
                console.log("El valor ingresado no es valido");
                continue;
            } else {
                recibida = temporal;
            }
        }

        // Si todas las variables ya fueron asignadas correctamente, se sale del ciclo
        break;
    }

    /* Se llama a la función calcularInventario, la cual, recibe como argumentos, los valores, inicial, vendida, recibida,
    despues esa funcion se asigna a una variable llamada validación */
    let validacion = calcularInventario(inicial, vendida, recibida);

    // Se muestra en consola el resultado final del inventario
    console.log(`Inventario final: ${validacion}`);

    /* Según el resultado obtenido, se evalúa el estado del inventario y se muestra
    un mensaje indicando si el estado es crítico o si es estable */
    if (validacion < 5){
        console.log("Estado CRITICO, quedan pocos productos");
    } else {
        console.log("Estado estable");
    }
}