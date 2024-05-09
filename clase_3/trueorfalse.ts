let numero1 : number;
let numero2 : number;
numero1= 4;
numero2= 5;
let resultado : boolean;
resultado= numero1<numero2;

 console.log(resultado);

 import *as readlineSync from 'readline-sync';
 let numero3 : number = readlineSync.questionInt("ingrese un valor: ");
 let comparacion : boolean = numero3==5;
 
console.log(comparacion);
