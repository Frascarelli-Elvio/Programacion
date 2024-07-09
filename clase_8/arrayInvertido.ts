/* Almacene en un arreglo de tamaño N los números ingresados
por el usuario
• La dimensión N también es ingresada por el usuario
• Muestre los números del arreglo pero del último al primero */




import * as rls from 'readline-sync';

let cantidad : number = rls.questionInt("ingrese el la cantidad de datos del vector: ");
let arregloUsuario : number [] = new Array (cantidad);

function cargarVector(vector : number [] , largoVector : number) {
    for (let index = 0; index < largoVector; index++) {
        let posicion : number = index + 1;
        vector[index] = rls.questionInt( "ingrese valor de vector en la posicion " + posicion + ": ");
    }
}
cargarVector (arregloUsuario , cantidad);
console.log(arregloUsuario);
iVector(arregloUsuario , cantidad);
console.log(arregloUsuario);

function iVector(vector : number[] , largoVector : number) {
    let aux : number;
    let id : number = largoVector - 1;
    let ii : number = 0;
    while (ii < id) {
        aux = vector[ii];
        vector[ii] = vector[id];
        vector[id] = aux;
        ii++;
        id--;
    }
}