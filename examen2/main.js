import Rutas from "./ruta.js";
import Base from "./bases.js";

class Main{
    constructor(){
        this._text = ""
        this._Ruta = new Ruta();
        this._base = new Base();
    }
    toString(){
        console.log("La ruta" + this._Ruta.camion)
    }
}