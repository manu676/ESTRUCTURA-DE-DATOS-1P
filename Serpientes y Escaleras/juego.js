import Jugador from  "./jugadores.js";
import Tablero from "./tablero.js";

export class Juego{
    constructor(){
        this._jugador1 = new Jugador(1);
        this._jugador2 = new Jugador(2)
        this._tablero = new Tablero();
    }
    get ganador(){
        return this._ganador;
    }
    _obtenerGanadorToString(jugador){
        if (jugador.posicion >=100){
            console.log("El jugador " + jugador.numeroJugador + " ha sido el triunfador!!!!");
        }
    }
    iniciar(){
        this._tablero.abrirTablero();
        let jugador1 = this._jugador1;
        let jugador2 = this._jugador2;
        while (jugador1.posicion <100 && jugador2.posicion <100){
            jugador1.mover();
            jugador1.tostring(jugador1);
            this._checarCasilla(jugador1);
            this._obtenerGanadorToString(jugador1);
            jugador2.mover();
            jugador2.tostring(jugador2);
            this._checarCasilla(jugador2);
            this._obtenerGanadorToString(jugador2);
        }
        
    }
    _checarCasilla(jugador){
        let casillas = this._tablero.casillas [jugador.posicion - 1];
        if (casillas > 0){
            console.log("El jugador " + jugador.numeroJugador + " ha caido en una escalera, subirá " + casillas);
            this._casillaEspecial(jugador, casillas);
        }
        else if (casillas < 0){
            console.log("El jugador " + jugador.numeroJugador + " ha caido en una serpiente, bajará " + casillas);
            this._casillaEspecial(jugador, casillas);
        }
    }
    _casillaEspecial(jugador, valor){
        jugador.movimientoEspecial(valor);
        jugador.tostring();

    }
}
let juego1 = new Juego();
juego1.iniciar();