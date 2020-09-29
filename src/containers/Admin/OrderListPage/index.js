import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { orderActions } from "../../../redux/actions/order.actions";
import { useHistory, Link } from "react-router-dom";
import OrderAdmin from './OrderAdmin'

import './AdminOrderListStyle.css'

const OrderListPage = () => {
    const dispatch = useDispatch();
    const totalOrders = useSelector((state) => state.order.orders)

    useEffect(() => {
        dispatch(orderActions.ordersAdminRequest());
    }, [dispatch]);

    if (!totalOrders || !(totalOrders.length >= 0)) return <>Loading </>
    return (
        <div className="tien-order-list-style">
            <div className="order-body">

                <div className="order-content">
                    {totalOrders.map((order) => (
                        <OrderAdmin
                            order={order}
                            key={order._id}
                        />
                    ))

                    }
                </div>
            </div>


        </div>
    )
}

export default OrderListPage
