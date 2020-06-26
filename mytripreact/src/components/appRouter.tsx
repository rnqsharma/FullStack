import * as React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import App from '../App';
import SearchFlights from './search-flights';
import Header from './header';
import  SearchClass  from './searchClass';
// import Saaaa from './ss';
import FlightList from './flightList';
import ReviewBooking from './reviewTickets';
import LoginComponent from './loginComponent';
import WelcomeComponent from './welcome';

const AppRouter: React.FC = () => {
    
    return (

        <App>
            <Router>
                    <Switch>
                    {/* <Route exact path="/welcome" component={WelcomeComponent} /> */}
                        <Route path="/">
                        <Route exact path="/welcome" component={WelcomeComponent} />
                            <Header/>
                            
                            {
                                <Route exact path="/" component={SearchClass} />
                            }
                        <Route exact path="/flightList" component={FlightList} />
                        <Route exact path="/reviewBooking" component={ReviewBooking} />
             
                        </Route>
                        
                    </Switch>
            </Router>
        </App>
    );
}

export default AppRouter;