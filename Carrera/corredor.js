import Dado from "./dado.js";

export default class Corredor{
    constructor(numero){
        this._numero= numero;
        this._posicion = 0;
        this._dado = new Dado();
    }
    get posicion(){
        return this._posicion;
    }
    avanzar(){
        let cara = this._dado.lanzar();
        if (cara === 1){
            this._posicion +=3;
        }
        else if (cara <=3){
            this._posicion++;
        }
        else{
            this._posicion +=2;
        }
    }
}
let btnAvanzar = document.querySelector("#avanzar").addEventListener("click", () => {
    let corredor1 = new Corredor(1);
    let corredor2 = new Corredor(2);
    while(corredor1.posicion <100 && corredor2.posicion <100){
        corredor1.avanzar();
        console.log("c1  " + corredor1.posicion);
        corredor2.avanzar();
        console.log("c2 " + corredor2.posicion);
        
    }if(corredor1.posicion >100 && corredor2.posicion >100){
        console.log("Ambos han ganado");
    }
    else if(corredor1.posicion <= corredor2.posicion){
        console.log("El corredor 2 ha ganado");
    }else (corredor1.posicion >= corredor2.posicion)
        console.log("El corredor 1 ha ganado");
    return

});