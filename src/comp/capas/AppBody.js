import React from "react";
import { Redirect, Route, Switch } from 'react-router-dom';
import HomePage from './HomePage';
import Lista from './Lista';
const AppBody = () => (
  <div>
  <Switch>
   <Route exact path="/" component={ HomePage } />
   <Redirect from={ '/home' } to={ '/' } />
   <Route path="/lista" component={ Lista } />
   <Route component={ <h1>NotFound</h1> } />
 </Switch>
  </div>
);
export default AppBody;
