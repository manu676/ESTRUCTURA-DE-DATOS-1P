export default class Azar {
    constructor() {
        this._azar = 0;
    }
    aleatorio() {
        return (Math.trunc(Math.random(this._azar) * 100) + 1);
    }
}
let btnNumeroAzar = document.querySelector("#aleatorio").addEventListener("click", () => {
    let a1 = new Azar();
    Number(a1.aleatorio()).value;
    console.log(a1.aleatorio());
});