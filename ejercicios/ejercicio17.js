// Se importa la librería prompt-sync para poder capturar datos por consola
import promptSync from 'prompt-sync';
const prompt = promptSync();

// Se importan las funciones que se usan para procesar el inventario y convertir fechas
import { procesarInventario, parseFecha } from '../modulos/sistemaInv/index.js';

/* Función principal que se exporta para ser usada desde app.js, se encarga de
registrar los productos del inventario y generar el informe final */
export function ejecutarEjercicio17() {
    console.log("\nSistema de control de inventarios dinámicos\n");

    /* Se pide la cantidad de productos que se van a registrar y se guarda en una
    constante para controlar el número de repeticiones */
    const n = parseInt(prompt("¿Cuántos productos desea registrar?: "));
    const inventario = [];

    /* Ciclo principal donde se capturan los datos de cada producto y se guardan
    en el arreglo de inventario */
    for (let i = 1; i <= n; i++) {
        console.log(`\nProducto ${i}:`);
        const id = i;
        const nombre = prompt("Nombre: ");
        const categoria = prompt("Categoría: ");
        const stock = parseInt(prompt("Stock: "));
        const precio = parseFloat(prompt("Precio: "));
        const perecedero = prompt("¿Es perecedero? (si/no): ").toLowerCase() === "si";

        /* Si el producto es perecedero, se pide la fecha de vencimiento y se
        convierte a una fecha real usando la función parseFecha */
        let fechaVencimiento = null;
        if (perecedero) {
            const fechaStr = prompt("Fecha de vencimiento (DD/MM/YYYY): ");
            fechaVencimiento = parseFecha(fechaStr);
        }

        // Se agrega el producto completo al arreglo
        inventario.push({ id, nombre, categoria, stock, precio, perecedero, fechaVencimiento });
    }

    /* Se crea una función que se usará como callback para decidir qué acción se
    debe tomar con cada producto según su estado */
    const reglaControl = (p) => {
        if (p.stock === 0) return "retirar";
        if (p.stock < 5) return "vigilar";

        /* Si el producto es perecedero, se calculan los días que faltan para
        su vencimiento y se decide la acción a tomar */
        if (p.perecedero && p.fechaVencimiento) {
            const dias = Math.ceil((p.fechaVencimiento.getTime() - Date.now()) / (1000 * 60 * 60 * 24));
            if (dias <= 3 && dias >= 0) return "ajustar precio";
            if (dias < 0) return "retirar";
        }
        return "estable";
    };

    /* Se llama a la función procesarInventario y se le envía el inventario, el
    callback y el número de días para considerar productos próximos a vencer */
    const informe = procesarInventario(inventario, reglaControl, 15);

    console.log("\nInforme del inventario");

    // Se muestran las acciones sugeridas agrupadas
    console.log("\nAcciones sugeridas:");
    Object.entries(informe.clasificadosPorAccion).forEach(([accion, productos]) => {

        /* Se recorren las acciones y sus listas de productos usando forEach para
        mostrar cada producto en pantalla */
        console.log(`\n- ${accion}:`);
        productos.forEach(p => console.log(`  - ${p.nombre} (stock: ${p.stock}, $${p.precio.toFixed(2)})`));
    });

    // Se muestran los productos perecederos que están próximos a vencer
    console.log("\nProductos perecederos próximos a vencer (≤ 15 días):");
    if (informe.proximosAVencer.length === 0) {
        console.log("  - Ninguno");
    } else {
        informe.proximosAVencer.forEach(p => {
            console.log(`  - ${p.nombre} (${p.diasRestantes} días, vence: ${p.fechaVencimiento.toLocaleDateString()})`);
        });
    }

    // Se muestra el producto con mayor stock
    console.log("\nProducto con mayor stock:");
    if (informe.mayorStock) {
        console.log(`  - ${informe.mayorStock.nombre} (stock: ${informe.mayorStock.stock})`);
    }

    // Se muestra el producto con menor stock
    console.log("\nProducto con menor stock:");
    if (informe.menorStock) {
        console.log(`  - ${informe.menorStock.nombre} (stock: ${informe.menorStock.stock})`);
    }

    // Se muestra el resumen por categoría
    console.log("\nResumen por categoría:");
    Object.entries(informe.resumenCategorias).forEach(([cat, count]) => {
        console.log(`  - ${cat}: ${count}`);
    });

    // Se muestra el valor total del inventario
    console.log(`\nValor total del inventario: $${informe.valorTotal.toFixed(2)}\n`);
}
