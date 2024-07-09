
import * as rls from 'readline-sync';

let cantidad : number = rls.questionInt("ingrese el la cantidad de letras del nombre: ");
let arregloUsuario : string [] = new Array (cantidad);

function cargarVector(vector : string [] , largoVector : number) {
    for (let index = 0; index < largoVector; index++) {
        let posicion : number = index + 1;
        vector[index] = rls.question( "ingrese letra del nombre en la posicion " + posicion + ": ");
    }
}
cargarVector (arregloUsuario , cantidad);
console.log(arregloUsuario);
iVector(arregloUsuario , cantidad);
console.log(arregloUsuario);

function iVector(vector : string[] , largoVector : number) {
    let aux : string;
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