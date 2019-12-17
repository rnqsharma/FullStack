import Observer from "../observer/cityobserver";

export default class City{
    constructor(cities=['Bengaluru', 'Delhi', 'Mumbai']){
        this.cities = cities;
        this.cityAdded = new Observer();
        this.cityRemoved = new Observer();
    }

    addNewCity(city){
        if(city)
            this.cities.push(city);
            this.cityAdded.notify(this.cities);
    }

    removeCity(index){
        if(index != -1)
        this.cities.splice(index, 1);
        this.cityRemoved.notify(this.cities);
    }
}