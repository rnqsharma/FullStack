/* eslint-disable no-use-before-define */
import React from 'react';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import { ICity } from '../model/ICity';
import searchClass from './searchClass';
import { isWithinInterval } from 'date-fns';
import { makeStyles } from '@material-ui/styles';

interface IPropsComboBox {
  citiesArray: Array<ICity>;
  labelName: string;
  getData:(data:any)=> void;
  location: string;
}

const useStyles = makeStyles(theme => ({
    labelColor1: {
      color: getLabelColor(),
      fontWeight: "bold"
    }

}))

let bgColor: string = "";
let labelColor: string = "";
const getBgColor = (): string => {
  console.log(bgColor);
  return bgColor;
}

const getLabelColor = (): string => {
  console.log(labelColor);
  return labelColor;
} 

const setBgColor = (color: string): void => {
  bgColor = color;
}

const ComboBox: React.FC<IPropsComboBox> = (props: IPropsComboBox) => {

  const classes = useStyles();
  console.log(props.citiesArray);
  console.log(props.labelName);
  console.log(props.location);
  if(props.location === "filter") {
    bgColor = "#183F6D";
    labelColor = "#2072D3";
  } else {
    bgColor = "white";
    console.log(bgColor);
    console.log(getBgColor());
  }

  const constonTagsChange = (event: React.ChangeEvent<any>, values: any) => {
      console.log(values);
      props.getData(values);
  }

  return (
    <Autocomplete
      id="combo-box-demo"
      onChange={constonTagsChange}
      options={props.citiesArray}
      getOptionLabel={option => option.cityName}
      style={{ width: 200}}
      renderInput={ params => (
        <TextField {...params} label={props.labelName} 
        InputLabelProps={{
          className: classes.labelColor1
        }}
        style={{backgroundColor: getBgColor()}} variant="outlined" fullWidth />
      )}
  
    />
  );
} 
export default ComboBox;