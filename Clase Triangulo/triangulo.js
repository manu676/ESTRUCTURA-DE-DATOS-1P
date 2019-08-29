class Triangulo{
    constructor(){
        this._base= 0;
        this._altura = 0;
    }
        area(){
            return (this._base*this._altura)/2;
        }
    }
let t1= new Triangulo();
t1._base = 3;
t1._altura =2;
console.log(t1.area());
