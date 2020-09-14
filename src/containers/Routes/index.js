
import React from "react";
import { Route, Switch } from "react-router-dom";
import PrivateRoute from "./PrivateRoute"

import HomePage from "../HomePage/index"
import LoginPage from "../LoginPage/index"
import RegisterPage from "../RegisterPage/index"
import DashboardPage from "../DashboardPage/index"
const Routes = (props) => {
  return (
    <Switch>
      <Route exact path="/" component={HomePage} />
      <Route exact path="/login" component={LoginPage} />
      <Route exact path="/register" component={RegisterPage} />
      <PrivateRoute exact path="/dashboard" component={DashboardPage} />
    </Switch>
  );
};
export default Routes;