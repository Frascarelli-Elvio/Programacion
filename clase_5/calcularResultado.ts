import * as rls from 'readline-sync';

let numero1 : number = rls.questionInt("Ingrese el primer valor: ");
let numero2 : number = rls.questionInt("Ingrese el segundo valor: ");
let opcionMenu : number = rls.questionInt("Poner 1 para sumar, 2 para restar o cualquieo otra tecla para salir.");
let memoriaResultado : number = 0

while (opcionMenu==1||opcionMenu==2) {
    memoriaResultado = calcularResultado(numero1,numero2,opcionMenu);

dibujarGuiones(25);
console.log(" el resultado es: "+memoriaResultado);
dibujarGuiones(50);
numero1 = rls.questionInt("Ingrese el primer valor: ");
numero2 = rls.questionInt("Ingrese el segundo valor: ");
opcionMenu = rls.questionInt("Poner 1 para sumar, 2 para restar o cualquieo otra tecla para salir.");
};

function calcularResultado(numero1:number,numero2:number,opcionMenu:number) : number {
    let resultado : number = 0;
    if (opcionMenu == 1) {
        resultado = numero1 + numero2;
    } else {if (opcionMenu == 2) {
        resultado = numero1 - numero2;
    }
        
    }
return resultado;
}
    

function dibujarGuiones(nGuiones : number) {
    let i : number, linea : string = "";
    for (i = 0; i <= nGuiones; i++) {
        linea = linea +"-";
        
    }
    console.log(linea);
}