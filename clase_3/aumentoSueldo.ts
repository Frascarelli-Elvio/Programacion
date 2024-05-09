import * as readlineSync from 'readline-sync';

let sueldo : number = readlineSync.questionInt("Cual es su sueldo actual: ");

if (0<sueldo&&sueldo<=15000) {console.log("Usted tiene un aumento del 20%. Su proximo sueldo a cobrar es de "+sueldo*1.2)
    
} else if (15000<sueldo&&sueldo<=20000) {console.log("Usted tiene un aumento del 10%. Su proximo sueldo a cobrar es de "+sueldo*1.1)
    
} else if (20000<sueldo&&sueldo<=25000) {console.log("Usted tiene un aumento del 5%. Su proximo sueldo a cobrar es de "+sueldo*1.05)
    
} else {console.log("Su proximo sueldo a cobrar es de "+sueldo)
    
}{
    
}{
    
};
