import React from 'react';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: '50%',
      marginLeft: "50%",
      marginTop: "-70px",
      // height: "70px"
    },
    backButton: {
      marginRight: theme.spacing(1),
    },
    instructions: {
      marginTop: theme.spacing(1),
      marginBottom: theme.spacing(1),
    },
  }),
);

function getSteps() {
  return ['Flight Selected', 'Review', 'Traveller Details'];
}

function getStepContent(stepIndex: number) {
  switch (stepIndex) {
    case 0:
      return 'Select campaign settings...';
    case 1:
      return 'What is an ad group anyways?';
    case 2:
      return 'This is the bit I really care about!';
    default:
      return 'Unknown stepIndex';
  }
}

interface IProps {
    progressCounter: number
}

const StepperHeader: React.FC = () => {
  const classes = useStyles();
  let progressCounter: number = 0;
  if(sessionStorage.getItem("progressCounter") === "1") {
      progressCounter = 1
  } else if(sessionStorage.getItem("progressCounter") === "2") {
      progressCounter = 2;
  } else {
    progressCounter = 3;
  }
  const [activeStep, setActiveStep] = React.useState(progressCounter);
  const steps = getSteps();

  const handleNext = () => {
    setActiveStep(prevActiveStep => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep(prevActiveStep => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };

//   handleBack();
//   handleNext();
  return (
    <div className={classes.root}>
      <Stepper activeStep={activeStep} style={{color:"white"}} alternativeLabel>
        {steps.map(label => (
          <Step key={label}>
            <StepLabel style={{color: "#FFFFFF"}}>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>
      {/* <div>
        {activeStep === steps.length ? (
          <div>
            <Typography className={classes.instructions}>All steps completed</Typography>
            <Button onClick={handleReset}>Reset</Button>
          </div>
        ) : (
          <div>
            <Typography className={classes.instructions}>{getStepContent(activeStep)}</Typography>
            <div>
              <Button
                disabled={activeStep === 0}
                onClick={handleBack}
                className={classes.backButton}
              >
                Back
              </Button>
              <Button variant="contained" color="primary" onClick={handleNext}>
                {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
              </Button>
            </div>
          </div>
        )}
      </div> */}
    </div>
  );
}

export default StepperHeader;