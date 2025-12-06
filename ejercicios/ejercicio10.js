import promptSync from 'prompt-sync';
const prompt = promptSync();
import { fusionarUsuarios } from '../modulos/fusion/index.js';

export function ejecutarEjercicio10() {
    console.log("\nFusión de usuarios\n");

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
    let cantidadB = parseInt(prompt("¿Cuántos usuarios tiene el sistema B?: "));
    let usuariosB = [];
    for (let i = 1; i <= cantidadB; i++) {
        console.log(`\nUsuario B${i}:\n`);
        let documento = prompt("Documento: ");
        let nombre = prompt("Nombre: ");
        let telefono = prompt("Teléfono: ");
        usuariosB.push({ documento, nombre, telefono });
    }

    let resultado = fusionarUsuarios(usuariosA, usuariosB);

    console.log("\nLista final");
    console.log(resultado);
}
