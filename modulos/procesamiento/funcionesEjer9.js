export function procesarPagos(pagos, callback) {
    return pagos.map(pago => {
        const aprobado = callback(pago);
        return { ...pago, estado: aprobado ? "Aprobado" : "Rechazado" };
    });
}
