export function compare(a,b){

    if (a.valor < b.valor){
        console.log("ingresa -1");;
        return -1
    }
    if (a.valor > b.valor){
        console.log("ingresa 1");
        return 1
    }
    console.log("Ingresa 0");
    return 0
}

export function ordenAsc(productos){
    return productos.sort(compare);}
export function ordenDesc(productos){ 
    return productos.sort((a, b)=> b.valor - a.valor);}