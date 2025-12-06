import promptSync from 'prompt-sync';
import { validarAcceso } from '../modulos/validar/index.js';

const prompt = promptSync();

export function ejecutarEjercicio5() {
    console.log("\nValidacion usuario\n");
    const nombre = prompt("Ingrese su nombre de usuario: ");
    const estado = prompt("¿Cuál es su estado? (activo / inactivo): ");
    const rol = prompt("¿Cuál es su rol? (admin / editor / lector): ");

    const resultado = validarAcceso(nombre, estado, rol);

    if (resultado.accesoPermitido) {
        console.log(`\n¡Bienvenido, ${nombre}!\nAcceso permitido.\n${resultado.permisos}`);
    } else {
        console.log(`\nAcceso denegado para ${nombre}.\nMotivo: ${resultado.permisos}`);
    }
}
