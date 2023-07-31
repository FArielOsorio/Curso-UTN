const prompt = require("prompt-sync")({sigint:true});

let numeroOne = parseInt(prompt("INGRESE EL NUMERO UNO: "));
let numeroTwo = parseInt(prompt("INGRESE EL NUMERO DOS: "));
let op = prompt("INGRESE LA OPERACION A REALIZAR: 1-SUMA 2-RESTA 3-MULTIPLICACION");

const opeFunction = (a,b,c) =>{
    let result="";
    if(op==1){
        result = a+b;
    }
    else if (op==2){
        result = a-b;
    }
    else {
        result = a*b;
    }
    console.log(result);
    return(result);
}
let suma = opeFunction(numeroOne,numeroTwo,op);
console.log(suma*100);