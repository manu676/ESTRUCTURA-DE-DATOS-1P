class Punto{
    constructor(x = 0 ,y = 0 ){
        this._x = x;
        this._y = y;
    }
    get x(){
        return this._x;
    }
    set x (x){
        if(x >-100 && x<100){
            this._x = x;
        }
        else{
            return 0;
        }
    }
    get y(){
        return this._y;
    }
    set y (y){
        if(y >-100 && y<100){
            this._y = y;
        }
        else{
            return 0;
        }
    }
    distancia(pf){
        return Math.sqrt(((pf.x-this._x)**2) + ((pf.y-this._y)**2));
    }
}
var puntosXY = [];

let btnDistanciaEntre2 = document.querySelector("#coordenada").addEventListener("click", () => {
    let valorX = document.querySelector("#valorX").value;
    let valorY = document.querySelector("#valorY").value;
    let p1 = new Punto(valorX,valorY);
    puntosXY.push(p1);
    for(let i=0; i < puntosXY.length; i++){
        console.log(puntosXY[i]);
    }
    console.log(puntosXY);

})
