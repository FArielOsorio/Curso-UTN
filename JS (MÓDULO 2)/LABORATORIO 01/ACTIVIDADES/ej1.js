document.write("Ingrese 3 valores");

let a,b,c,d,mayor;
a = parseint(prompt("Ingrese el primer número: "));
b = parseint(prompt("Ingrese el segundo número: "));
c = parseint(prompt("Ingrese el tercer número: "));

if (a>b){
    d = a;
}
else {
    d = b;
}

if (d>c){
    mayor = d;
}
else {
    mayor = c;
}

document.write("El mayor número es: ",mayor);