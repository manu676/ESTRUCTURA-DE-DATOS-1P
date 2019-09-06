//import Azar from "./numeroAzar.js";
import Corredor from "./corredor.js"

export default class Liebre extends Corredor{
    constructor(posicion){
        super(posicion);
    }
    avanzarL(){
        let numeroAzar = this._numeroazar.aleatorio();
        if (numeroAzar <=20){
            this._posicion +=0;
        }
        else if (numeroAzar <=40){
            this._posicion +=9;
        }
        else if (numeroAzar >40 && numeroAzar <=50){
            this._posicion -=12;
        }
        else if (numeroAzar >=51 && numeroAzar <=85){
            this._posicion ++;
        }
        else{
            this._posicion -=2;
        }
        console.log(numeroAzar);
    }
}
let btnliebre = document.querySelector("#liebre")
.addEventListener("click", () => {
    let l1 = new Liebre;
    for(let i=0; i <=5; i++){
        l1.avanzarL();
        console.log("Liebre posicion es: "+ l1.posicion);
    }
})
