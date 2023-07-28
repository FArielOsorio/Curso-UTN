alert("Ingrese 3 valores");

let a = prompt("Ingrese el primer valor: ");
let b = prompt("Ingrese el segundo valor: ");
let c = prompt("Ingrese el tercer valor: ");

if(a>b && a>c){
    alert("El mayor de los números es: ",a);
}
else if(b>a && b>c){
    alert("El mayor de los números es: ",b);
}
else if(c>a && c>b){
    alert("El mayor de los números es: ",c)
}
else {
    alert("El mayor es: ");
}