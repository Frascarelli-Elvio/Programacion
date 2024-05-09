import * as readlineSync from 'readline-sync';
console.log("Por favor resgistre su usuario y contraseña.")
let login : string = readlineSync.question("Ingrese su usuario: ");
let contr : string = readlineSync.question("Ingrese su contraseña: ");
console.log("Su registro se realizo con exito.");

let usuario : string = readlineSync.question("Usuario: ");
let contrasena : string = readlineSync.question("Contraseña: ");
if (login==usuario && contr==contrasena ) {console.log("BIENVENIDO A SU CUENTA")
    
} else {console.log("el usuario o contraseña son incorrectos.")
    
};
