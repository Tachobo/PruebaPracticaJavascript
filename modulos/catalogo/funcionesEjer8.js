/* Función que se exporta y recibe un catálogo de cursos y una función callback,
se encarga de filtrar los cursos según la condición que se defina */
export function buscarCursos(catalogo, callback) {

    /* Se usa el método filter y se le pasa el callback, este callback recibe
    cada curso y devuelve true o false, si devuelve true el curso se queda en
    la nueva lista, si devuelve false se descarta */
    return catalogo.filter(callback);
}
