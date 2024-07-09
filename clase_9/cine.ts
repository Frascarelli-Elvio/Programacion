import * as rls from 'readline-sync';

let cine : boolean [] = new Array(200);
let butaca : number;
function contar (array : boolean[]) : number {
    let resultado : number = 0;
    for (let i = 0; i < array.length; i++) {
        if (array[i] == false) {
            resultado ++;
        }
        
    }
    return resultado;
}
function cargar (array : boolean[]) {
    for (let index = 0; index < array.length; index++) {
        array[index] = false;
    }
}
function venderEntradas (array : boolean[], butaca : number) {
    array[butaca] = true;
}
cargar(cine);
butaca = rls.questionInt("Que asiento desea usar: ");
venderEntradas(cine,butaca);