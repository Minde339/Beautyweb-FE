import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles((theme) => ({
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
}));

export default function Homepage() {
  const classes = useStyles();
  return (
    <>
      <Grid item xs={12}>
        <Paper className={classes.paper}>This is Services Page</Paper>
        <Button size="large" className={classes.margin}>
          Large
        </Button>
        <Button size="large" className={classes.margin}>
          Large
        </Button>
        <Button size="large" className={classes.margin}>
          Large
        </Button>
        <Button size="large" className={classes.margin}>
          Large
        </Button>
      </Grid>
    </>
  );
}
