//import Ruta from "./ruta.js";

class Recorridos {
    constructor(){
        this._contador = 0;
        this._newRuta = new Ruta();
    }
    get contador(){
        return this._contador;
    }
    contadorRuta(){
        while(this._newRuta = 1){
            this._newRuta +=1;
        }
    }
    toString(){
        console.log("La ruta" + this._newRuta + "ha recorrido" + this.contadorRuta() + "bases");
    }
}