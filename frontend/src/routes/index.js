import React from 'react';

import { Switch, Route } from 'react-router-dom';

import Dashboard from '../pages/Dashboard';
import Releases from '../pages/Releases';

const Routes = () => (
  <Switch>
    <Route path="/" exact component={Dashboard}/>
    <Route path="/releases" component={Releases}/>
  </Switch>
)

export default Routes;