let cantidad = parseInt (prompt("Ingrese la cantidad de productos a evaluar"));
let productos = [];

for (let i = 1; i <= cantidad; i++){
    let producto = prompt(`Ingrese el nombre del producto ${i}`);
    let valor = parseFloat(prompt(`Ingrese el valor del producto ${i}`));
    productos.push({producto, valor})
}

function compare(a,b){

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

let productosB = [...productos];
let respuestaA = productos.sort(compare);
let respuestaB = productosB.sort((a, b)=> b.valor - a.valor);

console.log(respuestaA);
console.log(respuestaA[0]);
console.log(respuestaA[respuestaA.length - 1]);
console.log(respuestaB);
console.log(respuestaB[0]);
console.log(respuestaB[respuestaB.length -1]);





