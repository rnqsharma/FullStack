import * as React from 'react';
import { Card, CardContent, Grid, Typography, styled, Button } from '@material-ui/core';
import { useState } from 'react';
import { IFlights } from '../model/IFlights';
import flightService from '../services/flightService';
import { RouteComponentProps, RouteChildrenProps } from 'react-router-dom';


const footer = {
    backgroundColor: "#ffffff",
}

const subStyle = {
    fontSize: "13px",
  }
  
  const totalStyle = {
    marginLeft: "-170px",
    marginTop: "20px",
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


interface IPropsFooter {
    departureFlight: IFlights;
    returnFlight: IFlights;
    check : (cBool: boolean) => any;
}

let departureFlight: IFlights = {
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
let returnFlight: IFlights = {
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


const getReturnFlightDetail = (flightid: string) => {
    flightService.getFlightByID(flightid).subscribe((f: IFlights) => {
      returnFlight = f;
    })
  }

const  getDepartureFlightDetail = (flightid: string) => {
    flightService.getFlightByID(flightid).subscribe((f: IFlights) => {

      departureFlight = f;
    })
  }

  

const FooterFunctional: React.FC<IPropsFooter> = (props: IPropsFooter) => {

    console.log(props.departureFlight);
    console.log(props.returnFlight);
    // getDepartureFlightDetail(props.departureFlight);
    // getReturnFlightDetail(props.returnFlight);
    const routeToReviewComponent = () => {
        console.log("In Footer Functional");
        var cc: boolean = true;
        // props.check(cc);
        props.check(true);
    }
    return(
        <div style={footer}>
        <footer style={{ textAlign: "center", position: "fixed", left: 0, bottom: 0, width: "100%", backgroundColor: "#ffffff", color: "black", height: "100px" }}>

          <Card style={{ height: "100px", backgroundColor: "#ffffff", width: "100%", alignItems: "center"}}>
            <CardContent>
              <Grid container spacing={1} style={{marginLeft: "200px"}}>
                <Grid item xs={5}>
                  <Typography variant="caption" display="block" style={{marginRight: "60%"}} gutterBottom>
                    Departure |
                        {props.departureFlight.flightCompany} | {props.departureFlight.id}
                  </Typography>

                  <Grid container spacing={1}>
                    <Grid item xs={2}>
                      <Typography variant="h6" gutterBottom>
                        {props.departureFlight.departureTime}
                        <Typography style={subStyle} variant="subtitle1" gutterBottom>
                          {props.departureFlight.departureName}
                        </Typography>
                      </Typography>
                    </Grid>
                    <Grid item xs={2}>
                      <Typography variant="h6" gutterBottom>
                        {props.departureFlight.arrivalTime}
                        <Typography style={subStyle} variant="subtitle1" gutterBottom>
                          {props.departureFlight.arrivalName}
                        </Typography>
                      </Typography>
                    </Grid>
                    <Grid item xs={2}>
                      <Typography style={{fontSize: "15px", marginTop: "5px"}} gutterBottom>
                        {props.departureFlight.duration}
                      </Typography>
                    </Grid>
                    <Grid item xs={2}>
                      <Typography variant="h6" gutterBottom>
                        ₹{props.departureFlight.price}
                      </Typography>
                    </Grid>
                  </Grid>
                </Grid>


                <Grid item xs={5} style={{marginLeft: "-150px"}}>
                  <Typography variant="caption" display="block" style={{marginRight: "55%"}} gutterBottom>
                    Return |
                         {props.returnFlight.flightCompany} | {props.returnFlight.id}
                    {/* {this.state.departureFlight.flightCompany}  */}
                  </Typography>
                  <Grid container spacing={1}>
                    <Grid item xs={2}>
                      <Typography variant="h6" gutterBottom>
                        {props.returnFlight.departureTime}
                        <Typography style={subStyle} variant="subtitle1" gutterBottom>
                          {props.returnFlight.departureName}
                        </Typography>
                      </Typography>
                    </Grid>
                    <Grid item xs={2}>
                      <Typography variant="h6" gutterBottom>
                        {props.departureFlight.arrivalTime}
                        <Typography style={subStyle} variant="subtitle1" gutterBottom>
                          {props.returnFlight.arrivalName}
                        </Typography>
                      </Typography>
                    </Grid>
                    <Grid item xs={2}>
                      <Typography style={{fontSize: "15px", marginTop: "5px"}} gutterBottom>
                        {props.returnFlight.duration}
                      </Typography>
                    </Grid>
                    <Grid item xs={2}>
                      <Typography variant="h6" gutterBottom>
                        ₹{props.returnFlight.price}
                      </Typography>
                    </Grid>
                  </Grid>
                </Grid>

                <Grid item xs={1} style={totalStyle}>
                <Typography variant="h6">
                  ₹ {props.departureFlight.price + props.returnFlight.price}
                </Typography>

              </Grid>
              <Grid item xs={1} style={{marginTop: "10px"}}>
                <MyButton onClick= {() => routeToReviewComponent()}>Book</MyButton>
              </Grid>
              
              </Grid>

              

            </CardContent>
          </Card>

          {/* <br></br> */}

          {/* </div> */}
        </footer>
      </div>
    );
}

export default FooterFunctional;