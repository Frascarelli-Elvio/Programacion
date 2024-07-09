// cargar vector
function crearAzar (longitud : number) {
    return Math.floor(Math.random() * longitud);
}

function cargar (arreglo : number [] , cantidad : number , azar : number) {
    for (let i = 0; i < cantidad; i++) {
        arreglo[i] = crearAzar(azar);

    }
}

function escribirUnaLinea ( arreglo : number [] , cantidad : number ) {
    let vector : string = "";
    for (let index = 0; index < cantidad; index++) {
        vector += `${arreglo[index]} `;
    }
    console.log(vector);
}

function intercambiar (arreglo : number [], i : number , j : number) {
    let aux : number;
    aux = arreglo[i];
    arreglo[i] = arreglo[j];
    arreglo[j] = aux;
}

function comparar (arreglo : number [], i : number , j : number) : number {
    let comparacion : number;
    if (arreglo[i] === arreglo[j]) {
        comparacion = 0;
    } else {
        if (arreglo[i] < arreglo[j]) {
            comparacion = -1;
        } else {
            comparacion = 1;
        }
        
    }
    return comparacion
}

function burbuja (arreglo : number [] , cantidad : number ) {
    for (let i = 0; i < cantidad;i++) {
        for (let j = 0; j < (cantidad - 1); j++) {
           if ((comparar(arreglo, j , j+1)) === 1)
            intercambiar (arreglo, j , j+1);
        }
        
    }
}
let limite : number = 10;
let array : number [] = new Array(limite);
cargar(array,limite,100);
escribirUnaLinea(array, limite);
burbuja(array,limite);
escribirUnaLinea(array,limite);
