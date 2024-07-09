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

let tamanio : number = 3 //rls.questionInt("Longitud del arreglo: ");
let array1 : number [] = new Array (tamanio);

/*let array2 : number [] = new Array (tamanio);
let array3 : number [] = new Array (tamanio);
let array4 : number [] = new Array (tamanio);
let array12 : number [] = new Array (tamanio); //multiplicacion de array 1 y 2
let array34 : number [] = new Array (tamanio); //multiplicacion de array 3 y 4
let arrayMultiplicacion : number [] = new Array (tamanio);*/
let matriz : number[][]= [[1,2,3],
                          [4,5,6],
                          [2,1,2],
                          [1,2,1]];

for (let i = 0; i < 3; i++) {
    let aux : number = 1;
    for (let index = 0; index < 4; index++) {
        aux = aux * matriz[index][i];
        array1[i] = aux;
    
    }
    
}
    

/*cargarVector(array1 , tamanio, 1);
cargarVector(array2 , tamanio, 2);
cargarVector(array3 , tamanio, 3);
cargarVector(array4 , tamanio, 4);

multiplicarArreglo(array1,array2,array12);
multiplicarArreglo(array3,array4,array34);
multiplicarArreglo(array12,array34,arrayMultiplicacion);

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
console.log(array3);
console.log(array4);*/

console.log(matriz);
console.log(array1);