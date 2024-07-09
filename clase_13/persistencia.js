"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var node_fs_1 = require("node:fs");
var texto = "Hola JS guardo esto en persistencia";
node_fs_1.default.writeFileSync('./test.txt', texto); //solo string!!!!
var numeroPueba = 5;
var numeroPruebaTexto = numeroPueba.toString();
node_fs_1.default.writeFileSync('./testtexto.txt', numeroPruebaTexto);
var array = ['Aitana', 'Amaia', 'Carla', 'Elvio', 'Braian'];
var auxiliar = "";
for (var index = 0; index < array.length; index++) {
    auxiliar += "".concat(array[index], " "); //template string ---> mas variable y espacio
} //Guardamos informacion en txt
node_fs_1.default.writeFileSync('./nombres.txt', auxiliar);
console.log('Hecho');
//traigo el archivo txt
var dato = node_fs_1.default.readFileSync('./nombres.txt', 'utf8');
console.log(dato);
var dato2 = dato.trim();
var nuevoArray = dato2.split(" ");
console.log(nuevoArray);
