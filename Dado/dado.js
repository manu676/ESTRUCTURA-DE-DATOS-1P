class Dado {
    constructor() {}
    lanzar() {
        /*Math.random()= siempre es un numero entre el 0 y .99...; lo que hacemos es que se muntiplica 
        *6 para que de de 0-5.9999 y sumamos +1 para que inicie en 1, 
        Math.floor = math.trunc */
        return Math.floor((Math.random() * 6) + 1)
    }
}

let caras = [0, 0, 0, 0, 0, 0];
let dado1 = new Dado();

let btnLanzar = document.querySelector("#lanzar").addEventListener("click", () => {
    for (i = 1; i <= 100; i++) {
        //dado1.lanzar(), lo cual es el numero al azar de 1-6 
        sumacaras(dado1.lanzar());
    }
    carasContador();
})

function sumacaras(number) {
    //Los numeros normales tienen que empezar en el vector[0] hasta vector [5]
    caras[number - 1]++;
}

function carasContador() {
    for (var i = 0; i < 6; i++) {
        console.log("La cara " + (i+1) + " se obtuvo " + caras[i]);
    }
}