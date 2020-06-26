import * as React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
// import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import AccountCircle from '@material-ui/icons/AccountCircle';
import { MenuItem, useScrollTrigger, Slide, CssBaseline, Menu } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import SearchFlights from './search-flights';
import { Link, RouteComponentProps } from 'react-router-dom';
import LoginComponent from './loginComponent';
import FilterHeader from './filterHeader';
import { useAuth0 } from '../services/react-auth0-spa';
import { NavLink as RouterNavLink } from "react-router-dom";
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import {
  Collapse,
  Container,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  Button,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from "reactstrap";





const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

interface Props {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window?: () => Window;
  children: React.ReactElement;
}


function HideOnScroll(props: Props) {
  const { children, window } = props;
  // Note that you normally won't need to set the window ref as useScrollTrigger
  // will default to window.
  // This is only being set here because the demo is in an iframe.
  const trigger = useScrollTrigger({ target: window ? window() : undefined });

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
}



const Header: React.FC = () => {
  
  
  const [isOpen, setIsOpen] = React.useState(false);
  const { user, isAuthenticated, loginWithRedirect, logout } = useAuth0();

  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);


  const open = Boolean(anchorEl);
  




  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };


  const handleMenu = (event: React.MouseEvent<HTMLElement>) => {
    console.log(event.currentTarget)
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  // const { user, isAuthenticated, loginWithRedirect, logout } = useAuth0();
  const toggle = () => setIsOpen(!isOpen);
  const logoutWithRedirect = () =>
    logout({
      returnTo: window.location.origin
    });

  const classes = useStyles();

    
  const routeToHome = () => {
    // props.history.push("/");
  }
 
 
  
  return (
  
    <React.Fragment>
    <CssBaseline>
    <HideOnScroll>
      <AppBar position="relative" >
        <Toolbar>
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            {/* <MenuIcon /> */}
          </IconButton>
          <Typography variant="h6" className={classes.title} onClick= {()=>routeToHome()}>
           <Link to="/" style={{color: "white", textDecoration: "none"}}> MyTrip </Link>
          </Typography>
        
              {!isAuthenticated && (
                <NavItem>
                  <Button outline
                    id="qsLoginBtn"
                    color="primary"
                    className="btn-margin"
                    onClick={() => loginWithRedirect({})}
                  >
                    Log in
                  </Button>
                </NavItem>
              )}

              
              {isAuthenticated && (
                

                <div>
              <IconButton
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleMenu}
                color="inherit"
              >
                <img
                      src={user.picture}
                      alt="Profile"
                      className="nav-user-profile rounded-circle"
                      width="50"
                    />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                open={open}
                onClose={handleClose}
              >
                <MenuItem onClick={handleClose}>Profile</MenuItem>
                <MenuItem onClick={handleClose}>My account</MenuItem>
              </Menu>

              </div>
                



              )}
            
        
        </Toolbar>
      </AppBar>
      </HideOnScroll>
    
      </CssBaseline>
    </React.Fragment>

  );
}

export default Header;