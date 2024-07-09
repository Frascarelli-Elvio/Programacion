// encontrar el valor mas grande del
//arreglo [4,7,9,3,1,45,67,23,29,78,11,16]
//crear programa que encuentre el mas grande y mostrarlo por consola
//crear funcion que determine si es para o impar
//
//import * as rls from 'readline-sync'

let  mayor : number = 0;
let array : number [] = new Array (4,7,9,3,1,45,67,23,29,78,11,16);
//recorro el arreglo en busca del mayor y lo guardo en la variable mayor
    for (let index = 0; index < 12; index++) {
        if (array[index] > mayor) {
            mayor = array[index]
        }   
    };
// funcion determina par o impar
function determinar (n : number) {
    if (n % 2 == 0) {
        console.log (`El numero ${n} es: PAR`);
    } else {
        console.log (`El numero ${n} es: IMPAR`);
    }
    };
//muestro el numero mayor
console.log (`El mayor numero del arreglo es: ${mayor} `);
//llamo a la funcion para que me de el mensaje de par o impar
determinar(mayor);

