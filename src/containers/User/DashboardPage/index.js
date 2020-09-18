import React from 'react'
import { useSelector } from "react-redux";

const DashboardPage = () => {
    const cart = useSelector((state) => state.auth.cart);
    const productNum = cart.length > 0 ? cart.reduce((sum, product) => (sum + product.qty), 0) : 0;

    const totalPrice = cart.reduce(function (acc, curr) {
        return acc + curr.qty * curr.price
    }, 0)
const info = cart.map((item) => {
    
})
    console.log("check cart", cart)
    console.log("check info", info)
    return (
        <div>
            <h1>Order</h1>
            <h4>total products {productNum}</h4>
            <h4>total price {totalPrice}$</h4>
            <p>{info.name}</p>

        </div>
    )
}

export default DashboardPage
