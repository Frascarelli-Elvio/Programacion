import * as rls from 'readline-sync'

let array : number [] = new Array(10);
//let continuar : string = "si";

/* function cargar (vector : number[]) {
    let continuar : string = "si";
    let contador : number = 0;
    while (continuar != "no") {
        vector[contador] = rls.questionInt(`Ingrese un valor: `);
        contador ++;
        continuar = rls.question(`Desea seguir agregando elementos? Van ${contador} numeros / ingrese "si" para seguir: `);
    }
} */
function crearAzar (longitud : number) {
    return Math.floor(Math.random() * longitud);
}
//funcion para cargar el arreglo
function cargar (arreglo : number [], azar : number) {
    for (let i = 0; i < arreglo.length; i++) {
        arreglo[i] = crearAzar(azar);

    }
}
cargar(array,100);
escribirArray(array);
console.log(`El promedio es: ${sumarElementos(array)}.`);
mayorMenor(array);
parImpar(array);
repetidos(array);
console.log(`El prodcuto de los valores ingresados es: ${producto(array)}.`);

function escribirArray (array : number[]) {
    let vector : string ="";
    for (let index = 0; index < array.length; index++) {
        vector += array[index] + " " ;
    }
    console.log(vector);
}
function sumarElementos (vector : number[]) : number {
    let suma : number = 0;
    let promedio : number;
    for (let index = 0; index < array.length; index++) {
        suma = suma + vector[index];
    }
    promedio = suma/array.length;
    return promedio;
}
function mayorMenor (array : number[]) {
    let mayor : number = array[5];
    let menor : number = array[5];
    for (let index = 0; index < array.length; index++) {
        if (array[index] > mayor) {
            mayor = array[index];
        }
        if (array[index] < menor) {
            menor = array[index];
        }
    }
    console.log(`El mayor es ${mayor}`);
    console.log(`El menor es ${menor}`);
}
function parImpar (array : number[]) {
    let pares : number = 0;
    let impares : number = 0;
    for (let index = 0; index < array.length; index++) {
        if (array[index] % 2 === 0) {
            pares ++;
        } else {
            impares ++;
        }
        
    }
    console.log(`Numeros pares: ${pares}`);
    console.log(`Numeros impares: ${impares}`)
}
function repetidos (array : number[]) {
    let contador : number = 0;
    for (let index = 0; index < array.length; index++) {
        for (let j = index+1; j < array.length; j++) {
            if (array[index] === array[j]) {
                contador ++;
            };
        }
    }
    console.log(`Existen ${contador} repetidos.`);
}
function producto (array : number[]) : number {
    let total : number = 1;
    for (let index = 0; index < array.length; index++) {
        total = total * array[index];
    }
    return total;
}