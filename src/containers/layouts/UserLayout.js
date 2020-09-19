import React from 'react'
import { Switch, Route, Redirect } from "react-router-dom";

import DashboardPage from "../User/DashboardPage"
import NotFoundPage from "../layouts/NotFoundPage";
import PublicNavbar from "../PublicNavBar"
import UserOrder from "../User/UserOrder"
import AlertMsg from "./AlertMsg";
import UserShipping from "../User/UserShipping"

const UserLayout = () => {
    return (
        <>
            <PublicNavbar />
            <AlertMsg />
            <Switch>

                <Route exact path="/user/order" component={UserOrder} />
                <Route exact path="/user/order/shipingInfo" component={UserShipping} />

                <Route exact path="/user/dashboard" component={DashboardPage} />
                <Route exact path="/user/" component={UserOrder} />

                <Route component={NotFoundPage} />
            </Switch>

        </>
    )
}

export default UserLayout
