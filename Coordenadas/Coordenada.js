class Punto{
    constructor(x,y){
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
    distancia(pd){
        return Math.sqrt(((pd.x-this._x)**2) + ((pd.y-this._y)**2));
    }
    toString(){
        return "(" + this._x + "," + this._y + ")";
    }
}
let btnAvanzar = document.querySelector("#coordenada").addEventListener("click", () => {
    let p1 = new Punto(2,1);
    console.log(toString(p1))
    let p2 = new Punto(5,8);
    let distancia1 = p1.distancia(p2);
    console.log(distancia1);
})

