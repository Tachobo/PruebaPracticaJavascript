/* Función que recibe un arreglo de proyectos y se encarga de devolver solo los
que están activos */
export function filtrarActivos(proyectos) {

    /* Se usa filter para recorrer la lista y quedarse solo con los proyectos
    cuyo estado activo sea verdadero */
    return proyectos.filter(p => p.activo);
}

/* Función que recibe un proyecto y se encarga de contar cuántos participantes tiene */
export function contarParticipantes(proyecto) {

    // Se accede a la propiedad participantes y se devuelve la cantidad
    return proyecto.participantes.length;
}

/* Función que recibe un proyecto y una función callback, se encarga de ejecutar
esa función enviándole el proyecto para que este pueda ser evaluado */
export function evaluarProyecto(proyecto, callback) {

    /* Se llama al callback pasando el proyecto como argumento, este callback recibe
    el proyecto, realiza la evaluación y devuelve el resultado */
    return callback(proyecto);
}
