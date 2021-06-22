import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Dash from '../pages/dash/index'

function AppRoutes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" component={Dash} exact />
      </Switch>
    </BrowserRouter>
  );
}
export default AppRoutes