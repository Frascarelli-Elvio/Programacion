/*Solicite al usuario que ingrese un texto y retornelo convertido en un nombre de variable/función con las reglas camelCase

Por ejemplo, si el usuario ingresa:

		convertir texto segun camel case

el programa lo debe convertir en:

		convertirTextoSegunCamelCase
*/
 import * as rls from 'readline-sync'  
 
 function escribirTexto ( arreglo : string [] ) {
    let vector : string = "";
    for (let index = 0; index < arreglo.length; index++) {
        let aux : string;
        if (arreglo[index] == " ") {
            vector += `${arreglo[index+1].toUpperCase()}`;
            index = index + 1;
        } else {
            vector += `${arreglo[index]}`;
        }
    }
    console.log(vector);
}

 let texto : string = rls.question("Ingrese un texto: ");
 let array : string [] = texto.split("");
escribirTexto(array);