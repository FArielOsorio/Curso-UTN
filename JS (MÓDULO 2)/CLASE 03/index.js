const prompt = require("prompt-sync")({sigint:true});

/**REALIZAR LAS TABLAS DE MULTIPLICAR, DIVIR, SUMAR, RESTAR
 * DADA LA OPCION Y NUMERO INGRESADO POR EL USUARIO
 */

const tablaSumar = (x) =>{
    let i=1;
    console.log("TABLA DE SUMAR: ")
    while(i<=10){
        console.log(`${i} + ${x} = ${i+x}`);
        i++;
    }
    document.write("<br>")
}


const tablaRestar = (y) =>{
    let i=1;
    console.log("TABLA DE RESTAR: ")
    while(i<=10){
        console.log(`${i} - ${y} = ${i-y}`);
        i++;
    }
    
    
}



const tablaMult = (z) =>{
    let i=1;
    console.log("TABLA DE MULTIPLICAR: ");
    while(i<=10){
        console.log(`${i} * ${z} = ${i*z}`);
        i++;
    }
}



const tablaDiv = (l) =>{
    let i=1;
    console.log("TABLA DE DIVIDIR: ");
    while(i<=10){
        console.log(`${i} / ${l} = ${i/l}`);
        i++;
    }
}


let numero = prompt("INGRESE NUMERO: ");
let tabla = prompt("1. SUMA 2. RESTA 3. DIVISION 4. MULTIPLICACION");

switch(tabla){
    case '1': tablaSumar(parseInt(numero)); break;
    case '2': tablaRestar(parseInt(numero)); break;
    case '3': tablaDiv(parseInt(numero)); break;
    case '4': tablaMult(parseInt(numero)); break;
    default : console.log("No ingreso la opcion correcta"); break;

}