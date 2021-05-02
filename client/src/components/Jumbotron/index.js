import React from "react";
import { makeStyles } from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
  root: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: 300,
      textAlign: 'center',
      clear: 'both'
  }
}));


function Jumbotron({ children }) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      {children}
    </div>
  );
}

export default Jumbotron;
