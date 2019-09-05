export default class Dado {
    constructor() {
        this._dado = 0;
    }
    lanzar() {
        /*Math.random()= siempre es un numero entre el 0 y .99...; lo que hacemos es que se muntiplica 
        *6 para que de de 0-5.9999 y sumamos +1 para que inicie en 1, 
        Math.floor = math.trunc */
        return(Math.trunc(Math.random(this._dado)*6) +1);  
    }
}
let btnLanzar = document.querySelector("#lanzar").addEventListener("click", () => {
    let d1 = new Dado();
    Number(d1.lanzar()).value;
    console.log(d1.lanzar());
});   