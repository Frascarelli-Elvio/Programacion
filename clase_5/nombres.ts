/*Implemente un método llamado imprimirNombre que reciba un nombre y un apellido y
devuelva los dos datos concatenados en una variable de tipo string. 
El string devuelto debe imprimirse por consola.

Refactorizar el método dibujarGuiones utilizado para el ejercicio de la calculadora 
realizado anteriormente */
import * as rls from 'readline-sync';

let solicitoNombre : string;
let solicitoApellido : string;
let seguimos : string;
seguimos = " ";


function inmprimirNombre(nombre : string, apellido : string) {
    let nombreCompleto : string;
    nombreCompleto = nombre +" "+apellido;
    console.log(nombreCompleto);
};

while (seguimos != "no") {
    solicitoNombre = rls.question("Especifique su nombre completo: ");
    solicitoApellido = rls.question("Especifique su apellido: ");
    inmprimirNombre(solicitoNombre,solicitoApellido);
    seguimos = rls.question("Desea continuar ?? ingrese 'no' para salir: ");
}