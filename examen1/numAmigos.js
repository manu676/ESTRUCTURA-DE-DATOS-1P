//Profe, no si se podia valer en clase. Perdone si no eso posible, es que recorde un ejercicio asi y se me hizo mas facil de recordar
//Debido a que se me hacia mas facil definir los "3000", de ahi hacer el vector que contara y se sumaran.
//Ademas que si ponia un contador en "0" era mas facil.
//Gracias, perdone
class Amigos{
    constructor(){
        this._cantidadNumeros = 3000;
        this._numerosPosibles = new Array(0);
        this._contador = 0;
    }
    get cantidadNumeros(){
        return this._cantidadNumeros;
    }
    get numerosPosibles(){
        return this._numerosPosibles;
    }
    encontrarAmigos(){
        for(var i = 1; i <= this._cantidadNumeros; i++){
            var contador = this._contador;
            for(var numero = 1; numero < i; numero++){
                if(i%numero === 0){
                    contador += numero;
                }
            }
            this.numerosPosibles[i] = contador;
        }
        for(var i = 1; i < this._cantidadNumeros; i++){
            for(var numero = 2; numero < this._cantidadNumeros; numero++){
                if(this._numerosPosibles[i] === numero){
                    if(this._numerosPosibles[numero] === i){
                        if (i < numero){
                            console.log("Los numeros siguientes son amigos: " + i + " " + numero);
                        }
                    }
                }
            }
        }
    }
    /*toString(){
        console.log("Los numeros siguientes son amigos: " + i + " " + numeros);
    }*/
}

let btnAmigos = document.querySelector("#numeroAmigos").addEventListener("click", () => {
    let amigos1 = new Amigos();
    amigos1.encontrarAmigos();
    console.log(amigos1.toString());
});
