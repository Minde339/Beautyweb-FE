import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
//Pages//
import Homepage from "./Pages/Homepage";
import Products from "./Pages/Products";
import Services from "./Pages/Services";
import Reservation from "./Pages/Reservation";
import Contacts from "./Pages/Contacts";
import Learn from "./Pages/Learn";
import Layout from "./Components/Layout";
//Other imports

export default function App() {
  return (
    <Router>
      <Layout></Layout>
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
    </Router>
  );
}
