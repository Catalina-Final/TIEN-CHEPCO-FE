import React from "react";
import { Switch, Route } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import HomePage from "../HomePage/index"
import LoginPage from "../LoginPage/index"
import RegisterPage from "../RegisterPage/index"
import DashboardPage from "../DashboardPage/index"
import NotFoundPage from "../layouts/NotFoundPage";
import ProductDetailPage from "../ProductDetailPage/index";
import PrivateRoute from "../Routes/PrivateRoute"
import AlertMsg from "./AlertMsg";

const PublicLayout = () => {
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  const loading = useSelector((state) => state.auth.loading);
  return (
    <>

      <AlertMsg />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/login" component={LoginPage} />
        <Route exact path="/register" component={RegisterPage} />
        <PrivateRoute exact path="/dashboard" component={DashboardPage} isAuthenticated={isAuthenticated} loading={loading} />

        <Route exact path="/products/:id" component={ProductDetailPage} />

        <Route component={NotFoundPage} />
      </Switch>

    </>
  );
};

export default PublicLayout;
