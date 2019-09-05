import Corredor from "./corredor.js";
import Dado from "./dado.js";

class Carrera {
    constructor(carrera){
        this._carrera = carrera;
        this._participantes = new Corredor();
    }
    get carrera(){
        return this._carrera;
    }
    competencia(){
        let competidores = this._participantes.avanzar();
    }
}
let btnCompetir = document.querySelector("#competir").addEventListener("click", () => {
    let carrera1 = new Carrera(1);
    carrera1.competidores = 0;
})