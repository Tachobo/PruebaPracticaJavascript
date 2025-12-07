function validar (aprendices, nombre){
    // Usamos el método .some() para recorrer el arreglo de aprendices.
    // Se diseñó así porque .some() devuelve true si al menos un elemento cumple la condición.
    let pregunta = aprendices.some((valor)=>{
        // Callback de .some():
        // Parámetros:
        // - valor: cada elemento del arreglo (nombre de aprendiz).
        // Retorno:
        // - true si el valor coincide con el nombre buscado.
        // Responsabilidad:
        // - Determinar si el aprendiz evaluado está presente en la lista.
        if(valor == nombre){
            return true;
        }
    })
    // Según el resultado de la validación, construimos el mensaje correspondiente.
    let mensaje = pregunta ? "El aprendiz está inscrito" : "El aprendiz no está inscrito";
    console.log(mensaje);
}
export {validar};