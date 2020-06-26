import * as React from 'react';
import { Fragment } from 'react';
import { Card, CardContent, Typography, Button, CardActions, RadioGroup, FormControlLabel, Radio, Select, Input, FormLabel, FormHelperText, styled, createStyles, createMuiTheme } from '@material-ui/core';
import { withRouter, RouteComponentProps } from 'react-router-dom';
import flightService from '../services/flightService';
import { IFlights } from '../model/IFlights';
import { KeyboardDatePicker, MuiPickersUtilsProvider } from '@material-ui/pickers';
import DateFnsUtils from "@date-io/date-fns";

import InlineDatePickerDemo from './inlineDatePicker';
import MaterialUIPickers from './basicDatePicker';
import FromCity from './fromCity';
import FromCityPopover from './fromCityPopover';
import ComboBox from './fromCity';
import { ICity } from '../model/ICity';
import cityService from '../services/cityService';
import Alert from '@material-ui/lab/Alert';
import { makeStyles } from '@material-ui/styles';
import CustomizedSnackbars from './snackbar';
import NavBar from './NavBar';

interface ISearchState {
    to: string;
    from: string;
    departure: string;
    return: string;
    citiesArray: Array<ICity>;
    labelFrom: string;
    labelTo: string;
    showData: string;
    alertBool: boolean;
    message: string;
    SnackOpen: boolean;
    variation: "error" | "success" | "warning" | "info";
    tripTypeBool: boolean;
}

const fieldStyle = {
    marginRight: '30px',
}

const fieldStyle1 = {
    marginRight: '30px',
    width: '15%',
}

const divStyle = {
    margin: 'auto',
    marginTop: '7%',
    height: "100%",
    // width: "100%"
    // backgroundColor: "#e7e5e4"
}

const cardStyle = {
    width: '60%',
    margin: 'auto',
}

const cardContentStyle = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    // marginTop: '-60px'

}

const comboStyle = {
    marginRight: '2%'
}

const MyButton = styled(Button)({
    background: 'linear-gradient(45deg, #2196F3 30%, #21CBF3 90%)',
    border: 0,
    borderRadius: 3,
    boxShadow: '0 3px 5px 2px rgba(33, 203, 243, .3)',
    color: 'white',
    height: 48,
    padding: '0 30px',
  });


class SearchClass extends React.Component<RouteComponentProps, ISearchState> {


    from: string = '';
    to: string = '';
    tripType: string = 'Oneway';
    // classes = useStyles();

    citiesArr: Array<ICity> = [];
    returnValue: string = "Return :";
    // citiesArray: Array<ICity> = [];
    constructor(props: any) {
        super(props);
        this.state = {
            to: '',
            from: '',
            departure: '',
            return: '',
            citiesArray: [],
            labelFrom: '',
            labelTo: '',
            showData:'',
            alertBool: false,
            message: '',
            SnackOpen: false,
            variation: "info",
            tripTypeBool: true,
        }


        cityService.getCityDetails().subscribe((cities: ICity[]) => {
            console.log(cities);
            this.citiesArr = cities;
            this.setCitiesArray();
            // this.citiesArray = cities;
        })



    }


    componentDidMount() {
        flightService.getFlights().subscribe((flights: IFlights[]) => {
            console.log(flights);
        })

        if(this.state.to === '' && this.state.from === '') {
            this.setState({alertBool : true});
        }
    }

     handleClose1 = () => {
        this.setState({SnackOpen: false});
    }

    cities = ['Rohtak', 'Delhi', 'Bangalore'];


    fromCityBtn = (event: React.ChangeEvent<HTMLSelectElement>) => {
        console.log(event.target.value);
        this.setState({ from: event.target.value });
    }

    fromCityBtn1 = (event: React.ChangeEvent<HTMLSelectElement>) => void {
        // console.log(event.target.value);
        // this.setState({ from: event.target.value });
    }

    toCityBtn = (value: any) => {
        console.log(value);
        this.setState({ to: value });
    }

    setDeparture = (event: React.ChangeEvent<HTMLInputElement>) => {
        console.log(event.target.value);
        this.setState({ departure: event.target.value });
    }

    setReturn = (event: React.ChangeEvent<HTMLInputElement>) => {
        this.setState({ return: event.target.value });
    }

    nextPath(path: string) {
        console.log(this.from);
        console.log(this.to);
        let localData = this.from + "|" + this.to + "|" + this.state.departure + "|" + this.state.return + "|" + this.tripType;
            localStorage.setItem("data", localData);

            this.props.history.push(path, {
                from: this.from,
                to: this.to,
                departure: this.state.departure,
                return: this.state.return,
                tripType: this.tripType
            });     
    }

   showAlert=()=>{
        return(
            <Alert variant="outlined" severity="info">
                This is an info alert — check it out!
            </Alert>
        )
    }

    getPropsFromCity(aa: any){
        console.log(aa);
    }

    setToCity(toCity: string) {
        this.setState({ to: toCity });
    }

    handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        console.log(event.target.value);
    };

    handleChangeRadio = (event: React.ChangeEvent<HTMLInputElement>) => {
        console.log((event.target as HTMLInputElement).value);
        this.tripType = (event.target as HTMLInputElement).value;
        if(this.tripType === 'Oneway') {
            this.setState({tripTypeBool: true});
        } else {
            this.setState({tripTypeBool: false});
        }
    };

    setCitiesArray = () => {
        this.setState({ citiesArray: this.citiesArr });
        this.setState({ labelFrom: 'From' });
        this.setState({ labelTo: 'To' });
    }

    setDataFrom = (aa: any) => {
        if(this.to && aa !== null){
            if(this.to=== aa.cityName){
                console.log("Danger SAme Location");
                this.setState({alertBool : true});
                this.setState({SnackOpen:true,message:"From and To cities cannot be same",variation:"error"})
            }
            else {
                this.setState({alertBool: false});
                this.from = aa.cityName;
                this.setState({from: aa.cityName});
            }
        }
        else if(aa !== null && !this.to){
            console.log("In else if");
            this.from = aa.cityName;
            console.log(aa.cityName);
            this.setState({from: aa.cityName});
            this.setState({alertBool : true});
            this.setState({SnackOpen:true,message:"From and To cities cannot be same",variation:"error"})

        }
        else{
            console.log("In else");
            this.setState({alertBool : false});
        }
    }

    setDataTo = (aa: any) => {
        if(this.from && aa !== null){
            console.log("In if");
            if(this.from=== aa.cityName){
                console.log("In if2");
                console.log("Danger SAme Location");
                this.setState({alertBool : true});
                this.setState({SnackOpen:true,message:"From and To cities cannot be same",variation:"error"})
            }
            else {
                this.setState({alertBool: false});
                this.to = aa.cityName;
                this.setState({to: aa.cityName});
            }
        }
        else if(aa !== null && !this.from){
            console.log("In else if");
            this.to = aa.cityName;
            console.log(aa.cityName);
            this.setState({to: aa.cityName});
            this.setState({alertBool : true});
            this.setState({SnackOpen:true,message:"From and To cities cannot be same",variation:"error"})
        }
        else{
            console.log("In else");
            this.setState({alertBool : false});
        }
    }

    onChange = (event: React.ChangeEvent<HTMLInputElement>) => { 
        console.log('change', event.target.value); 
    }

    render() {

        return (
            <div className='container-fluid' style={divStyle}>

{/* <NavBar></NavBar> */}
                <br />
                {
                    // <div className='container-fluid col-md-9'>
                    <Card style={cardStyle}>
                        <div style={divStyle}>
                            <CardContent style={cardContentStyle}>

                                    <RadioGroup row aria-label="gender" defaultValue="Oneway" name="gender2" onChange={this.handleChangeRadio}>
                                        <FormControlLabel
                                            value="Oneway"
                                            control={<Radio color="primary" />}
                                            label="Oneway"
                                        // labelPlacement="start"
                                        />
                                        <FormControlLabel
                                            value="Round Trip"
                                            control={<Radio color="primary" />}
                                            label="Round Trip"
                                        // labelPlacement="center"
                                        />
                                    </RadioGroup>
                            </CardContent>

                            <CardContent style={cardContentStyle}>
                                <ComboBox getData={e =>this.setDataFrom(e)} citiesArray={this.state.citiesArray} labelName={this.state.labelFrom} location="search"></ComboBox>
                                <span style={comboStyle}></span>
                                <ComboBox getData={e => this.setDataTo(e)} citiesArray={this.state.citiesArray} labelName={this.state.labelTo} location="search"></ComboBox>

                            </CardContent>
                            <CardContent style={cardContentStyle}>

                                Departure :
                                    <MaterialUIPickers />

                                {
                                    this.state.tripTypeBool ? null: "Return :"
                                }
                                {
                                   this.state.tripTypeBool ? null :  <MaterialUIPickers />
                                }
                                

                            </CardContent>

                            <CardActions style={cardContentStyle}>
                                {/* <Button size="medium" onClick={() => this.nextPath('/flightList/')}>Search</Button> */}

                               
                                {/* {this.state.alertBool ?this.setState({SnackOpen:true,message:"chuttad same location",variation:"error"}): null}  */}
                                <MyButton disabled={this.state.alertBool} onClick={() => this.nextPath('/flightList/')}>Search</MyButton>

                            </CardActions>

                        </div>
                        <br />
                        <br />

                        {/* <ComboBox citiesArray={this.state.citiesArray}></ComboBox> */}
                        {/* <FromCityPopover></FromCityPopover> */}
                    </Card>
                    // </div>

                }
                {/* {this.state.alertBool ?alert("Bhai saab same location"): null} */}
                <CustomizedSnackbars
            className={"info"}
            message={this.state.message}
            onClose={this.handleClose1}
            handleClose={this.handleClose1}
            open={this.state.SnackOpen}
            variation={this.state.variation}
          />
          <br />
          <br /><br /><br /><br /><br /><br />
            </div>
        );

    }
}
export default withRouter(SearchClass);