// while
import * as readlinekSync from 'readline-sync';

let numero1 : number;
let numero2 : number;
let saludo : string;
saludo = "si";

while (saludo == "si") {
    numero1 = readlinekSync.questionInt("Ingrese un valor: ");
    numero2 = readlinekSync.questionInt("Ingrese segundo valor: ");
    console.log("Su resultado es: "+numero1*numero2);
    saludo = readlinekSync.question("Desea continuar?? si / no : ");
};

