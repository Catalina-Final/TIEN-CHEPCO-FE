import React from 'react'
import { useSelector } from "react-redux";
import { useHistory, Link } from "react-router-dom";
import { Card, Button } from "react-bootstrap";
import CartItems from "../../../components/CartItems"

const UserOrder = () => {
    const loading = useSelector((state) => state.auth.loading);
    const cart = useSelector((state) => state.product.cart);
    // const productNum = cart.length > 0 ? cart.reduce((sum, product) => (sum + product.qty), 0) : 0;
    // console.log("check cart", cart)
    // console.log("product num", productNum)q
    return (
        <div>
            <h1>selected product in cart</h1>
            {cart && cart.products && cart.products.map((chosenItem) => (
                <CartItems
                    chosenItem={chosenItem}
                />

            ))}
            <Link to="/user/order/shipingInfo">
                <Button>take order</Button>
            </Link>
        </div>
    )
}

export default UserOrder
