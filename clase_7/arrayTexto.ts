/*Crear arreglo

1) Crear un arreglo de letras e imprimirlo

2) Dado un array con nombres de tamaño 5, pedir
al usuario que ingrese un nombre y verificar si está
en el arreglo. Imprimir el arreglo y si está o no en
él.*/

import * as rls from 'readline-sync'

let verificar : string;
let contador : number;
contador = 0;
verificar = rls.question("Ingresar nombre: ");

let nombres : string [] = ["Pedro","Marcos","Esteban","Clara","Romina"];

for (let index = 0; index < 5; index++) {
    console.log(nombres[index]);
    if (verificar == nombres[index]) {
     contador = index;
}

};
if (verificar == nombres[contador]) {
    console.log(`El nombre ${verificar} esta en la posicion ${contador+1} de la lista precargada`)
} else {
    console.log(`El nombre ${verificar} no esta en la lista.`)
}
