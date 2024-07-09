/*Desarrolle un algoritmo que permita cargar alumnos y sus notas en los tres trimestres
Se debe permitir obtener el promedio anual (es decir, de sus tres notas) de un alumno (ingresado por el usuario)
Luego de resolverlo, pensar en aprovechar métodos y discutir cómo representar la información
*/

import * as rls from 'readline-sync'

//let total : number = rls.questionInt(`Cuantos alumos desea guardar: `);
let alumnos : string [] = [];
let notas : number [][] = [];

/* function cargarArray (vector : string[] , vector2 : number[][] , n : number ) {
    for (let i = 0; i < n; i++) {
        vector[i] = rls.question(`Ingrese alumno: `);
        let arrayAux = new Array (3);
        for (let index = 0; index < 3; index++) {
            let posicion : number = index + 1;
            arrayAux[index] = rls.questionInt(`Ingrese ${posicion} º nota: `)
        }
        vector2[i] = arrayAux;
    }
}*/
let seguir : string = "si";
let alumno : string;

function cargarMatriz (v1 : any , v2 : number[][]) {
    let contador : number = 0;
    while (seguir == "si") {
        let arrayAux = new Array (3);
        v1[contador] = rls.question(`Ingrese alumno: `);
        for (let index = 0; index < 3; index++) {
            arrayAux[index] = rls.questionInt(`Nota: `);
        }
        v2[contador] = arrayAux;
        contador ++;
        seguir = rls.question(`Desea cargar otro alumno?? ingrese "si" para seguir: `);
    }
}
function buscarAlumno (array1 : any, alumno : string) : number {
    let posicion : number = 0;
    for (let i = 0; i < array1.length; i++) {
        if (alumno == array1[i]) {
            posicion = i;
        }
    }
    return posicion;
}
function sacarPromedio (v2 : number [][] , n : number) : number {
    let promedio : number = 0;
    for (let i = 0; i < 3; i++) {
        promedio = promedio + v2[n][i];
    }
    promedio = promedio / 3;
    return promedio;
}
//cargarArray(alumnos,notas,total);
cargarMatriz(alumnos,notas);
//console.log(alumnos);
//console.log(notas);
alumno = rls.question(`Que alumno desea consultar?: `);
console.log(`El promedio del alumno ${alumno} es ${sacarPromedio(notas,buscarAlumno(alumnos,alumno))}.`);
