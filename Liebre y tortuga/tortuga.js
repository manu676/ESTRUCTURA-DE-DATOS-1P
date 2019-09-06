//import Azar from "./numeroAzar.js";
import Corredor from "./corredor.js";

export default class Tortuga extends Corredor{
    constructor(posicion){
        super(posicion);
    }
    avanzarT(){
        let numeroAzar = this._numeroazar.aleatorio();
        if (numeroAzar <=50){
            this._posicion +=3;
        }
        else if (numeroAzar >50 && numeroAzar <=70){
            this._posicion -=6;
        }
        else{
            this._posicion++;
        }
        console.log(numeroAzar);
    }
}
let btnTortuga = document.querySelector("#tortuga")
.addEventListener("click", () => {
    let t1 = new Tortuga();
    for(let i=0; i <=5; i++){
        t1.avanzarT();
        console.log("Tortuga posicion es: "+ t1.posicion);
    }
})
