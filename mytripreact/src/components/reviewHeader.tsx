import React from 'react';
import { AppBar } from '@material-ui/core';
import StepperHeader from './stepperHeader';

interface IProps {
    progressCounter: number;
}
const ReviewHeader: React.FC = () => {
    return(
        <AppBar style={{position: "sticky", backgroundColor: "#FFFFFF"}}>
           <span style={{color: "black", fontSize: "30px", marginTop: "40px", marginLeft: "100px"}}>REVIEW BOOKING
           <span style={{marginLeft: "100px"}}><StepperHeader></StepperHeader></span>
           </span> 
           
        </AppBar>
    )
}

export default ReviewHeader;