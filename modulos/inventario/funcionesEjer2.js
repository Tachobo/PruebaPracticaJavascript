function calcularInventario(inicial, vendida, recibida) {
    return (inicial - vendida) + recibida;
}

export { calcularInventario };
