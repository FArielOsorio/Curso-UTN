import datosPersonales from "./datosPersonales.js";



export default class TypePerson extends datosPersonales{

    constructor(nombre,apellido,edad,type){
        super(nombre,apellido,edad); //importa de datosPersonales
        this.type = type;
    }

    ejemplo() {
        console.log(`${this.type}, ${super().firstName}`)
    }


}