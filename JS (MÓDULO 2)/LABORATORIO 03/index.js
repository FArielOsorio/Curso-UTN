/**importar una class */

import datosPersonales from "./datosPersonales.js";
import TypePerson from "./tipoPersona.js";

/**instanciar una clase
 * inicializar una clase
 */


const ejemplo = new datosPersonales("Juana","Perez",33); //instanciar la clase
console.log(ejemplo);

const b = new TypePerson("Juana","Perez",33,"profesor");
console.log(b);
datosPersonales.holaMundo();


