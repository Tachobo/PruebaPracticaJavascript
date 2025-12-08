/* Función que recibe un arreglo de cursos y un callback que determina
la prioridad de cada curso, y devuelve un arreglo de cursos recomendados
con su prioridad y el motivo de la recomendación. */
export function generarRecomendaciones(cursos, callback) {

    /* Usamos map para recorrer cada curso. Para cada uno, ejecutamos el callback
    que recibe el curso como parámetro. El callback retorna un valor numérico
    que indica la prioridad del curso según los criterios definidos por el usuario. */
    return cursos
        .map(curso => {
            const prioridad = callback(curso);

            /* Retornamos un nuevo objeto que conserva todas las propiedades originales del curso,
            pero agregamos la prioridad determinada por el callback y el motivo de la recomendación.
            El motivo se genera solo si la prioridad es mayor a 0, llamando a la función explicarMotivo.
            Si la prioridad es 0 o menor, se asigna null al motivo. */
            return {
                ...curso,
                prioridad,
                motivo: prioridad > 0 ? explicarMotivo(curso, prioridad) : null
            };
        })

        /* Filtramos los cursos para incluir únicamente aquellos cuya prioridad
        es mayor a 0, es decir, solo los cursos que realmente se recomiendan. */
        .filter(curso => curso.prioridad > 0)

        /* Ordenamos los cursos de mayor a menor prioridad, de modo que los cursos
        más importantes o urgentes aparezcan primero en el arreglo final. */
        .sort((a, b) => b.prioridad - a.prioridad);
}

/* Función auxiliar que explica el motivo de la recomendación de un curso
según la prioridad y las características del curso. */
function explicarMotivo(curso, prioridad) {

    /* Si la prioridad es alta (3 o más) pero la calificación del curso es baja,
    se indica que requiere refuerzo. */
    if (prioridad >= 3 && curso.calificacion < 3) {
        return "Calificación baja, requiere refuerzo.";
    }

    /* Si la prioridad es moderada (2 o más) y el curso no ha sido finalizado,
    se sugiere retomarlo. */
    if (prioridad >= 2 && !curso.finalizado) {
        return "Curso no finalizado, recomendable retomarlo.";
    }

    /* Si la prioridad es baja (1 o más), el curso tiene pocas horas y la calificación
    es buena, se recomienda profundizar en el contenido. */
    if (prioridad >= 1 && curso.horas < 10 && curso.calificacion >= 4) {
        return "Buen resultado con pocas horas, recomendable profundizar.";
    }

    /* En cualquier otro caso, se aplica una recomendación genérica según
    los criterios definidos. */
    return "Recomendado según criterio definido.";
}
