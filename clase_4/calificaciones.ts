import * as rls from 'readline-sync';

let alumno : string; 
let practica : number;
let problemas : number;
let teoria : number;
let promedio : number;
let cadenaTextovacia ="";

alumno = rls.question("Nombre del alumno: ");

while (alumno!=cadenaTextovacia) {
    practica = rls.questionInt("Ingrese nota de practicas: ");
    problemas = rls.questionInt("Ingrese nota de resolucion de problemas: ");
    teoria = rls.questionInt("Ingrese nota de teoria: ");
    if (0<=practica && practica<=10 && 0<=problemas && problemas<=10 && 0<=teoria && teoria<=10) {
        promedio = practica*0.1+problemas*0.5+teoria*0.4
        console.log("Alumno: "+alumno);
        console.log("Nota de practicas: "+practica);
        console.log("Nota de problemas: "+problemas);
        console.log("Nota de teoria: "+teoria);
        console.log("El promedio del alumno "+alumno+" es: "+promedio);
        alumno = rls.question("Nombre del alumno: ");
    } else {console.log("Error. Por favor vuelva e empezar.");
    alumno = rls.question("Nombre del alumno: ");
    
    }
};
