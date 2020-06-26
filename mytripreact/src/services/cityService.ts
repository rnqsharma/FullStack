import { Observable, defer, from } from "rxjs";
import { ICity } from "../model/ICity";

class CityService {
    
    public getCityDetails = (): Observable<ICity[]> => {
        return defer(() => {
            {
                return from<Promise<ICity[]>>(
                    fetch(`http://localhost:4000/cityDetails`)
                    .then(r => r.json())
                    .then(this.mapToCities)
                );
            }
        });
    }

    private mapToCities = (cities: ICity[]): ICity[] => {
        return cities.map(this.mapToCity);
    }

    private mapToCity(city: ICity) : ICity {
        return {
            id: city.id,
            cityName: city.cityName
        };
    }
}

export default new CityService();