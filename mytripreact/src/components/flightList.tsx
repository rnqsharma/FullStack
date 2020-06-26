import * as React from 'react'
import { withRouter, RouteComponentProps } from 'react-router-dom';
import { IFlights } from '../model/IFlights';
import flightService from '../services/flightService';
import { Card, CardActionArea, CardMedia, CardContent, Typography, CardActions, Button, Grid, CardHeader, Radio, RadioGroup, FormControlLabel, FormControl, FormLabel } from '@material-ui/core';
import MaterialUIPickers from './basicDatePicker';
import { KeyboardDatePicker } from '@material-ui/pickers';
import FromCityPopover from './fromCityPopover';
import Footer from './footer';
import airasia from '../images/AirAsia.png';
import spicejet from '../images/Spicejet.png';
import vistara from '../images/Vistara.png';
import goair from '../images/GoAir.png';
import airindia from '../images/AirIndia.png';
import indigo from '../images/Indigo.png';
import FooterFunctional from './footerFunctional';
import FilterHeader from './filterHeader';
import { ICity } from '../model/ICity';
import cityService from '../services/cityService';
import ProgressBar from './progressBar';

interface IStateCompB {
    data: string;
    flights: Array<IFlights>;
    flightsRound: Array<IFlights>;
    departureFlightID: string;
    arrivalFlightID: string;
    flightPop: IFlights;
    departureFlight: IFlights;
    arrivalFlight: IFlights;
    citiesArray: ICity[];
    loadingComponent: boolean;
    oneway: boolean;
        // flightDetails: IFlights;
}

const div2 = {
    fontSize: '15px',
    marginTop: '19px',
    // size: 
}

const roundContainer = {
    // backgroundColor : "#E1F8FF",
    height: "100%",
    marginLeft: '15%',
    flexGrow: 1,
    marginBottom: "11%"
}

const span2 = {
    fontSize: '15px',
    marginTop: '10%',
}

const hrClass = {
    // border: '1px solid    black',
    width: "70px",
    height: "30px"
    // size: "10"
}

const flightCard = {
    width: '70%',
    margin: 'auto',
}

const durationStyle = {
    marginTop: "15px"
}

const divDeparture = {
    marginLeft: "-50px",
    marginTop: "20px"
}

const subStyle = {
    fontSize: "13px"
}

const roundHeading = {
    marginLeft: "75px"
}

const cardStyle = {
    // height: "170px"
    backgroundColor: "#fdfdfd",
    borderRadius: 7
}

const footer = {
    // position: "fixed",
    bottom: 0,
    width: "100%",
    height: "165px",
    lineHeight: "50px",
    backgroundColor: "#E1F8FF",
    margin: "auto",
    right: 0,
    zIndex: 15,
}


class FlightList extends React.Component<RouteComponentProps, IStateCompB> {

    // classes = useStyles();

    img: any;
    checkBoolean: boolean = false;

    from: string = '';
    to: string = '';
    departure: string = '';
    return: string = '';
    oneway: boolean = false;
    flightsArray: Array<IFlights> = [];
    flightsArrayRound: Array<IFlights> = [];
    departureFlightID: string = "";
    arrivalFlightID: string = "";
    defValue = "SG-195";
    flightPop: IFlights = {
        id: '',
        flightCompany: '',
        departureName: '',
        departureTime: '',
        arrivalName: '',
        arrivalTime: '',
        price: 0,
        duration: '',
        economy: 0,
        business: 0
    };
    departureFlight: IFlights = {
        id: '',
        flightCompany: '',
        departureName: '',
        departureTime: '',
        arrivalName: '',
        arrivalTime: '',
        price: 0,
        duration: '',
        economy: 0,
        business: 0
    };
    returnFlight: IFlights = {
        id: '',
        flightCompany: '',
        departureName: '',
        departureTime: '',
        arrivalName: '',
        arrivalTime: '',
        price: 0,
        duration: '',
        economy: 0,
        business: 0
    };
    // flights: Array<IFlights> = [];
    flightDet: IFlights = {
        id: '',
        flightCompany: '',
        departureName: '',
        departureTime: '',
        arrivalName: '',
        arrivalTime: '',
        price: 0,
        duration: '',
        economy: 0,
        business: 0
    };

    dd: string = "";
    aa: string = "";
    constructor(props: any) {
        super(props);
        this.state = {
            data: '',
            flights: [],
            flightsRound: [{
                id: "",
                flightCompany: "",
                departureName: "",
                departureTime: "",
                arrivalName: "",
                arrivalTime: "",
                price: 0,
                duration: "",
                economy: 0,
                business: 0,
            }],
            departureFlightID: '',
            arrivalFlightID: '',
            flightPop: {
                id: '',
                flightCompany: '',
                departureName: '',
                departureTime: '',
                arrivalName: '',
                arrivalTime: '',
                price: 0,
                duration: '',
                economy: 0,
                business: 0
            },
            departureFlight: {
                id: '',
                flightCompany: '',
                departureName: '',
                departureTime: '',
                arrivalName: '',
                arrivalTime: '',
                price: 0,
                duration: '',
                economy: 0,
                business: 0
            },
            arrivalFlight: {
                id: '',
                flightCompany: '',
                departureName: '',
                departureTime: '',
                arrivalName: '',
                arrivalTime: '',
                price: 0,
                duration: '',
                economy: 0,
                business: 0
            },
            citiesArray: [{id:"",cityName:""}],
            loadingComponent: false,
            oneway: false,
        }
        this.setProp();
        if (this.props.location.state.tripType === "Oneway") {
            console.log(this.state.oneway);
            this.setState({oneway: true});
            console.log(this.state.oneway);
        }
        this.dd = "SG-197";
        this.aa = "SG-196";
       
    }

    

    componentDidMount() {

        
        setTimeout(() => {
            this.setState({loadingComponent: true})
            console.log(this.state.loadingComponent);
        }, 1000);

        if (this.props.location.state.tripType === "Oneway") {
            console.log(this.state.oneway);
            this.setState({oneway: true});
            console.log(this.state.oneway);
        }
            this.setCitiesDetails();        
            this.setFlightsDetail();

    }

    setCitiesDetails(){
        cityService.getCityDetails().subscribe((cities: ICity[]) => {
            console.log(cities);
            cities.map((data:any)=>{
                this.state.citiesArray.push(data);
            })
           
        }           );
            console.log(this.state.citiesArray);
            this.setState({citiesArray: this.state.citiesArray});
    }

    setFlightsDetail() {
        flightService.getFlights().subscribe((flights: IFlights[]) => {
            console.log(flights);

            flights.map(f => {
                console.log(f);
                console.log(this.from + " " + f.departureName + " " + f.arrivalName + " " + this.to);
                if (f.departureName === this.from && f.arrivalName === this.to) {
                    console.log(f);
                    this.flightsArray.push(f);
                    this.flightDet = f;
                }

                if (f.arrivalName === this.from && f.departureName === this.to) {
                    this.flightsArrayRound.push(f);
                }
                if(f.id === this.dd) {
                    this.setState({departureFlight: f});
                } else if(f.id === this.aa) {
                    this.setState({arrivalFlight: f});
                }
            })

            console.log(this.flightsArray);
            this.setState({ flights: this.flightsArray });
            this.setState({departureFlightID: flights[0].id,flightPop : this.state.flights[0]})
            
            console.log(this.state.departureFlightID);
            this.dd = this.state.departureFlightID;
            console.log(this.dd);
            console.log(this.state.flightPop);
            console.log(this.state.flightPop.id);
            this.defValue = this.state.flightPop.id;
            console.log(this.defValue);
            if (this.flightsArrayRound.length > 0) {
                this.setState({ flightsRound: this.flightsArrayRound });
            }
            this.setState({arrivalFlightID: this.state.flightsRound[0].id});
            console.log(this.state.flights);

        })

    }


    setProp() {
        console.log(this.props.location.state.to);
        this.from = this.props.location.state.from;
        this.to = this.props.location.state.to;
        this.departure = this.props.location.state.departure;
        this.return = this.props.location.state.return;
    }

    routeButtonClick = (flightID: string) => {
        this.props.history.push("/reviewBooking", {
            departureId: flightID,
            arrivalId: ""
        });
    }

    handleChangeRadio = (event: React.ChangeEvent<HTMLInputElement>) => {
        console.log(event.target.value);
        console.log("df");
    }

    setDepartureFlightID = (event: React.ChangeEvent<HTMLInputElement>) => {
        // this.departureFlightID = event.target.value;
        this.flightsArray.forEach((e) => {
            if(e.id === event.target.value) {
                this.departureFlight = e;
                this.setState({departureFlight: e});

            }
        })
        this.setState({departureFlightID: event.target.value});
    }

    setArrivalFlightID = (event: React.ChangeEvent<HTMLInputElement>) => {
        // this.arrivalFlightID = event.target.value;
        console.log(event.target.value);
        this.flightsArrayRound.forEach((e) => {
            if(e.id === event.target.value) {
                // this.returnFlight = e;
                this.setState({arrivalFlight: e});
            }
        })
        
    }

    setImage = (flightCompany : string) => {
        if(flightCompany === "Spicejet") {
            this.img = spicejet;
        } else if(flightCompany === "Vistara") {
            this.img = vistara;
        } else if(flightCompany === "IndiGo") {
            this.img = indigo;
        } else if(flightCompany === "AirAsia") {
            this.img = airasia;
        } else if(flightCompany === "GoAir") {
            this.img = goair;
        } else {
            this.img = airindia;
        }
    }
check = (cBool: boolean): any =>{
    if(cBool){
        console.log("in check");
        console.log(this.state.departureFlight.id)
        console.log(this.state.departureFlightID + " " + this.state.arrivalFlightID)
        sessionStorage.setItem("progressCounter", "1");
        this.props.history.push("/reviewBooking", {
            departureId: this.state.departureFlight.id,
            arrivalId: this.state.arrivalFlight.id
        });
    }
}
nextPath =(e:any)=>{
    console.log(e);
    console.log(e.from + " " + e.to + " " + e.tripType);
    if(e.from && e.to) {
        console.log(e.from + " " + e.to);   
        this.from = e.from;
        this.to = e.to;
        this.flightsArray.splice(0, this.flightsArray.length);
        this.flightsArrayRound.splice(0, this.flightsArrayRound.length);
        this.setFlightsDetail();
        // this.forceUpdate();
    }
    if(e.tripType === "OneWay") {
        this.setState({oneway: true});
        console.log(this.state.oneway);
    } else {
        this.setState({oneway: false});
    }

}

    render = () => {
        return (
            <div>
{
    !this.state.loadingComponent ? <ProgressBar /> :
 

<div>

<FilterHeader cityArray={this.state.citiesArray} nextPath={e=>this.nextPath(e)}  ></FilterHeader>
                
        <div  className="container-fluid" >
                
            <br />         
            
            
                {
                    this.state.oneway ?
                    this.state.flights.map((f) => {
                        return (
                            <div key={f.id} className='flightCard' style={flightCard}>
                                {/* <Card className='container-fluid row'>
                                    <div className="col-sm-12">
                                        <CardContent>
                                            <Typography gutterBottom variant="h5" component="h2">
                                                <div className="container-fluid row">
                                                    <div className="col-sm-2">
                                                        {f.flightCompany}<br /><span style={span2}>{f.id}</span>
                                                    </div>
                                                    <div className="col-sm-2" style={div2}>
                                                        {f.id}
                                                    </div>
                                                    <div className="col-sm-2" style={div2}>
                                                        {f.departureTime}
                                                    </div>
                                                    <div className="col-sm-2" style={div2}>
                                                        {f.duration} <br />
                                                        <hr className='hrClass' />
                                                    </div>
                                                    <div className="col-sm-2" style={div2}>
                                                        {f.arrivalTime}
                                                    </div>
                                                    <div className="col-sm-2" style={div2}>
                                                        <Button onClick={() => this.routeButtonClick(f.id)} variant="contained" color="primary">
                                                            Book
                                                        </Button>
                                                    </div>
                                                </div>
                                            </Typography>
                                        </CardContent>
                                    </div>
                                </Card> */}



                                        {/* <div key={f.id} className='flightCard'> */}
                                                <Card className='container-fluid row' style={cardStyle}>
                                                
                                                    <CardContent>

                                                        <Grid container>
                                                            <Grid container spacing={3}>
                                                            <Grid item xs={12}>
                                                            
                                                            <CardActions>
                                                            {
                                                                    this.setImage(f.flightCompany) 
                                                                }
                                                                <img src={this.img} style={{width: "40px", height: "40px"}}></img>
                                                                    <Typography variant="caption" display="block" gutterBottom>
                                                                    {f.flightCompany} {f.id}

                                                                </Typography>
                                                                
                                                                {/* </div>/ */}
                                                                
                                                             </CardActions>
                                                            </Grid>

                                                            <Grid item xs={3} >
                                                                <Typography variant="h6" gutterBottom>
                                                                    {f.departureTime}
                                                                    <Typography style={subStyle} variant="subtitle1" gutterBottom>
                                                                        {f.departureName}
                                                                    </Typography>
                                                                </Typography>
                                                            </Grid>
                                                            <Grid item xs={3}>
                                                                <Typography variant="overline" style={durationStyle}>
                                                                    {f.duration} <br />
                                                                    <hr style={hrClass} />

                                                                </Typography>
                                                            </Grid>

                                                            <Grid item xs={3}>
                                                                <Typography variant="h6" gutterBottom>
                                                                    {f.arrivalTime}
                                                                    <Typography style={subStyle} variant="subtitle1" gutterBottom>
                                                                        {f.arrivalName}
                                                                    </Typography>
                                                                </Typography>
                                                            </Grid>

                                                            <Grid item xs={2}>
                                                                <Typography variant="h6" gutterBottom>
                                                                    ₹{f.price}
                                                                </Typography>
                                                            </Grid>
                                                            <Grid item xs={1}>
                                                            <Button onClick={() => this.routeButtonClick(f.id)} variant="contained" color="primary">
                                                            Book
                                                        </Button>
                                                            </Grid>
                                                            </Grid>
                                                        </Grid>

                                                    </CardContent>
                                                    
                                                </Card>
                                                <br />
                                            {/* </div>           */}





                                
                            </div>
                            
                        )})
                        :
                        
                        <div className="container" style={roundContainer}>
                        <Grid container justify="center" spacing={1} style={{marginLeft:"-35px"}}>
                            {/* <Grid container item xs={12} spacing={3}> */}
                            <Grid item sm={5}>

                                <Typography variant="h6">
                                    Departure Flight<br />
                                </Typography>
                                <Typography variant="button">
                                    {this.from} to {this.to}
                                </Typography>

                                {
                                    // <FormControl component="fieldset">
                                    
                                    <RadioGroup row aria-label="gender" defaultValue={this.dd} name="gender2" onChange={this.setDepartureFlightID}> 
                                    
                                    {this.state.flights.map((f) => {
                                        return (
                                            <div key={f.id} className='flightCard'>
                                                <Card className='container-fluid row' style={cardStyle}>
                                                
                                                    <CardContent>

                                                        <Grid container spacing={3}>
                                                            <Grid item xs={12}>
                                                            
                                                            <CardActions>
                                                                    
                                                                    <Radio
                                                                        color="primary"
                                                                        // onChange={() => this.setDepartureFlightID}
                                                                        value={f.id}
                                                                    />
                                                                    <Typography variant="caption" display="block" gutterBottom>
                                                                    {f.flightCompany} | {f.id}

                                                                </Typography>
                                                                {
                                                                    this.setImage(f.flightCompany) 
                                                                }
                                                                <img src={this.img} style={{width: "40px", height: "40px", marginLeft: "180px"}}></img>
                                                                {/* </div>/ */}
                                                                
                                                    </CardActions>
                                                            </Grid>

                                                            <Grid item xs={3} >
                                                                <Typography variant="h6" gutterBottom>
                                                                    {f.departureTime}
                                                                    <Typography style={subStyle} variant="subtitle1" gutterBottom>
                                                                        {f.departureName}
                                                                    </Typography>
                                                                </Typography>
                                                            </Grid>
                                                            <Grid item xs={4}>
                                                                <Typography variant="overline" style={durationStyle}>
                                                                    {f.duration} <br />
                                                                    <hr style={hrClass} />

                                                                </Typography>
                                                            </Grid>

                                                            <Grid item xs={3}>
                                                                <Typography variant="h6" gutterBottom>
                                                                    {f.arrivalTime}
                                                                    <Typography style={subStyle} variant="subtitle1" gutterBottom>
                                                                        {f.arrivalName}
                                                                    </Typography>
                                                                </Typography>
                                                            </Grid>

                                                            <Grid item xs={2}>
                                                                <Typography variant="h6" gutterBottom>
                                                                    ₹{f.price}
                                                                </Typography>
                                                            </Grid>
                                                        </Grid>

                                                    </CardContent>
                                                    
                                                </Card>
                                                <br />
                                            </div>

                                        )
                                    }

                                    )
                                }
                                    </RadioGroup>
                                    // </FormControl>

                                    
                                    
                                
                            }


                            </Grid>
                            <Grid item sm={5}>

                            <Typography variant="h6" style={roundHeading}>
                                    Return Flight<br />
                                </Typography>
                                <Typography variant="button" style={roundHeading}>
                                    {this.to} to {this.from}
                                </Typography>


                                <RadioGroup row aria-label="gender" defaultValue={this.aa} name="gender2" onChange={e=>this.setArrivalFlightID(e)}> 

                                {
                                    this.state.flightsRound.map((f) => {
                                        return (
                                                <div key={f.id} className='flightCard'>
                                                    <Card className='container-fluid row' style={cardStyle}>
                                                    
                                                        <CardContent>
    
                                                            <Grid container spacing={3}>
                                                                <Grid item xs={12}>
                                                                
                                                                <CardActions>
    
    
                                                                        <Radio
                                                                            color="primary"
                                                                            // onChange={() => this.setArrivalFlightID}
                                                                            value={f.id}
                                                                        />
                                                                        <Typography variant="caption" display="block" gutterBottom>
                                                                        {f.flightCompany} | {f.id}
    
                                                                    </Typography>
                                                                    {
                                                                    this.setImage(f.flightCompany) 
                                                                }
                                                                <img src={this.img} style={{width: "40px", height: "40px", marginLeft: "180px"}}></img>
                                                                
                                                                    
                                                        </CardActions>
                                                                </Grid>
    
                                                                <Grid item xs={3}>
                                                                    <Typography variant="h6" gutterBottom>
                                                                        {f.departureTime}
                                                                        <Typography style={subStyle} variant="subtitle1" gutterBottom>
                                                                            {f.departureName}
                                                                        </Typography>
                                                                    </Typography>
                                                                </Grid>
                                                                <Grid item xs={4}>
                                                                    <Typography variant="overline" style={durationStyle}>
                                                                        {f.duration} <br />
                                                                        <hr style={hrClass} />
    
                                                                    </Typography>
                                                                </Grid>
    
                                                                <Grid item xs={3}>
                                                                    <Typography variant="h6" gutterBottom>
                                                                        {f.arrivalTime}
                                                                        <Typography style={subStyle} variant="subtitle1" gutterBottom>
                                                                            {f.arrivalName}
                                                                        </Typography>
                                                                    </Typography>
                                                                </Grid>
    
                                                                <Grid item xs={2}>
                                                                    <Typography variant="h6" gutterBottom>
                                                                        ₹{f.price}
                                                                    </Typography>
                                                                </Grid>
                                                            </Grid>
    
                                                        </CardContent>
                                                        
                                                    </Card>
                                                    <br />
                                                </div>
                                                
    
                                            
                                        )
                                    })
                                }
                                </RadioGroup>




                            </Grid>
                            {/* </Grid> */}
                        </Grid>
                        

                    </div>


                                





            }
            <div style={{backgroundColor: "#e7e5e4", height:"10%"}}></div>
            <br /><br /><br /><br /><br /><br />

            {/* <Footer departureFlightID={this.state.departureFlightID} returnFlightID={this.state.arrivalFlightID} ></Footer> */}
            {
                !this.state.oneway ? <FooterFunctional check={e=>this.check(e)} departureFlight={this.state.departureFlight} returnFlight={this.state.arrivalFlight} /> : null
            }
            

        </div> 
        
        </div>
                }
         </div>

        
        
        );

            


        }
    
    
}

export default withRouter(FlightList);