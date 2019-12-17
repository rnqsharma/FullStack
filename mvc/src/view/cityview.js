import City from '../model/city';
import CityController from '../controller/citycontroller';

export default class CityView{
    constructor(elements = {}){
        this.elements = elements;
        this.city = new City();
        this.cityController = new CityController(this.city);
    }

    init(){

        this.render(this.city.cities);

        this.city.cityAdded.subscribe((newCities)=>{
            this.render(newCities);
        })
        this.city.cityRemoved.subscribe((newCities)=>{
            this.render(newCities);
        })
        this.elements.addBtn.addEventListener('click', ()=>{
            console.log("jsdgfgds");
            let city = prompt('Enter a new city');
            if(city)
            this.cityController.addCity(city);
        })
        this.elements.removeBtn.addEventListener('click', ()=>{
            console.log("ahgdf");
            let index = this.elements.cityList.options.selectedIndex;
            if(index != -1)
            this.cityController.removeCity(index);
            
        })
    }

    render(newCities){
        this.elements.cityList.innerHTML='';
        newCities.forEach((city)=>{
            let option = new Option(city, city);
            this.elements.cityList.appendChild(option);
        })
    }
}