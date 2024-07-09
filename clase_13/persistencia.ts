import fs from 'node:fs';

let texto:string ="Hola JS guardo esto en persistencia";

fs.writeFileSync('./test.txt',texto); //solo string!!!!

let numeroPueba : number = 5;

let numeroPruebaTexto : string = numeroPueba.toString();
fs.writeFileSync('./testtexto.txt', numeroPruebaTexto);

let array : string []= ['Aitana', 'Amaia', 'Carla', 'Elvio', 'Braian'];
let auxiliar : string = "";

for (let index = 0; index < array.length; index++) {
    auxiliar += `${array[index]} `; //template string ---> mas variable y espacio
}//Guardamos informacion en txt
fs.writeFileSync('./nombres.txt',auxiliar);
console.log('Hecho');
                            //traigo el archivo txt
const dato : string = fs.readFileSync('./nombres.txt','utf8');
console.log(dato);
const dato2 : string = dato.trim();
const nuevoArray : string [] = dato2.split(" ");
console.log(nuevoArray);

