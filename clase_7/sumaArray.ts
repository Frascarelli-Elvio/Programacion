/*Sumar los elementos de cada una de las posiciones
de dos arreglos y guardar el resultado en otro arreglo
• El arreglo tiene dimensión 6 y los números de los dos
vectores los carga el usuario*/

import * as rls from 'readline-sync'

let array1 : number[] = new Array (6);
let array2 : number[] = new Array (6);
let array3 : number[] = new Array (6);

for (let index = 0; index < 6; index++) {
    let posicion : number;
    posicion = index+1;
    array1[index] = rls.questionInt("Cargue el valor "+posicion+" del vector 1: ");
}
for (let index = 0; index < 6; index++) {
    let posicion : number;
    posicion = index+1;
    array2[index] = rls.questionInt("Cargue el valor "+posicion+" del vector 2: ");
};

for (let index = 0; index <6; index++) {
    array3[index] = array1[index]+array2[index];
    console.log(array3[index]);
};
//console.log(array3);