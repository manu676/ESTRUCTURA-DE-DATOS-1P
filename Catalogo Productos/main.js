import Inventario from "./inventario.js";

class Main {
    constructor() {
        this._tableInventario = new Inventario();
    }
    default(){
        let obj1 = {
            codigo: "001",      
            nombre: "Camisa",        
            precio: "$12" ,   
            cantidad:  "30" ,     
            descripcion: "Camisa Negra"      
        };
        let obj2 = {
            codigo: "002",      
            nombre: "Pantalon",        
            precio: "$12" ,   
            cantidad:  "30" ,     
            descripcion: "Pantalon Negro"      
        };
        let obj3 = {
            codigo: "003",      
            nombre: "Playera",        
            precio: "$12" ,   
            cantidad:  "30" ,     
            descripcion: "Playera Negra"      
        };
        //Meterlos directamente a la funcion del Inventario
        this._tableInventario.guardarProducto(obj1);
        this._tableInventario.guardarProducto(obj2);
        this._tableInventario.guardarProducto(obj3);
        //Va a mostrar el inventario
        this.imprimirInventario();
    }
    //Crear objetos 
    objetosProductos() {
        let objProductos = {
            codigo: document.getElementById("codigo").value,
            nombre: document.getElementById("nombre").value,
            precio: document.getElementById("precio").value,
            cantidad: document.getElementById("cantidad").value,
            descripcion: document.getElementById("descripcion").value
        };
        return objProductos;
    }
    //Envia el formulario para el envio 
    enviarProductoNuevo() {
        this._tableInventario.guardarProducto(this.objetosProductos());
    }
    imprimirInventario() {
        let divTexto = document.getElementById("inventarioTexto");
        this._tableInventario.inventarioTexto();
        divTexto.innerHTML = this._tableInventario.texto;

    }
    eliminarProducto(){
        let codigoEliminar = document.getElementById("eliminar").value;
        this._tableInventario.borrarProducto(codigoEliminar);
        this.imprimirInventario();
    }
    buscarProducto() {
        let codigo = document.getElementById("buscar").value;
        let divResultado = document.getElementById("resultadoBusqueda");
        divResultado.innerHTML = this._tableInventario.consultarProducto(codigo);
    }
    insetarProducto(producto,posicion){
        console.log(producto,posicion);
        this._tableInventario.agregarPosicion(producto,posicion);
    }
}
var m = new Main();
m.default();
let btnAgregar = document.querySelector("#btnAgregar").addEventListener("click", () => {
    m.enviarProductoNuevo();
    m.imprimirInventario();
})
let btnBuscar = document.querySelector("#btnBuscar").addEventListener("click", () => {
    m.buscarProducto();
})
let btnInsertar = document.getElementById("btnInsertar").addEventListener("click", () => {
    let datos = m.objetosProductos();
    let posicision  = document.getElementById("posicion").value;
    m.insetarProducto(datos,posicision);
    m.imprimirInventario();
})
let btnEliminar = document.getElementById("btnEliminar").addEventListener("click", () =>{
    m.eliminarProducto();
})