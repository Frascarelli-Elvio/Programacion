

import * as rls from 'readline-sync';

let cantidad : number = rls.questionInt("ingrese el la cantidad de datos del los vectores: ");
let array1 : number [] = new Array (cantidad);
let array2 : number [] = new Array (cantidad);

function cargarVector(vector : number [] , largoVector : number , n : number) {
    for (let index = 0; index < largoVector; index++) {
        let posicion : number = index + 1;
        vector[index] = rls.questionInt( "ingrese valor de vector " + n + " en la posicion " + posicion + ": ");
    }
}
cargarVector (array1 , cantidad , 1);
cargarVector (array2 , cantidad , 2);
;

function multiplicar (vector1 : number[], vector2 : number[], cantidad : number) : number {
    let acumulador : number = 0;
    for (let index = 0; index < cantidad; index++) {
        acumulador = acumulador + (vector1[index] * vector2[index]);
    }
    return acumulador;
}
console.log(multiplicar (array1 , array2, cantidad));