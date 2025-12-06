function validar (aprendices, nombre){
    let pregunta = aprendices.some((valor)=>{
        if(valor == nombre){
            return true;
        }
    })
    let mensaje = pregunta ? "El aprendiz está inscrito" : "El aprendiz no está inscrito";
    console.log(mensaje);
}
export {validar};