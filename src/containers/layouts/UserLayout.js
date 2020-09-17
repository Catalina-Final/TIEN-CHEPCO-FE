import React from 'react'
import { Switch, Route } from "react-router-dom";

import DashboardPage from "../User/DashboardPage"
import NotFoundPage from "../layouts/NotFoundPage";
import PublicNavbar from "../PublicNavBar"
import UserOrder from "../User/UserOrder"
import AlertMsg from "./AlertMsg";

const UserLayout = () => {
    return (
        <>
            <PublicNavbar />
            <AlertMsg />
            <Switch>
                <Route exact path="/user/dashboard" component={DashboardPage} />
                <Route exact path="/user/order" component={UserOrder} />
                <Route component={NotFoundPage} />
            </Switch>

        </>
    )
}

export default UserLayout
