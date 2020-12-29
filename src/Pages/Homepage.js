import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Stepper from "../Components/Stepper";

const useStyles = makeStyles((theme) => ({
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
  stepper: {
    alignContent: "center",
  },
}));

export default function Homepage() {
  const classes = useStyles();
  return (
    <>
      <Grid item xs={12}>
        <Stepper />
        <Paper className={classes.paper}>This is Homepage</Paper>
      </Grid>
    </>
  );
}
