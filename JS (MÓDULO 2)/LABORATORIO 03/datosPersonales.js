/** definir una clase
 * class
 */

export default class datosPersonales {
    firstName;
    lastName;
    birthday;
    constructor(nombre,apellido,edad){
        this.firstName = nombre;
        this.lastName = apellido;
        this.birthday = edad;
    }

    /**setter => set modificar */
    /*setFirstName = () =>{
                                //ES LO MISMO QUE ABAJO, DOS FORMAS DE FUNCION
    }*/
    setFirstName(name){ //metodo publico
        this.firstName = name;
        this.#hola();
    }
/*
    set firstName(name){
        this.firstName = name;
    }
    /**getter => get mostrar */

    getFirstName(){ //metodo publico
        return this.firstName;
    }
/*
    get firstName(){
        return this.firstName;
    }*/

    /**METODO ESTATICO => NO ES NECESARIO TENER INSTANCIADA LA CLASE */
    static holaMundo() {
        console.log("hola....");
    }

    #hola(){ //metodo privado (se usa #)
        console.log("prueba..."); //los metodos privados no se heredan
    }

}