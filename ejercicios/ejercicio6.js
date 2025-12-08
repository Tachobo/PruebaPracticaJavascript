// Se importa la librería prompt-sync para poder pedir datos al usuario por consola
import promptSync from 'prompt-sync';
const prompt = promptSync();

// Se importan las funciones que se encargan de los cálculos de la nómina
import { calcularSalarioBase, calcularDeducciones, calcularNeto } from '../modulos/nomina/index.js';

/* Función principal que se exporta para ser llamada desde app.js, se encarga de
pedir los datos necesarios al usuario, realizar los cálculos y mostrar el resultado */
export function ejecutarEjercicio6(){
    console.log("\nNomina\n");

    /* Se pide al usuario el valor de la hora y las horas trabajadas, estos datos
    se guardan en constantes para usarlos en los cálculos */
    const valorHora = parseInt(prompt("Ingrese el valor de la hora: "));
    const horas = parseInt(prompt("Ingrese las horas trabajadas: "));

    /* Se llaman las funciones que realizan los cálculos, primero se calcula el salario
    base multiplicando las horas por el valor de la hora, luego se calculan las deducciones
    en base al salario base y por último se calcula el salario neto restando las deducciones */
    const base = calcularSalarioBase(horas, valorHora);
    const deducciones = calcularDeducciones(base);
    const neto = calcularNeto(base, deducciones);

    /* Finalmente se muestran los resultados en consola para que el usuario pueda ver
    el detalle del salario calculado */
    console.log(`
    El salario base es: ${base}
    El total deducciones es: ${deducciones}
    El salario neto es: ${neto}
    `);
}
