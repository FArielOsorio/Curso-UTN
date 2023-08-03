const ejemplo = (a,x,y,z) =>{
    let suma = a+x+y+z;
    
}


console.log(ejemplo(3,2,1,0))

/** OBJETO DECLARAMOS */

let firstName = "Facundo"

const persona = {
    firstName,
    lastName: "Osorio",
    birthday: 28,
    status: true,
    fullName: function(){
        return `${this.firstName} ${this.lastName}`;
    }
};

persona.address="CABA";
console.log(persona);

console.log(persona.firstName);
console.log(persona["firstName"]);
console.log(persona.address);
console.log(persona.fullName());