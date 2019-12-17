export default class CityController{
    constructor(model){
        this.model = model;
    }

    addCity(city){
        this.model.addNewCity(city);
    }

    removeCity(index){
        this.model.removeCity(index);
    }
}