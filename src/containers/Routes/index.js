
import React from "react";
import { Route, Switch } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import PrivateRoute from "./PrivateRoute"
import PublicLayout from "../layouts/PublicLayout";
import AdminLayout from "../layouts/AdminLayout";

const Routes = (props) => {
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  const loading = useSelector((state) => state.auth.loading);

  return (
    <Switch>
      <PrivateRoute path="/admin" component={AdminLayout} isAuthenticated={isAuthenticated} loading={loading} />
      <Route path="/" component={PublicLayout} />
    </Switch>
  );
};
export default Routes;