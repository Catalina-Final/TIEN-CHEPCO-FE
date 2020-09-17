import React from "react";
import { Switch, Route } from "react-router-dom";
import ProductListPage from "../Admin/ProductListPage/index";
import ProductAddPage from "../Admin/ProductAddPage/index";
import ProductEditPage from "../Admin/ProductEditPage/index";
import ProductDetailPage from "../ProductDetailPage/index";
import NotFoundPage from "../layouts/NotFoundPage";
import AlertMsg from "./AlertMsg";
import PublicNavbar from "../PublicNavBar"
const AdminLayout = () => {
  return (
    <>
      <PublicNavbar />
      <AlertMsg />
      <Switch>
        {/* <Route exact path="/admin/users" component={} />
        <Route exact path="/admin/orders" component={} /> */}
        <Route exact path="/admin/products" component={ProductListPage} />
        <Route exact path="/admin/products/add" component={ProductAddPage} />
        <Route
          exact
          path="/admin/products/edit/:id"
          component={ProductEditPage}
        />
        <Route exact path="/admin/products/:id" component={ProductDetailPage} />

        <Route component={NotFoundPage} />
      </Switch>

    </>
  );
};

export default AdminLayout;