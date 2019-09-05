import Azar from "./numeroAzar.js";
//import Corredor from "./Carrera/corredor";

export default class Tortuga{
    constructor(){
        this._contador = 0;
        this._numeroazar = new Azar();
    }
    get contador(){
        return this._contador;
    }
    avanzarT(){
        let numeroAzar = this._numeroazar.aleatorio();
        if (numeroAzar <=5){
            this._contador +=3;
        }
        else if (numeroAzar === 6 || numeroAzar === 7){
            this._contador -=6;
        }
        else{
            this._contador++;
        }
        console.log(numeroAzar);
    }
}
let btnTortuga = document.querySelector("#tortuga")
.addEventListener("click", () => {
    let t1 = new Tortuga;
    for(let i=0; i <=5; i++){
        t1.avanzarT();
        console.log("Tortuga posicion es: "+ t1.contador);
    }
})
