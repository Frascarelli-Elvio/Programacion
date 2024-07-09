
import * as rls from 'readline-sync'
//variables
//pido por teclado la cantidad de elementos
let cantidadElementos : number = rls.questionInt(`Cuantos elementos desea cargar en el arreglo: `);
//declaro arreglo para trabajar
let arreglo : number [] = new Array(cantidadElementos);
// funcion para crear numeros enteros azar
function crearAzar (longitud : number) {
    return Math.floor(Math.random() * longitud);
}
//funcion para cargar el arreglo
function cargar (arreglo : number [], azar : number) {
    for (let i = 0; i < arreglo.length; i++) {
        arreglo[i] = crearAzar(azar);

    }
}
//funcion para mostrar por terminal el arreglo
function escribirArray (array : any) {
    let vector : string ="";
    for (let index = 0; index < array.length; index++) {
        vector += array[index] + " " ;
    }
    console.log(vector)
}
//funcion de comparacion
function comparar (array : number[], i : number, j : number) : number {
    let auxiliar : number;
    if (array[i] === array[j]) {
        auxiliar = 0;
    } else {
        if (array[i] < array[j]) {
            auxiliar = -1;
        } else {
            auxiliar = 1;
        }
    }
    return auxiliar;
}
//funcion para invertir elementos
function cambiarOrden (array : number[], i : number, j: number) {
    let temporal : number;
    temporal = array[i];
    array[i] = array[j];
    array[j] = temporal;
}
//funcion ordenar de mayor a menor
function burbujaSort(array : number[]) {
    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < array.length; j++) {
            if (comparar(array,j,j+1) === -1) {
                cambiarOrden(array,j,j+1)
            }
            
        }
    }
}
cargar(arreglo,50);
console.log(`El arreglo creado: `);
escribirArray(arreglo);
burbujaSort(arreglo);
console.log(`El arreglo ordenado: `);
escribirArray(arreglo);
