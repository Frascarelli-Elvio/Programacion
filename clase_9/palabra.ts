 
 
 
 import * as rls from 'readline-sync';

let palabra : string = rls.question("INGRESE LA PALABRA QUE DESEA INVERTIR: ");
let cantidadLetras : number = palabra.length;
let arregloLetras : string [] = palabra.split("");

function mostrarVector ( vector : string [], largo : number) {
    for (let index = 0; index < largo; index++) {
        console.log(vector[index]);
        
    }
}
console.log("Mostrando vector");
mostrarVector (arregloLetras , cantidadLetras );
console.log("Invirtiendo vector");
iVector (arregloLetras ,cantidadLetras);
mostrarVector(arregloLetras , cantidadLetras);

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
