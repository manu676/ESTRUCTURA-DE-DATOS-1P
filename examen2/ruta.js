import Bases from "./bases.js";

class Ruta{
    constructor(){
        this._rutas = new Array(10).fill(0);
        this._bases = new Bases();
    }
    get camion(){
        return this._rutas;
    }
    dispocicionRuta(){
        if(this._rutas = 0){
            console.log("La ruta esta en una base");
        }else{
            console.log("La ruta no ha llegado a ninguna base");
        }
    }
}