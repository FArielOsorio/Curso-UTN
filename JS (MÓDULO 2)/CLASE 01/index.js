// case-sensitive (DISTINGUE MINUSCULA Y MAYUSCULA)

//camel-case (ej: holaMundo)

/* 3 FORMAS DE DECLARAR LA VARIABLES

var (se declara de forma global, se puede usar en todo el codigo)
let (local y en escala de bloque) { }
const (de solo lectura)


*/

var x = 3; // number
let y = '5'; // string
//{ }

const z = true; // boolean

function ejemplo(){
    let x = 6;
}

//COMO SABER QUE TIPO DE DATO ES UNA VARIABLE
//typeof


console.log(typeof x)
console.log(typeof y)
console.log(typeof z)

let  a=5;
let b=4;

console.log(a+b);
console.log(a/b);
console.log(a*b);
console.log(a%b);

/* OPERADORES DE COMPARACION

IGUALDAD SU VALOR ==
IGUALDAD IDENTICA ===
DIFERENTE !=
NO IDENTICO !==
MAYOR >
MAYOR QUE (>=)
MENOR QUE (<=)

*/

/** OPERADOR DE STRING + CONCATENAR */

let  aa="2";
let bb=2;

console.log(aa+bb);

a=10;
b=6;
let c;

/**OPERADORES LOGICOS
 * AND &&
 * OR  ||
 * TERNARIO ? : 
 * NOT !
 * NULLISH ?? (a ?? b)
 */

(a > b || b < c);

let xy = !(a>b) ? a : b;

let zk = c ?? b;