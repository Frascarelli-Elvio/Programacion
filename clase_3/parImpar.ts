import * as readlineSync from 'readline-sync';

let numero : number = readlineSync.questionInt("Ingrese su numero: ");

let resto : number = numero % 2;

if (numero==0)  {console.log("El numero ingresado es 0, por favor ingrese otro distinto.")
    
    } else 
    if (resto==0) 
                { console.log("El numero ingresado es PAR.")
    
    }else { console.log("El numero ingresado es IMPAR.")
    
} {
    
}