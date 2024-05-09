import * as readlineSync from 'readline-sync';

const clave = "eureka";
let contador : number;
let claveUsuario : string;
contador = 1;
claveUsuario = readlineSync.question("Ingrese su clave: ");

while (claveUsuario!=clave && contador<3) {
    console.log("clave incorrecta.");
    claveUsuario = readlineSync.question("Ingrese su clave: ");
    contador++;
}
if (claveUsuario==clave) {
    console.log("BIENVENIDO a su cuenta.")
    
} else { console.log("No tiene mas intentos.")
    
};



