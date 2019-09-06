export default class Azar {
    constructor() {
        this._azar = 0;
    }
    aleatorio() {
        /*Math.random()= siempre es un numero entre el 0 y .99...; lo que hacemos es que se muntiplica 
        *6 para que de de 0-5.9999 y sumamos +1 para que inicie en 1, 
        Math.floor = math.trunc */
        return(Math.trunc(Math.random(this._azar)*100) +1);  
    }
}
let btnNumeroAzar = document.querySelector("#aleatorio").addEventListener("click", () => {
    let a1 = new Azar();
    Number(a1.aleatorio()).value;
    console.log(a1.aleatorio());
});   
