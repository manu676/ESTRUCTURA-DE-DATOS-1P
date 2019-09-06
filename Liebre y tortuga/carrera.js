import Tortuga from "./tortuga.js";
import Liebre from "./liebre.js";
import Corredor from "./corredor.js";

class Competicion extends Corredor {
    constructor(posicion) {
        super(posicion)
        this._liebre = new Liebre();
        this._tortuga = new Tortuga();
    }
    get posicion() {
        return this._posicion;
    }
    carrera() {
        let liebre = this._liebre
        let tortuga = this._tortuga
        while (liebre.posicion < 90 && tortuga.posicion < 90) {
            //for(let i=0; i<=30; i++){
            liebre.avanzarL();
            console.log("Liebre " + liebre.posicion);
            tortuga.avanzarT();
            console.log("Tortuga " + tortuga.posicion);
        }
    }
}
let btnAvanzar = document.querySelector("#competicion").addEventListener("click", () => {
    let carrera1 = new Competicion();
    carrera1.carrera();
    if (liebre.posicion >= 90 && tortuga.posicion >= 90) {
        console.log("Ambos han ganado");
    } else if (liebre.posicion <= tortuga.posicion) {
        console.log("La tortuga ha ganado");
    } else(liebre.posicion >= tortuga.posicion)
    console.log("La liebre ha ganado");
})