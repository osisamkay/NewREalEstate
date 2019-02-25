import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './components/Home';
import GlobalStyle from './components/GlobalStyle';
import Contact from './components/Contact us/contact';
import About from './components/About Us/About';
import Listing from './components/Properties/Listings';
import ListView from './components/Properties/ListView';
import Results from './Results';

const Routes = () => (
  <Router>
    <Fragment>
      <GlobalStyle />
      <Switch>
        <Route exact path="/" component={Home}></Route>
        <Route  path="/Contact" component={Contact}></Route>
        <Route  path="/About" component={About}></Route>
        <Route  path="/Property" component={Listing}></Route>
        <Route path="/ListView/:id" component={ListView}></Route>
      </Switch>
    </Fragment>
  </Router>
);

export default Routes;
