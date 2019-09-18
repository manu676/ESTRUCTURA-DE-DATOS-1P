export default class Tablero{
    constructor(){
        this._casillas = new Array(100).fill(0);
    }
    get casillas(){
        return this._casillas;
    }
    abrirTablero(){
        this._escalerasCasillas();
        this._serpienteCasilla();
    }
    _serpienteCasilla(){
        this._casillas[85] = -42;
        this._casillas[79] = -17;
        this._casillas[74] = -6;
        this._casillas[52] = -14;
        this._casillas[45] = -41;
        this._casillas[20] = -19;
        this._casillas[30] = -11;
        this._casillas[60] = -22;
        this._casillas[98] = -48;
        this._casillas[65] = -35;

    }
    _escalerasCasillas(){
        this._casillas[76] = +21;
        this._casillas[54] = +24;
        this._casillas[49] = +31;
        this._casillas[41] = +23;
        this._casillas[25] = +45;
        this._casillas[15] = +18;
        this._casillas[6] = +22;
        this._casillas[9] = +25;
    }
}
let tablero1 = new Tablero();
tablero1.abrirTablero();
//console.log(tablero1.casillas);
