import React from 'react';

import { Switch, Route, Redirect } from 'react-router-dom';

import Dashboard from '../pages/Dashboard';
import Releases from '../pages/Releases';
import Backlog from '../pages/Backlog';
import Sprints from '../pages/Sprints';


const Routes = () => (
  <Switch>
    <Route path="/" exact component={Dashboard}/>
    <Route path="/releases" component={Releases}/>
    <Route path="/backlog" component={Backlog}/>
    <Route path="/sprints" component={Sprints}/>
    <Redirect path="*" to="/" />
  </Switch>
)

export default Routes;