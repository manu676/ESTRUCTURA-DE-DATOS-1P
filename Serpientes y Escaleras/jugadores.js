import Dado from "./dado.js";

export default class Jugador{
    constructor(numeroJugador) {
        this._jugador = numeroJugador;
        this._posicion = 0;
        this._dado = new Dado();
    }
    get posicion() {
        if (this._posicion >= 100) {
            return 100;
        } else 
        return this._posicion;
    }
    get numeroJugador(){
        return this._jugador;
    }
    mover() {
        let cara = this._dado.lanzar();
        this._posicion += cara;
    }
    movimientoEspecial(valor){
        this._posicion += valor;
    }
    tostring() {
        console.log("El jugador " + this._jugador + " esta en: " + this.posicion);
    }
}
/*let jugador1= new Jugador()
//let jugador2 = new Jugador(2)
for(let i =1 ; i <=5 ; i++){
    jugador1.mover();
    jugador1.tostring();
    //jugador2.mover();
    //jugador2.tostring();    
}

//console.log(jugador1);
//console.log(jugador2);*/