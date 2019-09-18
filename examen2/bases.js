class Base{
    constructor(longitud, latitud){
        this._base = Math.pow(longitud,latitud);
    }
    get base(){
        return this._base;
    }
}