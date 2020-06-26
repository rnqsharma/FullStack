import 'date-fns';
import React from 'react';
import DateFnsUtils from '@date-io/date-fns';
import {
  MuiPickersUtilsProvider,
  KeyboardTimePicker,
  KeyboardDatePicker,
} from '@material-ui/pickers';
import { Grid } from '@material-ui/core';
import { id } from 'date-fns/esm/locale';

const dateStyle = {
  marginTop: '1px',
  width: '20%'
}
export default function MaterialUIPickers() {
  // The first commit of Material-UI
  const [selectedDate, setSelectedDate] = React.useState<Date | null>(  );

  const handleDateChange = (date: Date | null) => {
    console.log(date);
    var dateFormatted = date?.getDate + "/" + date?.getMonth + date?.getFullYear;
    var dateFormattedString 
    if(date) {
      console.log(date.getUTCDay);
      dateFormattedString = date.getDay + "," + date.getDate + date.getMonth + date.getFullYear;
    }
    
    console.log(dateFormattedString);
    setSelectedDate(date);
  };

  return (
    <MuiPickersUtilsProvider utils={DateFnsUtils}>
      {/* <Grid container justify="space-around"> */}
        <KeyboardDatePicker
          disableToolbar
          variant="inline"
          format="MM/dd/yyyy"
          margin="normal"
          id="date-picker-inline"
          value={selectedDate}
          onChange={handleDateChange}
          style={dateStyle}
          KeyboardButtonProps={{
            'aria-label': 'change date',
          }}
        />
        
    </MuiPickersUtilsProvider>
  );
}