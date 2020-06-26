import * as React from 'react';
import { makeStyles, styled } from '@material-ui/styles';
import { Theme, createStyles, TextField, createMuiTheme, InputAdornment, Fade, Modal, Button } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import Backdrop from '@material-ui/core/Backdrop';
import AccountCircle from '@material-ui/icons/AccountCircle';
import VpnKeyIcon from '@material-ui/icons/VpnKey';
import { prototype } from 'stream';

const theme = createMuiTheme();
const useStyles = makeStyles(() =>
  createStyles({
    root: {
      '& > *': {
        margin: theme.spacing(1),
        width: 200,
      },
    },
    div: {
      width: 300,
    },
    modal: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
    paper: {
      backgroundColor: theme.palette.background.paper,
      border: '2px solid #000',
      boxShadow: theme.shadows[5],
      padding: theme.spacing(2, 4, 3),
      height: "500px"
    },
    h2Style: {
      // alignContent: 'center',
      // center: 'text',
      textAlign: "center"
    }
  }),
);

interface IPropsLogin {
  modalStatus: boolean;
  handleClose: () => void;
}

const MyButton = styled(Button)({
  background: 'linear-gradient(to right, #1234d0, #364ed9, #5066df, #687de5, #8194e9)',
  border: 0,
  borderRadius: 3,
  // boxShadow: '0 3px 5px 2px rgba(33, 203, 243, .3)',
  color: 'white',
  height: 48,
  width: 300,
  padding: '0 30px',
});


const LoginComponent: React.FC<IPropsLogin> = (props: IPropsLogin) => {

  console.log("In Login")
  const vv: boolean = true;
  const vv1: boolean = false;
  console.log(props.modalStatus);
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(props.modalStatus);
  };

  const handleClose = () => {
    setOpen(false);
  };


  return (

    <Modal
      aria-labelledby="transition-modal-title"
      aria-describedby="transition-modal-description"
      className={classes.modal}
      open={props.modalStatus}
      onClose={props.handleClose}
      closeAfterTransition
      BackdropComponent={Backdrop}
      BackdropProps={{
        timeout: 500,
      }}
    >
      <Fade in={props.modalStatus}>
        <div className={classes.paper}>
          <h3 className={classes.h2Style}>Sign in To MyTrip</h3>
          {/* <h2 id="transition-modal-title">Transition modal</h2>
            <p id="transition-modal-description">react-transition-group animates me.</p>
          </div>
        </Fade>
      </Modal> */}
          <form className={classes.root} noValidate autoComplete="off">
            <TextField id="outlined-basic" className={classes.div} label="Username" variant="outlined" InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <AccountCircle />
                </InputAdornment>
              ),
            }} />
            <br></br>
            <TextField id="outlined-basic" className={classes.div} label="Password" variant="outlined" InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <VpnKeyIcon />
                </InputAdornment>
              ),
            }} />
            <br></br>
            <MyButton>Sign in</MyButton>
          </form>

          

        </div>
      </Fade>
    </Modal>
  );
}

export default LoginComponent;