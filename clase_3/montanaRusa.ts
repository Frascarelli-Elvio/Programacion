import * as readlineSync from 'readline-sync';

let altura : number = readlineSync.questionInt("Ingrese su altura en cm: ");

if (altura>=130) {console.log("Puede ingresar a la montaña rusa")
    
} else {console.log("No puede ingresar a la montaña rusa, SU ALTURA NO ES LA ADECUADA")
    
};

