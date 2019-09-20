import Producto from "./producto.js"

export default class Inventario {
    constructor() {
        this._inventario = new Array();
        this._texto = "";
    }
    get inventario() {
        return this._inventario;
    }
    get texto() {
        return this._texto;
    }
    guardarProducto(objProductos) {
        let nuevoProducto = new Producto(objProductos);
        this._inventario[this._inventario.length] = nuevoProducto;
        //this._inventario.push(nuevoProducto);
        console.log(nuevoProducto);
        console.log(this._inventario);

    }
    consultarProducto(codigoX) {
        let inventario = this._inventario;
        let indice = this._verificarExistencia(codigoX);
        if (indice >= 0) {
            return inventario[indice].toString();
        }
    }
    agregarPosicion(producto, posicion) {
        //Se crea objeto de productos 
        let nuevoProducto = new Producto(producto);
        //el vector se le resta "1" para que empiece en el "0" y la posicion se le resta "1" para contar el "0"
        for (let i = this._inventario.length - 1; i >= posicion - 1; i--) {
            this._inventario[i + 1] = this._inventario[i];
        }
        this._inventario[posicion - 1] = nuevoProducto;
    }
    borrarProducto(codigoX) {
        let indice = this._verificarExistencia(codigoX);
        if (indice >= 0) {
            for (let i = indice+1; i <= this._inventario.length; i++) {
                this._inventario[i-1] = this._inventario[i];
                console.log(this._inventario)
            }
        }
        let newInventario = [];
        for(let i = 0; i <= this._inventario.length-2; i++) {
            newInventario[i] = this._inventario[i];
        }
        this._inventario = newInventario;
        console.log(newInventario, this._inventario);
    }
    _verificarExistencia(codigo) {
        for (let i = 0; i < this._inventario.length; i++) {
            //hace la comparativa 
            if (this._inventario[i].codigo === codigo) {
                return i;
            }
        }
        return -1;
    }
    inventarioTexto() {
        this._historialString();
    }
    _historialString() {
        this._texto = "";
        for (let i = 0; i < this._inventario.length; i++) {
            //console.log(this._inventario[i].toString());
            this._texto += this._inventario[i].toString() + "<br>";
        };
    }
}