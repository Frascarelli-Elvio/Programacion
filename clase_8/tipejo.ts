/* Almacene en un arreglo de dimensión N números (la
cantidad es ingresada por el usuario)
• Muestre cuántos números son positivos, cuántos son
negativos y cuántos ceros hay*/

import * as rls from 'readline-sync';

let largo : number = rls.questionInt("ingrese el numero de lugares a completar: ");
let array : number [] = new Array (largo);
cargarVector(array);
let numP : number = contarP(array,largo);
let numN : number = contarN(array);
let ceros : number = contarCeros(array);
console.log("positivos: " + numP + "\n" + "negativos: " + numN + "\n" + "ceros: " + ceros);
function cargarVector (v : number[]) {
    for (let i = 0; i < v.length; i++) {
        let lugar : number = i + 1;
        v[i] = rls.questionInt("ingrese valor " + lugar + " del ARRAY: ")
    }
}
function contarP (vector : number[], n : number) : number {
    let contador : number = 0;
    for (let i = 0; i < n; i++) {
        if (vector[i] > 0) {
            contador++;
        }
        
    } return contador;
}
function contarN (vector : number[]) : number {
    let contador : number = 0;
    for (let i = 0; i < vector.length; i++) {
        if (vector[i] < 0) {
            contador++;
        }
        
    } return contador;
}
function contarCeros (vector : number[]) : number {
    let contador : number = 0;
    for (let i = 0; i < vector.length; i++) {
        if (vector[i] == 0) {
            contador++;
        }
        
    } return contador;
}


