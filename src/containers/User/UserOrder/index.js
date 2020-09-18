import React from 'react'
import { useSelector } from "react-redux";
import { Card, Button } from "react-bootstrap";
import CartItems from "../../../components/CartItems"
import { useHistory, Link } from "react-router-dom";


const UserOrder = () => {
    const loading = useSelector((state) => state.auth.loading);
    const cart = useSelector((state) => state.auth.cart);
    const productNum = cart.length > 0 ? cart.reduce((sum, product) => (sum + product.qty), 0) : 0;


    const totalPrice = cart.reduce(function (acc, curr) {
        return acc + curr.qty * curr.price
    }, 0)

    


    console.log("check cart", cart)
    console.log("product num", productNum)

    return (
        <div>
            <h1>selected product in cart</h1>
            <h4>total products {productNum}</h4>
            <h4>total price {totalPrice}$</h4>
            
            {cart.map((chosenItem) => (
                <CartItems
                    chosenItem={chosenItem}
                />

            ))}
            <Link to="/user/order/shiping">
                <Button >take order</Button>
            </Link>
            
            


        </div>
    )
}

export default UserOrder
