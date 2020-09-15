import React from "react";
import { Switch, Route } from "react-router-dom";
import ProductListPage from "../ProductListPage/index";
import ProductDetailPage from "../ProductDetailPage/index";
import ProductAddPage from "../ProductAddPage/index";
import ProductEditPage from "../ProductEditPage/index";
import NotFoundPage from "../layouts/NotFoundPage";
import AlertMsg from "./AlertMsg";

const AdminLayout = () => {
    return (
      <>
      <AlertMsg />
       <Switch>
              
              <Route exact path="/admin/products" component={ProductListPage} />
              <Route exact path="/admin/products/:id" component={ProductDetailPage} />
              <Route exact path="/admin/products/add" component={ProductAddPage} />
              <Route
                exact
                path="/admin/products/edit/:id"
                component={ProductEditPage}
              />
              
              <Route component={NotFoundPage} />
            </Switch>

    </>
  );
};

export default AdminLayout;