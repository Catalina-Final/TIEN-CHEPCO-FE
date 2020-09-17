import React from "react";
import { Switch, Route } from "react-router-dom";
import PublicNavbar from "../PublicNavBar"
import HomePage from "../HomePage/index"
import LoginPage from "../LoginPage/index"
import RegisterPage from "../RegisterPage/index";
import ProductDetailPage from "../ProductDetailPage";
import NotFoundPage from "../layouts/NotFoundPage";
import AlertMsg from "./AlertMsg";

const PublicLayout = () => {

  return (
    <>
      <PublicNavbar />
      <AlertMsg />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/login" component={LoginPage} />
        <Route exact path="/register" component={RegisterPage} />

        <Route exact path="/products/:id" component={ProductDetailPage} />

        <Route component={NotFoundPage} />
      </Switch>

    </>
  );
};

export default PublicLayout;
