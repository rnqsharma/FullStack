
import * as React from 'react';
import { DatePicker, KeyboardDatePicker } from "@material-ui/pickers";
import { useState, Fragment } from 'react';

const InlineDatePickerDemo: React.FC= ()=> {
  const [selectedDate, handleDateChange] = useState(new Date());

  return (
    <Fragment>
      <DatePicker
        variant="inline"
        label="Basic example"
        value={selectedDate}
        onChange={e=> handleDateChange}
      />

      <DatePicker
        disableToolbar
        variant="inline"
        label="Only calendar"
        helperText="No year selection"
        value={selectedDate}
        onChange={e => handleDateChange}
      />

      <KeyboardDatePicker
        autoOk
        variant="inline"
        inputVariant="outlined"
        label="With keyboard"
        format="MM/dd/yyyy"
        value={selectedDate}
        InputAdornmentProps={{ position: "start" }}
        onChange={(date: any) => handleDateChange(date)}
      />
    </Fragment>
  );
}

export default InlineDatePickerDemo;
