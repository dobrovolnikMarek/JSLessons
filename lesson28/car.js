export default class Car{
    constructor(options){
        const {brand, model} = options;
        this.brand = brand;
        this.model = model;
    }

    get information(){
        return this.brand + " " + this.model;
    } 
}