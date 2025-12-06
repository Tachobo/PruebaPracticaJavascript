export function analizarGastos(gastos) {
    // Calcular total gastado
    const total = gastos.reduce((acc, g) => acc + g.monto, 0);

    // Sumar montos por categoría
    const categorias = {};
    for (let g of gastos) {
        categorias[g.categoria] = (categorias[g.categoria] || 0) + g.monto;
    }

    // Encontrar la categoría más costosa
    let categoriaMasCostosa = null;
    let maxMonto = 0;
    for (let [cat, monto] of Object.entries(categorias)) {
        if (monto > maxMonto) {
            maxMonto = monto;
            categoriaMasCostosa = cat;
        }
    }

    // Detectar alertas de desbalance financiero (>40% del total)
    const alertas = [];
    for (let [cat, monto] of Object.entries(categorias)) {
        const porcentaje = (monto / total) * 100;
        if (porcentaje > 40) {
            alertas.push(`La categoría "${cat}" supera el 40% del gasto total (${porcentaje.toFixed(2)}%).`);
        }
    }

    return {
        total,
        categoriaMasCostosa,
        alertas
    };
}
