export function buscarCursos(catalogo, callback) {
    return catalogo.filter(callback);
}