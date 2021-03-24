import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
//Pages//
import Homepage from "./Pages/Homepage";
import Prices from "./Pages/Prices";
import Products from "./Pages/Products";
import Services from "./Pages/Services";
import Reservation from "./Pages/Reservation";
import Contacts from "./Pages/Contacts";
import Learn from "./Pages/Learn";
//Other imports
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 2,
    backgroundColor: "#1b1b1b",
  },
  title: {
    flexGrow: 1,
  },
  buttons: {
    marginRight: "40%",
    margin: theme.spacing(2),
  },
}));

export default function App() {
  const classes = useStyles();
  return (
    <Router>
      <div className={classes.root}>
        <Button size="large">
          <Link color="#ffffff" to="/">
            Pradžia
          </Link>
        </Button>
        <Button size="large">
          <Link to="/services">Paslaugos</Link>
        </Button>
        <Button color="#ffffff" size="large">
          <Link to="/prices">Kainoraštis</Link>
        </Button>
        <Button color="#ffffff" size="large">
          <Link to="/products">Produktai</Link>
        </Button>
        <Button color="#ffffff" size="large">
          <Link to="/learn">Mokymai</Link>
        </Button>
        <Button size="large">
          <Link color="#ffffff" to="/reservation">
            Rezervacija
          </Link>
        </Button>
        <Button color="#ffffff" size="large">
          <Link to="/contacts">Kontaktai</Link>
        </Button>
        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route exact path="/">
            <Homepage />
          </Route>
          <Route exact path="/products">
            <Products />
          </Route>
          <Route exact path="/services">
            <Services />
          </Route>
          <Route exact path="/prices">
            <Prices />
          </Route>
          <Route exact path="/reservation">
            <Reservation />
          </Route>
          <Route exact path="/contacts">
            <Contacts />
          </Route>
          <Route exact path="/learn">
            <Learn />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
