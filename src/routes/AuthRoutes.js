import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Auth from '../pages/auth/index';
import Register from '../pages/register/index';


 function AuthRoutes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/"  component={Auth}  exact/>
        <Route path="/register"  component={Register} exact />
      </Switch>
    </BrowserRouter>
  );
}

export default AuthRoutes;