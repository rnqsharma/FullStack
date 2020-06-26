import * as React from 'react'
import { Card, CardHeader, Theme, createStyles, IconButton, Avatar, CardMedia, CardContent, Typography, CardActions, Collapse, styled, Button } from '@material-ui/core';
import { red } from '@material-ui/core/colors';
import { makeStyles } from '@material-ui/styles';
import { RouteComponentProps } from 'react-router-dom';
import flightService from '../services/flightService';
import { IFlights } from '../model/IFlights';
import ReviewHeader from './reviewHeader';


const useStyles = makeStyles(
  createStyles({
    card: {
      // maxWidth: 345,
      width: '60%'
    },
    media: {
      height: 0,
      paddingTop: '56.25%', // 16:9
    },
    expand: {
      transform: 'rotate(0deg)',
      marginLeft: 'auto',
      //   transition: theme.transitions.create('transform', {
      //     duration: theme.transitions.duration.shortest,
      //   }),
    },
    expandOpen: {
      transform: 'rotate(180deg)',
    },
    avatar: {
      backgroundColor: red[500],
    },
  }),
);

interface IReviewProps {
  flightId: string
}

interface IStateReview {
  flightData: IFlights;
  flightDataArrival: IFlights;
}

const div2 = {
  fontSize: '20px',
  marginTop: '19px',
  // size: 
}

const span2 = {
  fontSize: '15px',
  marginTop: '10%',
}


const reviewCard = {
  margin: 'auto',
  borderRadius: 7
  // width: '60%'
}

const cardHeaderStyle = {
  fontSize: '10px'
}

const outerDivStyle = {
  marginLeft: '15px'
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





class ReviewBooking extends React.Component<RouteComponentProps, IStateReview> {

  // classes = useStyles();
  aa: string = '';
  returnBool: boolean = false;

  constructor(props: any) {
    super(props);
    this.state = {
      flightData: {
        id: '',
        flightCompany: '',
        departureName: '',
        departureTime: '',
        arrivalName: '',
        arrivalTime: '',
        price: 0,
        duration: '',
        economy: 0,
        business: 0,
      },
      flightDataArrival: {
        id: '',
        flightCompany: '',
        departureName: '',
        departureTime: '',
        arrivalName: '',
        arrivalTime: '',
        price: 0,
        duration: '',
        economy: 0,
        business: 0,
      }
    }

    console.log(this.props.location.state.departureId);
    console.log(this.props.location.state.arrivalId);

    if (this.props.location.state.arrivalId) {
      console.log("In Iffffff");
      this.returnBool = true;
    }
  }

  componentDidMount() {
    flightService.getFlightByID(this.props.location.state.departureId).subscribe((flight: IFlights) => {
      this.setState({ flightData: flight });
    })

    if(this.props.location.state.arrivalId !== "" || this.props.location.state.arrivalId !== undefined) {
      flightService.getFlightByID(this.props.location.state.arrivalId).subscribe((flight: IFlights) => {
        this.setState({ flightDataArrival: flight });
      })
    }
    
                        
  }

  render() {
    return (
    <div>

<ReviewHeader></ReviewHeader>
    
    <div className="container-fluid" style={{marginLeft: "12.5%"}}>
      <h3>Itinerary</h3>
      
      {/* <h1>{props.location.state}</h1> */}
      <div className="row">
        <div className="col-sm-6">

        {this.returnBool ? <div>
          <Card style={reviewCard}>
            <div className="container-fluid" style={outerDivStyle}>
              <CardHeader
                action={
                  <IconButton aria-label="settings">
                    {/* <MoreVertIcon /> */}
                  </IconButton>
                }
                titleTypographyProps={{ variant: 'h6' }}
                title={this.state.flightData.departureName + ' - ' + this.state.flightData.arrivalName}
                subheader="September 14, 2016" // Add departure date or arrival date here
              />
            </div>

            <div className="col-sm-12">
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  {/* {this.from} to {this.to}
                                     */}
                  <div className="container-fluid row">
                    <div className="col-sm-3">
                      {this.state.flightData.flightCompany}<br /><span style={span2}>{this.state.flightData.id}</span>
                    </div>
                    {/* <div className="col-sm-2" style={div2}>
                  {this.state.flightData.id}
                </div> */}
                    <div className="col-sm-3" style={div2}>
                      {this.state.flightData.departureTime}
                    </div>
                    <div className="col-sm-3" style={div2}>
                      {this.state.flightData.duration} <br />
                      <hr className='hrClass' />
                    </div>
                    <div className="col-sm-3" style={div2}>
                      {this.state.flightData.arrivalTime}
                    </div>

                  </div>
                </Typography>
              </CardContent>
            </div>

          </Card>


          <br></br>
          <Card style={reviewCard}>
            <div className="container-fluid" style={outerDivStyle}>
              <CardHeader
                action={
                  <IconButton aria-label="settings">
                    {/* <MoreVertIcon /> */}
                  </IconButton>
                }
                titleTypographyProps={{ variant: 'h6' }}
                title={this.state.flightDataArrival.departureName + ' - ' + this.state.flightDataArrival.arrivalName}
                subheader="September 14, 2016" // Add departure date or arrival date here
              />
            </div>

            <div className="col-sm-12">
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  {/* {this.from} to {this.to}
                                     */}
                  <div className="container-fluid row">
                    <div className="col-sm-3">
                      {this.state.flightDataArrival.flightCompany}<br /><span style={span2}>{this.state.flightDataArrival.id}</span>
                    </div>
                    {/* <div className="col-sm-2" style={div2}>
                  {this.state.flightData.id}
                </div> */}
                    <div className="col-sm-3" style={div2}>
                      {this.state.flightDataArrival.departureTime}
                    </div>
                    <div className="col-sm-3" style={div2}>
                      {this.state.flightDataArrival.duration} <br />
                      <hr className='hrClass' />
                    </div>
                    <div className="col-sm-3" style={div2}>
                      {this.state.flightDataArrival.arrivalTime}
                    </div>

                  </div>
                </Typography>
              </CardContent>
            </div>

          </Card>


          </div>

          
          


            :

            <div>
              <Card style={reviewCard}>
            <div className="container-fluid" style={outerDivStyle}>
              <CardHeader
                action={
                  <IconButton aria-label="settings">
                    {/* <MoreVertIcon /> */}
                  </IconButton>
                }
                titleTypographyProps={{ variant: 'h6' }}
                title={this.state.flightData.departureName + ' - ' + this.state.flightData.arrivalName}
                subheader="September 14, 2016" // Add departure date or arrival date here
              />
            </div>

            <div className="col-sm-12">
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  {/* {this.from} to {this.to}
                                     */}
                  <div className="container-fluid row">
                    <div className="col-sm-3">
                      {this.state.flightData.flightCompany}<br /><span style={span2}>{this.state.flightData.id}</span>
                    </div>
                    {/* <div className="col-sm-2" style={div2}>
                  {this.state.flightData.id}
                </div> */}
                    <div className="col-sm-3" style={div2}>
                      {this.state.flightData.departureTime}
                    </div>
                    <div className="col-sm-3" style={div2}>
                      {this.state.flightData.duration} <br />
                      <hr className='hrClass' />
                    </div>
                    <div className="col-sm-3" style={div2}>
                      {this.state.flightData.arrivalTime}
                    </div>

                  </div>
                </Typography>
              </CardContent>
            </div>

          </Card>
            </div>
          }

        </div>

        

        <div className="col-sm-3">
          <Card>
            <CardContent>
              <Typography>
                <div className="row">
                  Base Fare 
                </div>
                <div className="row">
                  Fee & Subcharges ₹{this.state.flightData.price}
                </div>
              </Typography>
            </CardContent>
          </Card>
          <br />
          <MyButton>Book</MyButton>
        </div>
        
        </div>


     
    </div>
    <br /><br />
    </div>
    );
  }

}

export default ReviewBooking;