import promptSync from 'prompt-sync';
import { calcularSalarioBase, calcularDeducciones, calcularNeto  } from '../modulos/nomina/index.js';

const prompt = promptSync();

export function ejecutarEjercicio6(){
    console.log("\nNomina\n");
    /* Se pide al usuario el valor de la hora y las horas trabajadas */
    const valorHora = parseInt(prompt("Ingrese el valor de la hora: "));
    const horas = parseInt(prompt("Ingrese las horas trabajadas: "));
    /* Con esos datos se calcula el salario base, las deducciones y el neto */
    const base = calcularSalarioBase(horas, valorHora);
    const deducciones = calcularDeducciones(base);
    const neto = calcularNeto(base, deducciones);
    /* Finalmente se muestran los resultados en consola */
    console.log(`
    El salario base es: ${base}
    El total deducciones es: ${deducciones}
    El salario neto es: ${neto}
    `);
}