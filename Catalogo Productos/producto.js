export default class Producto{
    constructor(articulo){
        this._codigo = articulo.codigo;
        this._nombre = articulo.nombre.toUpperCase();
        this._precio = articulo.precio;
        this._cantidad = articulo.cantidad;
        this._descripcion = articulo.descripcion;
    }
    get codigo(){
        return this._codigo;
    }
    get nombre(){
        return this._nombre;
    }
    get precio(){
        return this._precio;
    }
    set precio(precio){
        this._precio = precio;
    }
    get cantidad(){
        return this._cantidad;
    }
    set cantidad(cantidad){
        this._cantidad = cantidad;
    }
    get descripcion(){
        return this._descripcion;
    }
    set descripcion(descripcion){
        this._descripcion = descripcion;
    }
    toString(){
        return "El producto " +this._nombre + " con el codigo " + this._codigo + " tiene el costo de $" + this._precio + 
        " hay de existencia " + this._cantidad + " . " + "Tiene la descripcion de " + this._descripcion;
    }
}