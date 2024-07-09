/*• Almacene en un arreglo de dimensión N números (la
cantidad es ingresada por el usuario)
• Muestre cuántos números son positivos, cuántos son
negativos y cuántos ceros hay*/

import * as rls from 'readline-sync'

let tamaño : number;
let positivos : number = 0;
let negativos : number = 0;
let ceros : number = 0;

tamaño = rls.questionInt(`Longuitud del vector: `);
let array1 : number[] = new Array (tamaño);
 
for (let index = 0; index < tamaño; index++) {
    array1[index] = rls.questionInt(`Valor ${index+1} del vector: `);
    separar(array1[index]);

};
function separar (num : number) {
    if (num > 0) {
        positivos ++;
    } else {
        if (num < 0) {
            negativos ++;
        } else {
            ceros ++;
        }
    }
};
console.log(`Positivos: ${positivos}, Negativos: ${negativos}, Ceros: ${ceros}.`)