import React from 'react';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import LinearProgress from '@material-ui/core/LinearProgress';
import Header from './header';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: '100%',
      '& > * + *': {
        marginTop: theme.spacing(2),
      },
    },
  }),
);

export default function ProgressBar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <LinearProgress />
      {/* <LinearProgress color="secondary" /> */}
    </div>
  );
}