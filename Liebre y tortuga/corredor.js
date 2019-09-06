import Azar from "./numeroAzar.js";

export default class Corredor {
    constructor() {
        this._posicion = 0;
        this._numeroazar = new Azar();
    }
    get posicion() {
        if (this._posicion < 0) {
            return 0;
        } else if (this._posicion >= 100) {
            return;
        } else {
            return this._posicion;
        }
    }
}