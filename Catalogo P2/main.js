import Inventory from "./inventario.js";

class Main{
    constructor(){
        this._tableInventory = new Inventory();
    }
    get table(){
        return this._tableInventory;
    }
    objProducts(){
        let objProductos =  {
            code: document.getElementById("code").value,
            name: document.getElementById("name").value,
            price : document.getElementById("price").value,
            quantity : document.getElementById("quantity").value,
            description : document.getElementById("description").value
        };
        return objProductos;
    }
    sendInfoProduct(){
        this._tableInventory.saveProduct(this.objProducts());
    }
    printInventory(){
        let divInventory = document.getElementById("textInventory");
        this._tableInventory.recordInventory();
        divInventory.innerHTML = this._tableInventory.text;
    }
    deletrProduct(){
        let codeDelete = document.getElementById("delete").value;
        this._tableInventory.quitFromInventory(codeDelete);
        this.printInventory();
    }
    searchProduct(){
        let codeSearch = document.getElementById("search").value;
        let divResultFromSearch = document.getElementById("resultSearch");
        divResultFromSearch.innerHTML = this._tableInventory.consultFromInventory(codeSearch);
        
    }
}
var m = new Main();

let btnAdd = document.querySelector("#btnAdd").addEventListener("click",()=>{
    m.sendInfoProduct();
    m.printInventory();
})
let btnSearch = document.querySelector("#btnSearch").addEventListener("click",()=>{
    m.searchProduct();
})
let btnDelete = document.querySelector("#btnDelete").addEventListener("click",()=>{
    m.deletrProduct();
})
