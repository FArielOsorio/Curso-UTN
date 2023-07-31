const prompt = require("prompt-sync")({ sigint:true})

const tablaSuma = (s) =>{
    let i=1;
    console.log("TABLA DE SUMAR: ");
    while(i<=10) {
        console.log(`${i} + ${s} = ${i+s}`);
        i++
    }
}

const tablaResta = (r) =>{
    let i=1;
    console.log("TABLA DE RESTAR: ");
    while(i<=10){
        console.log(`${i} + ${r} = ${i+r}`);
        i++;
    }
}

const tablaMult = (m) =>{
    let i=1;
    console.log("TABLA DE MULTIPLICAR: ");
    while(i<=10) {
        console.log(`${i} * ${m} = ${i*m}`);
        i++;
    }
}

const tablaDiv = (d) =>{
    let i=1;
    console.log("TABLA DE DIVIDIR: ");
    while(i<=10) {
        console.log(`${i} / ${d} = ${i/d}`);
        i++;
    }
}

let numero = prompt("INGRESE UN NUMERO: ");
let tabla = prompt("1. SUMA 2. RESTA 3. MULTIPLICACION 4. DIVISION ");

switch(tabla) {
    case '1': tablaSuma(numero); break;
    case '2': tablaResta(numero); break;
    case '3': tablaMult(numero); break;
    case '4': tablaDiv(numero); break;
    default : console.log("INGRESO UNA OPCION INCORRECTA"); break;
}





