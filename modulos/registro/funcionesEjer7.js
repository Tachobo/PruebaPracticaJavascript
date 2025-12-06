export function registrarProductos(...productos) {
    const listaFinal = [...new Set(productos)];
    return listaFinal;
}
