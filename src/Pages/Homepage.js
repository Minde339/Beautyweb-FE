import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Stepper from "../Components/Stepper";

const useStyles = makeStyles((theme) => ({
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    backgroundColor: "#1b1b1b",
    alignContent: "center",
  },
}));

export default function Homepage() {
  const classes = useStyles();
  return (
    <>
      <Grid item xs={12}>
        <Paper className={classes.paper}>
          <Stepper />
        </Paper>
      </Grid>
    </>
  );
}
