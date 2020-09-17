import React from 'react'
import { useSelector } from "react-redux";
import { Card, Button } from "react-bootstrap";
import CartItems from "../../../components/CartItems"
const UserOrder = () => {
    const loading = useSelector((state) => state.auth.loading);
    const cart = useSelector((state) => state.product.cart);
    const productNum = cart.length > 0 ? cart.reduce((sum, product) => (sum + product.qty), 0) : 0;
    console.log("check cart", cart)
    console.log("product num", productNum)
    return (
        <div>
            <h1>selected product in cart</h1>
            {cart.map((chosenItem) => (
                <CartItems
                    chosenItem={chosenItem}
                //   key={product._id}
                //   handleClick={handleClickOnProduct}
                //   handleBuyNow={handleBuyNow}
                />

            ))}
            <Button>take order</Button>

        </div>
    )
}

export default UserOrder
