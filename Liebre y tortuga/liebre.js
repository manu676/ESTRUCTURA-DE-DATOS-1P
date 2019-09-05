import Azar from "./numeroAzar.js";

export default class Liebre{
    constructor(){
        this._contador = 0;
        this._numeroazar = new Azar();
    }
    get contador(){
        return this._contador;
    }
    avanzarT(){
        let numeroAzar = this._numeroazar.aleatorio();
        if (numeroAzar === 1 || numeroAzar === 2){
            this._contador +=0;
        }
        else if (numeroAzar === 3 || numeroAzar === 4){
            this._contador +=9;
        }
        else if (numeroAzar === 5){
            this._contador -=12;
        }
        else if (numeroAzar <=8){
            this._contador ++;
        }
        //Como puedo poner el 35% y el 15%
        else{
            this._contador -=2;
        }
        console.log(numeroAzar);
    }
}
let btnliebre = document.querySelector("#liebre")
.addEventListener("click", () => {
    let l1 = new Liebre;
    for(let i=0; i <=5; i++){
        l1.avanzarT();
        console.log("Liebre posicion es: "+ l1.contador);
    }
})
