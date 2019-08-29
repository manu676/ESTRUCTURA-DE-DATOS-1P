class Dado{
    constructor(){
        this.caras = [1,2,3,4,5,6];
    }
    lanzar(){
        return Math.floor(Math.random()*6 +1)
    }
}
let btnLanzar = document.querySelector("#lanzar").addEventListener("click",()=>{
    dado1 = new Dado();
    let suma = 0 ;
    let cara1 = 0;
    let cara2 = 0;
    let cara3 = 0;
    let cara4 = 0;
    let cara5 = 0;
    let cara6 = 0;
    for(i=1; i<=100; i++){
        let contador = dado1.lanzar();
        if(contador === 1){
            cara1 += 1;
            //return cara1;
        }
        if(contador === 2){
            cara2 += 1;
            //return cara2;
        }
        if(contador === 3){
            cara3 += 1;
            //return cara3;
        }
        if(contador === 4){
            cara4 += 1;
            //return cara4;
        }
        if(contador === 5){
            cara5 += 1;
            //return cara5;
        }
        if(contador === 6){
            cara6 += 1;
            //return cara6;
        }
        console.log(contador);
    }
    suma = cara1 +cara2 +cara3+ cara4 +cara5 +cara6;
    console.log(suma);
        
})
