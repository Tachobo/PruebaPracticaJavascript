/* Función que recibe la cantidad inicial de productos, la cantidad vendida y
la cantidad recibida, y se encarga de calcular el inventario final */
function calcularInventario(inicial, vendida, recibida) {

    /* Se resta la cantidad vendida a la cantidad inicial y luego se suma la
    cantidad recibida para obtener el total actualizado */
    return (inicial - vendida) + recibida;
}

export { calcularInventario };
