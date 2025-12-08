/* Función que recibe un mensaje y genera un resumen con la información
   más relevante, acortando el contenido si es muy largo. */
export function generarResumen(mensaje) {

    /* Desestructuramos el objeto mensaje para obtener directamente
    las propiedades 'remitente', 'contenido' y 'fecha'. Esto hace
    más claro y fácil trabajar con estos valores dentro de la función. */
    const { remitente, contenido, fecha } = mensaje;

    /* Creamos una versión breve del contenido. Si el contenido original
    tiene más de 30 caracteres, tomamos solo los primeros 30 y agregamos
    puntos suspensivos al final para indicar que fue truncado. 
    Si tiene 30 caracteres o menos, lo dejamos tal cual. */
    const contenidoBreve = contenido.length > 30 
        ? contenido.slice(0, 30) + "..." 
        : contenido;

    /* Retornamos un nuevo objeto que mantiene el remitente y la fecha originales,
    pero reemplaza el contenido completo por su versión breve. Esto permite
    mostrar un resumen del mensaje sin perder la información clave. */
    return { remitente, contenido: contenidoBreve, fecha };
}
