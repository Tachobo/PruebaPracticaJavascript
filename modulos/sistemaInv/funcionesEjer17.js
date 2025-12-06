
export function parseFecha(dmy) {
    const [d, m, y] = dmy.split("/").map(Number);
    return new Date(y, m - 1, d);
}

function diasHasta(fecha) {
    const msPorDia = 1000 * 60 * 60 * 24;
    return Math.ceil((fecha.getTime() - Date.now()) / msPorDia);
}


export function procesarInventario(inventario, callback, diasUmbralVencimiento = 15) {
    // 1. Aplicar callback
    const conAccion = inventario.map(p => ({ ...p, accion: callback(p) }));

    // 2. Clasificar por acción
    const porAccion = conAccion.reduce((acc, p) => {
        (acc[p.accion] ??= []).push(p);
        return acc;
    }, {});

    // 3. Sub reporte perecederos próximos a vencer
    const proximosAVencer = conAccion
        .filter(p => p.perecedero && p.fechaVencimiento instanceof Date)
        .map(p => ({ ...p, diasRestantes: diasHasta(p.fechaVencimiento) }))
        .filter(p => p.diasRestantes >= 0 && p.diasRestantes <= diasUmbralVencimiento)
        .sort((a, b) => a.diasRestantes - b.diasRestantes);

    // 4. Mayor y menor stock
    const mayorStock = conAccion.reduce((max, p) => (!max || p.stock > max.stock ? p : max), null);
    const menorStock = conAccion.reduce((min, p) => (!min || p.stock < min.stock ? p : min), null);

    // 5. Resumen por categoría
    const resumenCategorias = conAccion.reduce((acc, p) => {
        acc[p.categoria] = (acc[p.categoria] ?? 0) + 1;
        return acc;
    }, {});

    // 6. Valor total
    const valorTotal = conAccion.reduce((suma, p) => suma + (p.precio * p.stock), 0);

    // 7. Retornar informe
    return {
        productosConAccion: conAccion,
        clasificadosPorAccion: porAccion,
        proximosAVencer,
        mayorStock,
        menorStock,
        resumenCategorias,
        valorTotal
    };
}