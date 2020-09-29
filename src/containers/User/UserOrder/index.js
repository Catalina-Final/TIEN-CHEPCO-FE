import React from 'react'
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import CartItems from "../../../components/CartItems"
import './CartStyle.css'
import CartBg from "../../../images/quantity-bg.svg"
const UserOrder = () => {
    const loading = useSelector((state) => state.auth.loading);
    const cart = useSelector((state) => state.product.cart);
    return (
        <div className="tien-add-cart-style">
            <div className="add-cart-body">
                <div className="add-cart-sidebar">
                    <div className="quantity-bg">
                        <img src={CartBg} alt="cart bg" />

                    </div>
                </div>
                <div className="add-cart-content">
                    <div className="cart-products-list">
                        {cart && cart.products && cart.products.map((chosenItem) => (
                            <CartItems
                                chosenItem={chosenItem}
                            />

                        ))}
                    </div>
                    <div className="cart-products-send">
                        <Link to="/user/order/shipingInfo" className={cart?.products.length < 1 ? "disabled-link" : ""} >
                            <label>
                                <div className="cart-send-style">
                                    <svg viewBox="0 0 201 201" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <g id="sending">
                                            <path id="Vector" d="M100.85 200.32C156.056 200.32 200.81 155.566 200.81 100.36C200.81 45.1535 156.056 0.399902 100.85 0.399902C45.6435 0.399902 0.889893 45.1535 0.889893 100.36C0.889893 155.566 45.6435 200.32 100.85 200.32Z" fill="#5E9194" />
                                            <path id="Vector_2" d="M100.85 52.5298L61 144.47L64.72 148.19L100.86 132.25L137 148.19L140.72 144.47L100.85 52.5298Z" fill="#D6B7A0" />
                                        </g>
                                    </svg>

                                </div>
                            </label>

                        </Link>

                    </div>



                </div>


            </div>


        </div>
    )
}

export default UserOrder
