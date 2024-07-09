// array//

import *as rls from 'readline-sync';


let nombreMes : string [] = new Array(12);
nombreMes[0] = "enero";
nombreMes[1] = "febrero";
nombreMes[2] = "marzo"  ;
nombreMes[3] = "abril";
nombreMes[4] = "mayo";
nombreMes[5] = "junio";
nombreMes[6] = "julio";
nombreMes[7] = "agosto";
nombreMes[8] = "septiembre";
nombreMes[9] = "octubre";
nombreMes[10] = "noviembre";
nombreMes[11] = "diciembre";

let mes : number = rls.questionInt("Ingrese el numero de mes que sea saber: ");
let indice : number = mes - 1;

console.log(" El mes es: "+ nombreMes[(indice)]);
 