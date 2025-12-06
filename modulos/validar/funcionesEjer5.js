export function validarAcceso(nombre, estado, rol) {
    let permisos = "";
    let accesoPermitido = false;

    if (estado && estado.toLowerCase().trim() === "activo") {
        const rolNormalizado = rol ? rol.toLowerCase().trim() : "";

        if (rolNormalizado === "admin") {
            permisos = "Permisos de administrador: Acceso total (Crear, Leer, Actualizar, Borrar)";
            accesoPermitido = true;
        } else if (rolNormalizado === "editor") {
            permisos = "Permisos de editor: Acceso parcial (Crear, Leer, Actualizar)";
            accesoPermitido = true;
        } else if (rolNormalizado === "lector") {
            permisos = "Permisos de lector: Acceso de solo lectura (Leer)";
            accesoPermitido = true;
        } else {
            permisos = "Rol no reconocido.";
            accesoPermitido = false;
        }
    } else {
        permisos = "El usuario no está activo.";
        accesoPermitido = false;
    }

    return { permisos, accesoPermitido };
}
