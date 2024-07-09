/*• Almacene en un arreglo de tamaño N los números ingresados
por el usuario
• La dimensión N también es ingresada por el usuario
• Muestre los números del arreglo pero del ultimo al primero*/

import * as rls from 'readline-sync'

let tamaño : number;
tamaño = rls.questionInt(`Longuitud del vector: `);
let array1 : number[] = new Array (tamaño);
 
for (let index = 0; index < tamaño; index++) {
    array1[index] = rls.questionInt(`Valor ${index+1} del vector: `);
};
for (let index = tamaño; index > 0; index--) {
    let posicion : number = index - 1;
console.log(array1[posicion]);
};
console.log(array1);
