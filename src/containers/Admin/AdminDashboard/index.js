import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import moment from 'moment';
import { orderActions } from "../../../redux/actions/order.actions";
import './AdminDashStyle.css'
import Table from 'react-bootstrap/Table'
import AdminDashBg from '../../../images/admin-dash-bg.svg'
const AdminDashboard = () => {
    const dispatch = useDispatch();
    const totalOrders = useSelector((state) => state.order.orders)

    useEffect(() => {
        dispatch(orderActions.ordersAdminRequest());
    }, [dispatch]);

    if (!totalOrders || !(totalOrders.length >= 0)) return <>Loading </>

    var orderPrice = totalOrders.filter(order => order.paid).map((item) => item.totalPrice)
    var time = totalOrders.filter(order => order.paid).map((item) => item.createdAt)
    var totalOrderPrice = orderPrice.reduce((acc, curr) => acc + curr)
    var shipping = totalOrders.filter(order => order.paid).map((item) => item.shipping)


    return (
        <div className="tien-admin-dashboard-style">
            <div className="tien-admin-body">
                <div className="tien-admin-sidebar">
                    <div className="bg-style">
                        <img src={AdminDashBg} alt="admin dashboard bg" />
                    </div>
                </div>
                <div className="tien-admin-content">
                    <Table striped bordered hover>
                        <thead>
                            <tr>
                                <th>Ngày</th>
                                <th>Người mua</th>
                                <th>Điện thoại</th>
                                <th>Thanh Toán</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>{moment(time).format('L')}</td>
                                {shipping && shipping.map((info) => (
                                    <>
                                        <td>{info.fullName}</td>
                                        <td>{info.phone}</td>
                                    </>
                                ))}
                                <td>{orderPrice}</td>
                            </tr>

                        </tbody>
                        <thead>
                            <tr>Tổng doanh thu: {totalOrderPrice}</tr>
                        </thead>
                    </Table>
                </div>
            </div>
        </div>
    )
}

export default AdminDashboard
