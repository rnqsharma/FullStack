import { IFlights } from "../model/IFlights";
import { Observable, defer, from } from "rxjs";

class FlightService {
    
    public getFlights = (): Observable<IFlights[]> => {
        return defer(() => {
            {
                return from<Promise<IFlights[]>>(
                    fetch(`http://localhost:4000/flightsData`)
                    .then(r => r.json())
                    .then(this.mapToFlights)
                );
            }
        });
    }

    public getFlightByID = (flightid: string): Observable<IFlights> => {
        console.log(flightid);
        return defer(() => {
            {
                return from<Promise<IFlights>>(
                    fetch(`http://localhost:4000/flightsData/${flightid}`)
                    .then(r => r.json())
                    // .then(this.mapToFlightID)
                );
            }
        });
    }

    private mapToFlights = (flights: IFlights[]): IFlights[] => {
        return flights.map(this.mapToFlight);
    }

    private mapToFlightbyID = (flights: IFlights): IFlights => {
        return this.mapToFlightbyID(flights);
    }

    private mapToFlightID(flight: IFlights) : IFlights {
        return {
            id: flight.id,
            flightCompany: flight.flightCompany,
            departureName: flight.departureName,
            departureTime: flight.departureTime,
            arrivalName: flight.arrivalName,
            arrivalTime: flight.arrivalTime,
            price: flight.price,
            duration: flight.duration,
            economy: flight.economy,
            business: flight.business,
        };
    }

    private mapToFlight(flight: IFlights) : IFlights {
        return {
            id: flight.id,
            flightCompany: flight.flightCompany,
            departureName: flight.departureName,
            departureTime: flight.departureTime,
            arrivalName: flight.arrivalName,
            arrivalTime: flight.arrivalTime,
            price: flight.price,
            duration: flight.duration,
            economy: flight.economy,
            business: flight.business,
        };
    }
}

export default new FlightService();