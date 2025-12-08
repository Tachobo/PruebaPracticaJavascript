// Se importa la librería prompt-sync para poder pedir datos al usuario
import promptSync from 'prompt-sync';
const prompt = promptSync();

// Se importa la función fusionarUsuarios desde el módulo de fusión
import { fusionarUsuarios } from '../modulos/fusion/index.js';

/* Función principal que se exporta para ser usada desde app.js, se encarga de
capturar los datos de los usuarios de dos sistemas diferentes y unirlos en una sola lista */
export function ejecutarEjercicio10() {
    console.log("\nFusión de usuarios\n");

    /* Se pide la cantidad de usuarios del sistema A y se usa un ciclo para ir
    guardando los datos de cada usuario en un arreglo */
    let cantidadA = parseInt(prompt("¿Cuántos usuarios tiene el sistema A?: "));
    let usuariosA = [];

    for (let i = 1; i <= cantidadA; i++) {
        console.log(`\nUsuario A${i}:\n`);
        let documento = prompt("Documento: ");
        let nombre = prompt("Nombre: ");
        let correo = prompt("Correo: ");
        usuariosA.push({ documento, nombre, correo });
    }

    console.log();

    /* Se repite el mismo proceso con los usuarios del sistema B, pero en este caso
    se guardan campos diferentes como el teléfono */
    let cantidadB = parseInt(prompt("¿Cuántos usuarios tiene el sistema B?: "));
    let usuariosB = [];

    for (let i = 1; i <= cantidadB; i++) {
        console.log(`\nUsuario B${i}:\n`);
        let documento = prompt("Documento: ");
        let nombre = prompt("Nombre: ");
        let telefono = prompt("Teléfono: ");
        usuariosB.push({ documento, nombre, telefono });
    }

    /* Se llama a la función fusionarUsuarios, se le envían los dos arreglos como
    argumentos y esta función se encarga de unir y consolidar la información */
    let resultado = fusionarUsuarios(usuariosA, usuariosB);

    // Se muestra en consola la lista final de usuarios ya fusionada
    console.log("\nLista final");
    console.log(resultado);
}
