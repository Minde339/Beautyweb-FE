import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import GoogleMap from "../Components/GoogleMap";

const useStyles = makeStyles((theme) => ({
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
}));

export default function Contacts() {
  const classes = useStyles();
  return (
    <>
      <Grid item xs={12}>
        <Paper className={classes.paper}>
          <h1>Mus Rasite Adresu Taikos pr. 139</h1>
        </Paper>
        <GoogleMap />
      </Grid>
    </>
  );
}
