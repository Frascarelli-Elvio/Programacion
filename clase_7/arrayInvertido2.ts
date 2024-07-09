/*• Almacene en un arreglo de tamaño N los números ingresados
por el usuario
• La dimensión N también es ingresada por el usuario
• Muestre los números del arreglo pero del ultimo al primero*/

import * as rls from 'readline-sync'

let tamaño : number;
let indice : number;
tamaño = rls.questionInt(`Longuitud del vector: `);
indice = tamaño -1 ;
let array1 : number[] = new Array (tamaño);
let array2 : number[] = new Array (tamaño);
//cargo el vector dado por el usuario y lleno arreglo 2 con arreglo 1
for (let index = 0; index < tamaño; index++) {
    array1[index] = rls.questionInt(`Valor ${index+1} del vector: `);
    array2[indice] = array1[index];
    indice = indice -1;
};
//muestro el vector a la inversa
for (let index = tamaño; index > 0; index--) {
    let posicion : number = index - 1;
    console.log(array1[posicion]);
};
//muestro el vector original y el auxiliar
console.log(array1);
console.log(array2);

