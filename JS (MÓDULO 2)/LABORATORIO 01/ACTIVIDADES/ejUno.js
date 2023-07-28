document.write("Ingrese 3 valores");

let a,b,c,d,e,mayor,menor;
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

document.write("El número más grande es: ",mayor);

if (a<b){
    e = a;
}
else {
    e = b;
}

if (e<c){
    menor = e;
}
else {
    menor = c;
}

document.write("El número más chico es: ",menor);