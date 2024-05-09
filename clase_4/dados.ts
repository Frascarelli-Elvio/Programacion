 import * as rls from 'readline-sync';

 let numeroDados : number;
 let probabilidad : number;
 numeroDados = rls.questionInt("ingrese la cantidad de dados para los que desea clcular probalidad: ");

 probabilidad = 6**numeroDados;

 console.log("Su probabilidad de sacar ",numeroDados," veces 6 es ", "1/",probabilidad);

 