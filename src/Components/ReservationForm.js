import React from "react";
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    "& .MuiTextField-root": {
      margin: theme.spacing(1),
      width: "25ch",
    },
  },
}));

export default function ReservationForm() {
  const classes = useStyles();

  return (
    <form className={classes.root} noValidate autoComplete="off">
      <TextField
        required
        id="outlined-required"
        label="Vardas"
        defaultValue=""
        variant="outlined"
      />
      <TextField
        required
        id="outlined-required"
        label="Pavardė"
        defaultValue=""
        variant="outlined"
      />
      <TextField
        required
        id="outlined-required"
        label="Telefonas"
        defaultValue=""
        variant="outlined"
      />
      <TextField id="outlined-basic" label="Outlined" variant="outlined" />
    </form>
  );
}
