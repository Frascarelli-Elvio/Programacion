/* Cree un string de al menos 15 caracteres (sin que el usuario lo ingrese). Cuente la cantidad de A, E y 
O que hay en ese string y almacene esas cantidades en otro arreglo de 3 elementos en el orden que usted desee.*/


//frase que con la que deseo trabajar
let texto : string = "esta semana viaje a cordoba y no estudie";
//arreglos
let arrayTexto : string [] = texto.split("");
let arrayVocales : number [] = new Array;
//funcion para contar las vocales y cargar el arrayVocales, parametros 2 arreglos
function contarVocales (frase : string[] , vocales : number[]) {
    let letraA : number = 0;
    let letraE : number = 0;
    let letraO : number = 0;
    for (let index = 0; index < frase.length; index++) {
       if (frase[index] == "a") {
        letraA ++;
        vocales[0] = letraA;
       }
       if (frase[index] == "e") {
        letraE ++;
        vocales[1] = letraE;
       }
       if (frase[index] == "o") {
        letraO ++;
        vocales[2] = letraO;
       }               
  }

}
//mostrar arreglo
function mostrarArreglo (vector : number[]) {
    for (let index = 0; index < vector.length; index++) {
        console.log(vector[index]);
    }
}
console.log ("Trabajaremos con la frase: " + texto );
contarVocales(arrayTexto,arrayVocales);
console.log("Las cantidades de letras 'a' , 'e' y 'o' son respectivamente: ");
mostrarArreglo(arrayVocales);
obtenerPromedio(arrayVocales);

//suma
/*function sumarArreglo(arreglo: number[]): number {
    let suma: number = 0;
    for ( let i = 0; i < arreglo.length; i++) {
        suma += arreglo[i];
    }
    return suma;
}
*/
//prueba
let nota : number = 6;

function establecerColorPorNota(valor: number): string {
    let color : string;
    if (valor >= 0 && valor < 7) {
        color = "rojo";
    }
    else { 
    if (valor >=7 && valor <= 10) {
        color = "verde";
    } else {
        color = "gris";
    }
} 
return color
}

console.log(establecerColorPorNota(nota));
//promedio
function obtenerPromedio(arr:number[]){    
    let suma: number = sumarArreglo(arr);
    let promedio: number = suma / arr.length;
    console.log(promedio);
}
function sumarArreglo (array : number[]) : number {
    let suma : number = 0;
    for (let index = 0; index < array.length; index++) {
        suma += array[index];
    }
    return suma;
}