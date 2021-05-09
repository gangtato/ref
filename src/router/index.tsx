import React from 'react';
import { Switch, BrowserRouter, Route, Redirect } from "react-router-dom";

import Login from '../ui/views/Login';
import PhoneBook from '../ui/views/Phonebook';
import PrivateRoute from './privaterouter';
import Register from '../ui/views/Register';

export const routes = [
  {
      name:"PhoneBook",
      component: PhoneBook,
      path:"/phonebook",
      exact: false,
  }
];

const Logout = () => {
    return (
      <div>
        <div>Logging out</div>
      </div>
    );
};

const Routes = () => {
    return(
      <BrowserRouter>
      <Switch>
        {routes.map((route, idx) => {
          return (
            <PrivateRoute
              key={idx}
              path={route.path}
              exact={route.exact}
              component={route.component}
            />
          );
        })}
        <PrivateRoute path="/logout" component={Logout} />
        <Route path="/login" exact={false} component={Login} />
        <Route path="/register" exact={false} component={Register} />
        {/* <Redirect from='*' to='/login' /> */}
      </Switch>
      </BrowserRouter>
    );
};

export default Routes;

