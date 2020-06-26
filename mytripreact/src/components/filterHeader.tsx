import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import CssBaseline from '@material-ui/core/CssBaseline';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import ComboBox from './fromCity';
import cityService from '../services/cityService';
import { ICity } from '../model/ICity';
import { Card, CardActionArea, Button, CardActions, Menu, MenuItem, styled, Grid } from '@material-ui/core';
import { RouteComponentProps, Route } from 'react-router-dom';
import doublearrow from '../images/double-arrow.png';
interface Props {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window?: () => Window;
  children: React.ReactElement;
}

function ElevationScroll(props: Props) {
  const { children, window } = props;
  // Note that you normally won't need to set the window ref as useScrollTrigger
  // will default to window.
  // This is only being set here because the demo is in an iframe.
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
    target: window ? window() : undefined,
  });

  return React.cloneElement(children, {
    elevation: trigger ? 4 : 0,
  });
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

interface IProp {
  cityArray: ICity[];
  nextPath: (data:any)=> any;
}



const FilterHeader: React.FC<IProp> = (props: IProp) => {

  const labelFrom: string = "FROM";
  const labelTo: string = "TO";
  let res0: string = "";
  let res1: string = "";
// let  from: string="";   
//  let to: string ="";
 let tripType: string="";
  var data = localStorage.getItem("data");
  console.log(data);
  var res;
  if(data) {
    res = data.split("|");
  }
  if (res) {
    tripType = res[4];
    res0 = res[0];
    res1 = res[1];
    // setFrom(res[0]);
    // setTo(res[1]);
  }
  console.log(props.cityArray);
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const [anchorE2, setAnchorE2] = React.useState<null | HTMLElement>(null);
  const [anchorE3, setAnchorE3] = React.useState<null | HTMLElement>(null);
  const [selectedIndex, setSelectedIndex] = React.useState(1);
  const [tripTypeVal, setTripType] = React.useState("");
  const [from, setFrom] = React.useState(res0);
  const [to, setTo] = React.useState(res1);  
  const data1 = {
    from: "",
    to: "",
    tripType: "",
    return: "",
    departure: ""
  }

  // const [citiesArray, setCitiesArray] = React.useState(props.cityArray);

  // let citiesArr: Array<ICity> = [];

 
  const [dataObject,setdataObject]= React.useState({from :"",to:"",return:"",departure:"",tripType:""});
  

  

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClickTo = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorE3(event.currentTarget);
    console.log(anchorE3);
  };
  
  const handleClick2 = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorE2(event.currentTarget);
  };
  const handleClickFrom = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  }
  const handleMenuCloseFrom = (event: React.MouseEvent<HTMLLIElement>, index: number) => {
    console.log(props.cityArray[index].cityName);
    setFrom(props.cityArray[index].cityName);
    setFrom(props.cityArray[index].cityName);
    console.log(from);
    setAnchorEl(null);
  }
  const handleMenuCloseTo = (event: React.MouseEvent<HTMLLIElement>, index: number) => {
    console.log(props.cityArray[index]);
    setTo(props.cityArray[index].cityName);
  setTimeout(()=>{  setTo(props.cityArray[index].cityName.toString())});
    console.log(to);
    setAnchorE3(null);
  }
  const handleCloseFrom = (event: React.MouseEvent<HTMLLIElement>) => {
    setAnchorEl(null);
    console.log(event.currentTarget);
    console.log()
  }
  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleCloseTo = () => {
    setAnchorE3(null);
  };

  const handleClose2 = (event: string) => {
    console.log("ddd");
    console.log(event);
    if(event === "RoundTrip") {
      setSelectedIndex(2);
      setTripType("Round Trip");
    } else {
      setSelectedIndex(1);
      setTripType(event);
      console.log(tripTypeVal);
    }
    setAnchorE2(null);
  };

//   cityService.getCityDetails().subscribe((cities: ICity[]) => {
//     console.log(cities);
//     citiesArr = cities;
// })

  const handleCloseClick = (event: any) => {
    console.log("ddd");
    console.log(event.target.value);
    // setAnchorE2(null);
  };


 const nextPath1 = () => {
    if (tripTypeVal === "") {
      console.log("INNNNNNN")
      setTripType(tripType);
    }
    console.log(from);
    console.log(to);
    console.log(tripTypeVal);
    data1.from = from;
    data1.to = to;
    data1.tripType = tripTypeVal;
    data1.return = "";
    data1.departure = "";
    // setdataObject({from:from,to:to,departue:"",return:"",tripType:tripTypeVal});

    setdataObject({from :from, to :to, departure :"", return :"", tripType:tripTypeVal});
    // setdataObject({from :from, to :to, departure :"", return :"", tripType:tripTypeVal});
    console.log(data1);
    setTimeout(()=>{props.nextPath(data1)},100);
    
    
    // props.history.push("/flightList", {
    //   from: from,
    //   to: to,
    //   departure: "",
    //   return: "",
    //   tripType: tripTypeVal
    // });
  }



  const setDataFrom = (aa: any) => {

  }

  return (
    <AppBar style={{ position: "sticky", width: "100%", backgroundColor: "#0D294B" }} >
      <Toolbar>

<Grid container spacing={2}>
  <Grid item xs={12}>
  <Grid container justify="center" spacing={2}>
    <Grid item>
<Card style={{ width: "120px", height: "45px" }}>
          <CardActionArea style={{ width: "120px" }}>

            <Button style={{ width: "120px" }} onClick={handleClick2}> 
              <span style={{ fontSize: "10px", color: "#2072D3", fontWeight: "bold", marginTop: "-25px", marginLeft: "10px" }}>TRIPTYPE</span> <br /> <span style={{ fontSize: "15px", fontWeight: "bold", marginLeft: "-60px", marginTop: "16px" }}>
                {tripTypeVal === "" ? tripType : tripTypeVal}
                </span>
            </Button>
          </CardActionArea>
        </Card> 
        </Grid>


<Grid item>
        <Card style={{ width: "120px", height: "45px" }}>
          <CardActionArea style={{ width: "120px" }}>
            <Button style={{ width: "120px" }} onClick={handleClickFrom}>
              <span style={{ fontSize: "11px", color: "#2072D3", fontWeight: "bold", marginTop: "-25px", marginLeft: "12px" }}>FROM</span> <br /> <span style={{ fontSize: "15px", fontWeight: "bold", marginLeft: "-40px", marginTop: "16px" }}>{from}</span>
            </Button>
          </CardActionArea>
        </Card>
        </Grid>

<span style={{ color: "white", marginTop:"15px"}}><img src={doublearrow} width="30px" height="30px"/></span>

        <Grid item>
        <Card style={{ width: "120px", height: "45px" }}>
          <CardActionArea style={{ width: "120px" }}>
            <Button style={{ width: "120px" }} onClick={handleClickTo}>
              <span style={{ fontSize: "11px", color: "#2072D3", fontWeight: "bold", marginTop: "-25px", marginLeft: "25px" }}>TO</span> <br /> <span style={{ fontSize: "15px", fontWeight: "bold", marginLeft: "-46px", marginTop: "16px" }}>{to}</span>
            </Button>
          </CardActionArea>
        </Card>
        </Grid>


        <Grid item>
        <Card style={{ width: "120px", height: "45px" }}>
          <CardActionArea style={{ width: "120px" }}>

            <Button style={{ width: "120px" }}>
              <span style={{ fontSize: "11px", color: "#2072D3", fontWeight: "bold", marginTop: "-25px", marginLeft: "30px" }}>Departure</span> <br /> <span style={{ fontSize: "15px", fontWeight: "bold", marginLeft: "-80px", marginTop: "16px" }}>{to}</span>
            </Button>
          </CardActionArea>
        </Card>
        </Grid>

        <Grid item>
        <Card style={{ width: "120px", height: "45px" }}>
          <CardActionArea style={{ width: "120px" }}>

            <Button style={{ width: "120px" }}>
              <span style={{ fontSize: "11px", color: "#2072D3", fontWeight: "bold", marginTop: "-25px", marginLeft: "30px" }}>Return</span> <br /> <span style={{ fontSize: "15px", fontWeight: "bold", marginLeft: "-80px", marginTop: "16px" }}>{to}</span>
            </Button>
          </CardActionArea>
        </Card>
        </Grid>

        <Grid item>
        <MyButton style={{float: "right"}} onClick={e => nextPath1()}>Search</MyButton>
        </Grid>

        </Grid>
        </Grid>
        </Grid>
      </Toolbar>

      


      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleCloseFrom}
      >
        {props.cityArray.map((city:ICity, index) => (
        <MenuItem key={city.id} selected={index === selectedIndex} onClick={e => handleMenuCloseFrom(e, index)}>{city.cityName}</MenuItem>
        ))}
      </Menu>

      <Menu
        id="simple-menu"
        anchorEl={anchorE3}
        keepMounted
        open={Boolean(anchorE3)}
        onClose={handleCloseTo}
      >
        {props.cityArray.map((city:ICity, index) => (
        <MenuItem key={city.id} selected={index === selectedIndex} onClick={e => handleMenuCloseTo(e, index)}>{city.cityName}</MenuItem>
        ))}
      </Menu>

      <Menu
        id="simple-menu"
        anchorEl={anchorE2}
        keepMounted
        open={Boolean(anchorE2)}
        onClose={handleClose2}
      >
        <MenuItem  onClick={e=>handleClose2("OneWay")} selected={selectedIndex === 1}>OneWay</MenuItem>
        <MenuItem onClick={e=>handleClose2("RoundTrip")} selected={selectedIndex === 2}>RoundTrip</MenuItem>
      </Menu>
      
    </AppBar>
  );
}

export default FilterHeader;