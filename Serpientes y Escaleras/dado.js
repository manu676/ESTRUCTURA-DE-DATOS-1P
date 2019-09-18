export default class Dado {
    constructor() {

    }
    lanzar() {
        return (Math.ceil(Math.random() * 6));
    }
}