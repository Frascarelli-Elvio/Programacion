import * as rls from 'readline-sync'

let tamanio : number = 3;
let array1 : number[] = new Array (tamanio);
let array2 : number[] = new Array (tamanio);
let array3 : number[] = new Array (tamanio);


function cargarVector (vector : number[] , cantidad : number , n : number) {
    for (let index = 0; index < cantidad ; index++) {
        let posicion : number;
        posicion = index + 1;
        vector[index] = rls.questionInt("Cargue el valor "+posicion+" del vector " + n + ": ");
    }
}
function sumarVector (vector1 : number[] , vector2 : number[] , vector3 : number[] , largo : number) {
    for (let index = 0; index < largo ; index++) {
        vector3[index] = vector1[index] + vector2[index]
        console.log(`Vector suma de 1 y 2: ${vector3[index]}`);
    }
}
cargarVector(array1 , tamanio , 1);
cargarVector(array2 , tamanio , 2);
sumarVector(array1, array2 , array3 , tamanio);
console.log(array3)


/* for (let index = 0; index < 6; index++) {
    let posicion : number;
    posicion = index+1;
    array1[index] = rls.questionInt("Cargue el valor "+posicion+" del vector 1: ");
    array2[index] = rls.questionInt("Cargue el valor "+posicion+" del vector 2: ");
    array3[index] = array1[index]+array2[index];
};


for (let index = 0; index <6; index++) {
    
    console.log(array3[index]);
};
console.log(array3) */