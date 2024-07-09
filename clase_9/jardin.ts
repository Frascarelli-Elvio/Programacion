
import * as rls from 'readline-sync'

let cantidad : number = rls.questionInt(`Cantidad de alumnos de la sala: `);
let color : string []= ["Azul" , "Verde" , "Amarilla"];
let capacidad : number[] = [40,35,30];

function compararCapacidad ( array1 : number[] , num : number ) : number {
    let posicion : number = 0;
    for (let i = 0; i < array1.length; i++) {
        if (num <= array1[i]) {
            posicion = i;
        };  
    }
    return posicion;
}
function asignarSala (arreglo : string[] , num : number) {
    console.log(`La sala asignada es: ${arreglo[num]} .`)
}
if (cantidad <= 40) {
    asignarSala(color,compararCapacidad(capacidad,cantidad));
} else {
    console.log(`El numero de alumnos supera la capacidad de las salas.`)
}