import Product from "./producto.js";

export default class Inventory{
    constructor(){
        this._inventory = new Array();
        this._text = "";
        this._maxQuantityProduct = 0;
    }
    get inventory(){
        return this._inventory;
    }
    get text(){
        return this._text;
    }
    //ANCHOR guardar objeto al vector
    saveProduct(productData) {
        if ((this._checkExist(productData.code) === -1) && (this._maxQuantityProduct < 20)) {
            let newProduct = new Product(productData);
            if (this._maxQuantityProduct === 0) {
                this._inventory[0] = newProduct;
                this._maxQuantityProduct++;
            } else {
                let position = this._searchProductBut(productData.code);
                for (let i = this._maxQuantityProduct  - 1; i > position - 1; i--) {
                    this._inventory[i + 1] = this._inventory[i];
                }
                this._inventory[position + 1] = newProduct;
                this._maxQuantityProduct++;
            }
        }
    }

    //NOTE verifica la existencia de un objeto en un array
    _checkExist(code) {
        let max = this._productQuantity  - 1,
            min = 0,
            medium = 0;

        if (this._maxQuantityProduct <= 2) {
            for (let i = 0; i < this._maxQuantityProduct; i++) {
                if (this._inventory[i].code == code) {
                    return i;
                }
            }
            return -1;
        } else {
            while (this._getDifference(min, max) >= 1) {
                medium = this._getHalf(min, max);
                if (code < this._inventory[medium].code) {
                    max = medium;
                } else {
                    min = medium;
                }
            }
            if (this._inventory[min].code == code) {
                return min;
            } else if (this._inventory[max].code == code) {
                return max;
            }
            return -1;
        }
    }
    _searchProductBut(code) {
        let maxium = this._maxQuantityProduct - 1,
            minium = 0,
            medium = 0;

        while (this._getDifference(minium, maxium) >= 1) {
            medium = this._getHalf(minium, maxium);
            if (code < this._inventory[medium].code) {
                maxium = medium;
            } else {
                minium = medium;
            }
        }
        if (code > this._inventory[maxium].code) {
            return maxium;
        } else {
            return minium; 
        }
    }
    ///////////////////////////////////////////////////////////
    //ANCHOR buscar en inventario
    consultFromInventory(codeX){
        let index = this._checkExist(codeX);
        if (index > -1) {
            return this._inventory[index].toString();
        }
    }
    /////////////////////////////////////////////////////////////
    //NOTE  operacion de diferencia y mitad
    _getHalf(x, y) {
        return Math.trunc((x + y) / 2);
    }

    _getDifference(x, y) {
        return (y - x) / 2;
    }
    /////////////////////////////////////////////////////////////////
    //ANCHOR borra producto
    quitFromInventory(codigoX) {
        let index = this._checkExist(codigoX);
        if (index >= 0) {
            for (let i = index+1; i <= this._maxQuantityProduct; i++) {
                this._inventory[i-1] = this._inventory[i];
            }
        }
        let newInventory = [];
        for(let i = 0; i <= this._maxQuantityProduct -2; i++) {
            newInventory[i] = this._inventory[i];
        }
        this._inventory = newInventory;
    }
    //////////////////////////////////////////////////////////
    //ANCHOR inventario en texto
    recordInventory(){
        this._listProduct();
    }
    //NOTE hace el recorrido del listado de los objetos  
    _listProduct() {
        //Limpia el texto cada vez que se sobrescribe
        this._text = "";
        for (let i = 0; i < this._maxQuantityProduct; i++) {
            //console.log(this._inventory[i].toString());
            this._text += this._inventory[i].toString() + "<br>";
        };
    }
}
let i = new Inventory();
i._checkExist();