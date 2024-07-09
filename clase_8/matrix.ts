
import * as rls from 'readline-sync'

let tamanio : number = rls.questionInt("Longitud del arreglo: ");
let array1 : number [] = new Array (tamanio);

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
console.log(matriz);
console.log(array1);