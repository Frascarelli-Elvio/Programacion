/* Implemente un método llamado “multiplicarArreglo” que recibe
como parámetros tres arreglos de Enteros del mismo tamaño
• Los dos primeros arreglos contienen los números que se quieren
multiplicar
• El tercer arreglo almacena el cálculo de la multiplicación de cada
posición de los dos arreglos
• Utilice este método para multiplicar los siguientes cuatro arreglos
de tres elementos

aproveche las ventajas de métodos
para resolver el ejercicio

v1: [1, 2, 3]
v2: [4, 5, 6]
v3: [2, 1, 2]
v4: [1, 2, 1]

vResultado (v1*v2*v3*v4): [8, 20, 36]*/

import * as rls from 'readline-sync'

let tamanio : number = rls.questionInt("Tamaño del arreglo: ");
let array1 : number [] = new Array (tamanio);
let array2 : number [] = new Array (tamanio);
let arrayMultiplicacion : number [] = new Array (tamanio);

cargarVector(array1 , tamanio, 1);
cargarVector(array2 , tamanio, 2);
multiplicarArreglo(array1,array2,arrayMultiplicacion);

function cargarVector(vector : number[] , largoVector : number , n : number) {
    for (let index = 0; index < largoVector; index++) {
        let posicion : number = index + 1;
        vector[index] = rls.questionInt( "ingrese valor de vector " + n +  " en la posicion " + posicion + ": ");
    }
}   
function multiplicarArreglo (arreglo1 : number[], arreglo2 : number[], arrResultado : number[]) {
    for (let index = 0; index < arreglo1.length; index++) {
        arrResultado[index] = arreglo1[index] * arreglo2[index];
    }
}
console.log(array1);
console.log(array2);
console.log(arrayMultiplicacion);
