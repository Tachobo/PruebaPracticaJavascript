/* Función que valida el acceso de un usuario según su estado y rol,
retornando un objeto con la descripción de los permisos y si el acceso
está permitido. */
export function validarAcceso(nombre, estado, rol) {

    /* Inicializamos la variable 'permisos' que contendrá la descripción
    de los permisos asignados y 'accesoPermitido' que indica si el usuario
    puede acceder o no. */
    let permisos = "";
    let accesoPermitido = false;

    /* Primero verificamos si el estado del usuario está definido y es "activo".
    Se normaliza el texto a minúsculas y se eliminan espacios innecesarios
    para asegurar que la comparación sea confiable. */
    if (estado && estado.toLowerCase().trim() === "activo") {

        /* Normalizamos el rol de manera similar para manejar posibles variaciones
           en mayúsculas o espacios. Si el rol no está definido, usamos un string vacío. */
        const rolNormalizado = rol ? rol.toLowerCase().trim() : "";

        /* Evaluamos el rol del usuario y asignamos los permisos correspondientes.
           Si el rol es "admin", se le da acceso total. */
        if (rolNormalizado === "admin") {
            permisos = "Permisos de administrador: Acceso total (Crear, Leer, Actualizar, Borrar)";
            accesoPermitido = true;

        /* Si el rol es "editor", se le permite crear, leer y actualizar, pero no borrar. */
        } else if (rolNormalizado === "editor") {
            permisos = "Permisos de editor: Acceso parcial (Crear, Leer, Actualizar)";
            accesoPermitido = true;

        /* Si el rol es "lector", solo se permite leer información. */
        } else if (rolNormalizado === "lector") {
            permisos = "Permisos de lector: Acceso de solo lectura (Leer)";
            accesoPermitido = true;

        /* Para cualquier otro rol no reconocido, no se permite el acceso. */
        } else {
            permisos = "Rol no reconocido.";
            accesoPermitido = false;
        }

    /* Si el usuario no está activo, no se le permite el acceso
    y se asigna un mensaje indicando que no está activo. */
    } else {
        permisos = "El usuario no está activo.";
        accesoPermitido = false;
    }

    /* Retornamos un objeto con la descripción de los permisos
    y un booleano indicando si el acceso está permitido. */
    return { permisos, accesoPermitido };
}
