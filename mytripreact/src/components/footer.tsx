import * as React from 'react';
import { Container, Typography, createMuiTheme, Theme, Card, CardContent, Grid, Button, styled } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import { blue } from '@material-ui/core/colors';
import flightService from '../services/flightService';
import { IFlights } from '../model/IFlights';
import { Z_FIXED } from 'zlib';
import { RouteComponentProps } from 'react-router-dom';


interface IPropsFooter{
  departureFlightID: string;
  returnFlightID: string;
  check : (awe : boolean) => void
}

interface IStateFooter {
  departureFlight: IFlights;
  returnFlight: IFlights;
}

const footer = {
  backgroundColor: "#ffffff",
}

const footerStyle = {
  // position: "fixed",
  left: 0,
  bottom: 0,
  width: "100%",
  backgroundColor: "red",
  color: "white",
  textAlign: "center",
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



class Footer extends React.Component<IPropsFooter, IStateFooter>{


  constructor(props: any) {
    super(props);
    this.state = {
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
      returnFlight: {
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
      }
    }
  }

  componentDidMount() {
    // this.props.history.push();
  }

  componentDidUpdate(prevProps: IPropsFooter) {
    console.log("in did update");
   
    if (this.props.departureFlightID !== prevProps.departureFlightID) {
      console.log("sdfdsf");
      this.getDepartureFlightDetail(this.props.departureFlightID);
    }

    if (this.props.returnFlightID !== prevProps.returnFlightID) {
      console.log("dfffff");
      this.getReturnFlightDetail(this.props.returnFlightID);
    }
  }

  getReturnFlightDetail = (flightid: string) => {
    flightService.getFlightByID(flightid).subscribe((f: IFlights) => {
      // console.log(f.arrivalName);
      this.setState({ returnFlight: f });
      console.log(this.state.returnFlight);
    })
  }

  getDepartureFlightDetail = (flightid: string) => {
    flightService.getFlightByID(flightid).subscribe((f: IFlights) => {
      this.setState({ departureFlight: f });
      console.log(this.state.departureFlight);
    })
  }

  routeToReviewComponent = ()  => {
    this.props.check(true)
  }


  render = () => {
    return (
      <div style={footer}>
        <footer style={{ textAlign: "center", position: "fixed", left: 0, bottom: 0, width: "100%", backgroundColor: "#ffffff", color: "black", height: "100px" }}>

          <Card style={{ height: "100px", backgroundColor: "#ffffff", width: "100%", alignItems: "center"}}>
            <CardContent>
              <Grid container spacing={1} style={{marginLeft: "200px"}}>
                <Grid item xs={5}>
                  <Typography variant="caption" display="block" style={{marginRight: "60%"}} gutterBottom>
                    Departure |
                        {this.state.departureFlight.flightCompany} | {this.state.departureFlight.id}
                  </Typography>

                  <Grid container spacing={1}>
                    <Grid item xs={2}>
                      <Typography variant="h6" gutterBottom>
                        {this.state.departureFlight.departureTime}
                        <Typography style={subStyle} variant="subtitle1" gutterBottom>
                          {this.state.departureFlight.departureName}
                        </Typography>
                      </Typography>
                    </Grid>
                    <Grid item xs={2}>
                      <Typography variant="h6" gutterBottom>
                        {this.state.departureFlight.arrivalTime}
                        <Typography style={subStyle} variant="subtitle1" gutterBottom>
                          {this.state.departureFlight.arrivalName}
                        </Typography>
                      </Typography>
                    </Grid>
                    <Grid item xs={2}>
                      <Typography style={{fontSize: "15px", marginTop: "5px"}} gutterBottom>
                        {this.state.departureFlight.duration}
                      </Typography>
                    </Grid>
                    <Grid item xs={2}>
                      <Typography variant="h6" gutterBottom>
                        ₹{this.state.departureFlight.price}
                      </Typography>
                    </Grid>
                  </Grid>
                </Grid>


                <Grid item xs={5} style={{marginLeft: "-150px"}}>
                  <Typography variant="caption" display="block" style={{marginRight: "55%"}} gutterBottom>
                    Return |
                         {this.state.returnFlight.flightCompany} | {this.state.returnFlight.id}
                    {/* {this.state.departureFlight.flightCompany}  */}
                  </Typography>
                  <Grid container spacing={1}>
                    <Grid item xs={2}>
                      <Typography variant="h6" gutterBottom>
                        {this.state.returnFlight.departureTime}
                        <Typography style={subStyle} variant="subtitle1" gutterBottom>
                          {this.state.returnFlight.departureName}
                        </Typography>
                      </Typography>
                    </Grid>
                    <Grid item xs={2}>
                      <Typography variant="h6" gutterBottom>
                        {this.state.departureFlight.arrivalTime}
                        <Typography style={subStyle} variant="subtitle1" gutterBottom>
                          {this.state.returnFlight.arrivalName}
                        </Typography>
                      </Typography>
                    </Grid>
                    <Grid item xs={2}>
                      <Typography style={{fontSize: "15px", marginTop: "5px"}} gutterBottom>
                        {this.state.returnFlight.duration}
                      </Typography>
                    </Grid>
                    <Grid item xs={2}>
                      <Typography variant="h6" gutterBottom>
                        ₹{this.state.returnFlight.price}
                      </Typography>
                    </Grid>
                  </Grid>
                </Grid>

                <Grid item xs={1} style={totalStyle}>
                <Typography variant="h6">
                  ₹ {this.state.departureFlight.price + this.state.returnFlight.price}
                </Typography>

              </Grid>
              <Grid item xs={1} style={{marginTop: "10px"}}>
                <MyButton onClick= {() => this.routeToReviewComponent()}>Book</MyButton>
              </Grid>
              
              </Grid>

              

            </CardContent>
          </Card>

          {/* <br></br> */}

          {/* </div> */}
        </footer>
      </div>
    )
  }

}

export default Footer;