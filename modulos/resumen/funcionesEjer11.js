export function generarResumen(mensaje) {
    const { remitente, contenido, fecha } = mensaje;

    const contenidoBreve = contenido.length > 30 
        ? contenido.slice(0, 30) + "..." 
        : contenido;

    return { remitente, contenido: contenidoBreve, fecha };
}
