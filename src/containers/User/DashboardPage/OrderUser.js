import React from 'react'
import moment from 'moment';
import './UserDashboardStyle.css'

const OrderUser = (order, key) => {
    const totalPrice = order.order.products.reduce(function (acc, curr) {
        return acc + curr.product.price * curr.quantity
    }, 0)
    const time = order.order.products[0].createdAt

    return (
        <div className="order-style-wrap">
            <div className="user-infor">
                <div className="user-infor-side">
                    <p><span style={{ textDecoration: "underline" }}>Đơn hàng:</span> {order.order.shipping.fullName}</p>
                    <p><span style={{ textDecoration: "underline" }}>Ngày:</span> {moment(time).format('L')}</p>
                    <p><span style={{ textDecoration: "underline" }}>Thanh toán:</span> <span style={{ color: "red" }}>{order.order.paid ? "Done" : "Pending"}</span></p>
                    <p><span style={{ textDecoration: "underline" }}>Tổng tiền:</span> {totalPrice} vnd</p>
                </div>

                <div className="user-infor-right">
                    <p><span style={{ textDecoration: "underline" }}>Điện thoại:</span> {order.order.shipping.phone}</p>
                    <div>
                        <p><span style={{ textDecoration: "underline" }}>Địa chỉ:</span> {order.order.shipping.address}</p>
                    </div>


                </div>
                <hr />
            </div>
            <div>
                {order.order.products.map((product) => {

                    return (
                        <div className="user-order-wrap">
                            <div className="user-order" >
                                <div className="user-order-top">
                                    <p style={{ textDecoration: "underline", width: "15vw" }}>{product.product.name}</p>
                                    <p>Giá: {product.product.price} vnd</p>
                                    <p>Số lượng: {product.quantity}</p>
                                </div>

                            </div>

                        </div>

                    )
                })}
            </div>
        </div>
    )
}

export default OrderUser
