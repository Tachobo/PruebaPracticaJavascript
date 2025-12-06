import promptSync from 'prompt-sync';
const prompt = promptSync();

import { procesarInventario, parseFecha } from '../modulos/sistemaInv/index.js';

export function ejecutarEjercicio17() {
    console.log("\nSistema de control de inventarios dinámicos\n");

    const n = parseInt(prompt("¿Cuántos productos desea registrar?: "));
    const inventario = [];

    for (let i = 1; i <= n; i++) {
        console.log(`\nProducto ${i}:`);
        const id = i;
        const nombre = prompt("Nombre: ");
        const categoria = prompt("Categoría: ");
        const stock = parseInt(prompt("Stock: "));
        const precio = parseFloat(prompt("Precio: "));
        const perecedero = prompt("¿Es perecedero? (si/no): ").toLowerCase() === "si";

        let fechaVencimiento = null;
        if (perecedero) {
            const fechaStr = prompt("Fecha de vencimiento (DD/MM/YYYY): ");
            fechaVencimiento = parseFecha(fechaStr);
        }

        inventario.push({ id, nombre, categoria, stock, precio, perecedero, fechaVencimiento });
    }

    // Callback de control
    const reglaControl = (p) => {
        if (p.stock === 0) return "retirar";
        if (p.stock < 5) return "vigilar";
        if (p.perecedero && p.fechaVencimiento) {
            const dias = Math.ceil((p.fechaVencimiento.getTime() - Date.now()) / (1000 * 60 * 60 * 24));
            if (dias <= 3 && dias >= 0) return "ajustar precio";
            if (dias < 0) return "retirar";
        }
        return "estable";
    };

    const informe = procesarInventario(inventario, reglaControl, 15);

    console.log("\nInforme del inventario");

    console.log("\nAcciones sugeridas:");
    Object.entries(informe.clasificadosPorAccion).forEach(([accion, productos]) => {
        console.log(`\n- ${accion}:`);
        productos.forEach(p => console.log(`  - ${p.nombre} (stock: ${p.stock}, $${p.precio.toFixed(2)})`));
    });

    console.log("\nProductos perecederos próximos a vencer (≤ 15 días):");
    if (informe.proximosAVencer.length === 0) {
        console.log("  - Ninguno");
    } else {
        informe.proximosAVencer.forEach(p => {
            console.log(`  - ${p.nombre} (${p.diasRestantes} días, vence: ${p.fechaVencimiento.toLocaleDateString()})`);
        });
    }

    console.log("\nProducto con mayor stock:");
    if (informe.mayorStock) {
        console.log(`  - ${informe.mayorStock.nombre} (stock: ${informe.mayorStock.stock})`);
    }

    console.log("\nProducto con menor stock:");
    if (informe.menorStock) {
        console.log(`  - ${informe.menorStock.nombre} (stock: ${informe.menorStock.stock})`);
    }

    console.log("\nResumen por categoría:");
    Object.entries(informe.resumenCategorias).forEach(([cat, count]) => {
        console.log(`  - ${cat}: ${count}`);
    });

    console.log(`\nValor total del inventario: $${informe.valorTotal.toFixed(2)}\n`);
}