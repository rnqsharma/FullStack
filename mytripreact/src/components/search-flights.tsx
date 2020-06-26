import * as React from 'react';
import { Card, CardContent, Typography, Button, CardActions } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles'
import NavBar from './NavBar';

const useStyles = makeStyles({
    card: {
        minWidth: 275,
    },
    bullet: {
        display: 'inline-block',
        margin: '0 2px',
        transform: 'scale(0.8)',
    },
    title: {
        fontSize: 14,
    },
    pos: {
        marginBottom: 12,
    },
});


const SearchFlights: React.FC = () => {
    const classes = useStyles();
    const cities = ['Rohtak', 'Delhi', 'Bangalore'];
    console.log('hdgfdsgf');

    const btnClick = () => {
        console.log('Hellel');
    }

    

    return (
        <div className='container-fluid'>
            
                        <br /> <br />
            <div className='container-fluid col-md-9'>
                <Card className={classes.card}>
                    <CardContent>
                        TO :
                         <select>
                            <option>Select The City</option>
                            {
                                cities.map(function (city) {
                                    return <option key={city}>{city}</option>
                                })
                            }
                        </select>
                    </CardContent>
                    <CardActions>
                        <Button size="small">Learn More</Button>
                    </CardActions>
                </Card>
            </div>
        </div>
    )
}

export default SearchFlights;