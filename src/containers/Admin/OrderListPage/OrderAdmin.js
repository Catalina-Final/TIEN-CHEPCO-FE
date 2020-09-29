import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import moment from 'moment';
import CurrencyFormat from 'react-currency-format';

import { Button } from "react-bootstrap"
import { orderActions } from "../../../redux/actions/order.actions"
import { useHistory, useParams } from "react-router-dom";
import './AdminOrderListStyle.css'

const OrderAdmin = (order, key) => {

    const totalPrice = order.order.products.reduce(function (acc, curr) {
        return acc + curr.product.price * curr.quantity
    }, 0)
    const time = order.order.products[0].createdAt

    const state = useSelector((state) => state)
    const dispatch = useDispatch();

    const params = useParams();

    const orderId = params.id


    const handleChange = () => {
        dispatch(orderActions.updateOrderStatus(order.order._id))
    }

    return (
        <div className="tien-order-style">
            <div classname="admin-order-title-wrap">
                <div className="admin-order-up">
                    <p>Đơn hàng: <span style={{ color: "red" }}>{order.order.shipping.fullName}</span></p>

                    <p>Tổng tiền: <span style={{ color: "red" }}><CurrencyFormat value={totalPrice} displayType={'text'} thousandSeparator={true} suffix={'₫'} /></span></p>
                    <p>Thanh toán: <span style={{ color: "red" }}>{order.order.paid ? "Paid" : "Pending"}</span></p>
                    <Button variant="outline-info" onClick={handleChange}>👌</Button>
                </div>
                <p>Ngày: {moment(time).format('L')}</p>
                <p>Điện thoại: {order.order.shipping.phone}</p>
                <div className="admin-order-up-bot">
                    <div style={{ width: "30vw", height: "5vh", overflow: "scroll" }}>
                        <p>Địa chỉ: {order.order.shipping.address}</p>
                    </div>


                </div>
                <hr />
            </div>
            <div className="order-detail-wrap" >
                {order.order.products.map((product) => {

                    return (
                        <div className="order-detail-info">
                            <p style={{ width: "20vw" }}>{product.product.name}</p>
                            <p style={{ width: "20vw" }}>Giá: {product.product.price} vnd</p>
                            <p style={{ width: "20vw" }}>Số lượng: {product.quantity}</p>
                        </div>


                    )
                })}
            </div>


        </div>
    )
}

export default OrderAdmin

