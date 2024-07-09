/*si el caracter es una vocal reemplazar aeiou por . , ; : !  respectivamente.
si el caracter es un número o un operador matemático (+ - * / ) queda igual.
si el caracter es una consonante minúscula pasar a mayúscula y viceversa.
*/

import * as rls from 'readline-sync'

let clave : string = rls.question("Ingrese clave a convertir: ")
console.log(`La palabra clave ingresada es: ${clave}, su nueva clave es: ${mostrarClave(clave)}.`);

function mostrarClave (pclave : string) : string {
    let vocales : string = "aeiou";
    let signos : string = ".,;:!";
    let numeros : string = "0123456789+-*/";
    let clave : string = "";
    for (let index = 0; index < pclave.length; index++) {
        if (numeros.indexOf(pclave[index]) >= 0) {
            clave += pclave[index] 
        } else {
            if (vocales.indexOf(pclave[index]) >= 0) {
                clave += signos[vocales.indexOf(pclave[index])]
            } else {
                if (pclave[index] == pclave[index].toUpperCase()) {
                    clave += pclave[index].toLowerCase()
                } else {
                    clave += pclave[index].toUpperCase()
                }
            }
            
        }
        
    }
    return clave
}