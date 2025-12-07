import promptSync from 'prompt-sync';
import { validarAcceso } from '../modulos/validar/index.js';

const prompt = promptSync();

export function ejecutarEjercicio5() {
    console.log("\nValidacion usuario\n");
    /* Primero se le pide al usuario que ingrese su nombre, luego se solicita
    su estado que puede ser activo o inactivo, y finalmente se pregunta por
    su rol dentro del sistema, que puede ser admin, editor o lector. 
    Cada uno de estos datos se guarda en una constante para usarlos más adelante. */
    const nombre = prompt("Ingrese su nombre de usuario: ");
    const estado = prompt("¿Cuál es su estado? (activo / inactivo): ");
    const rol = prompt("¿Cuál es su rol? (admin / editor / lector): ");
    /* Después se llama a la función validarAcceso, pasándole como parámetros
    el nombre, el estado y el rol. Esta función devuelve un objeto con dos
    propiedades: accesoPermitido, que indica si el usuario puede ingresar,
    y permisos, que describe los permisos o el motivo por el cual se le
    niega el acceso. */
    const resultado = validarAcceso(nombre, estado, rol);
    /*se usa una condición if/else. Si accesoPermitido es verdadero,
    se muestra un mensaje de bienvenida junto con los permisos que tiene el
    usuario. Si accesoPermitido es falso, se muestra un mensaje de acceso
    denegado indicando el motivo. */
    if (resultado.accesoPermitido) {
        console.log(`\n¡Bienvenido, ${nombre}!\nAcceso permitido.\n${resultado.permisos}`);
    } else {
        console.log(`\nAcceso denegado para ${nombre}.\nMotivo: ${resultado.permisos}`);
    }
}
