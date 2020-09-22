import React from 'react'
import { Card, Button } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { productActions } from "../redux/actions";
import './CartItemStyle.css'


const CartItems = ({ chosenItem }) => {

    const [quantity, setQuantity] = React.useState(1)
    const dispatch = useDispatch()
    return (
        <div>
            <div>
                <h5>{chosenItem?.product?.name}</h5>
            </div>
            <div className="item-price">
                <p>{chosenItem?.product?.price} vnd</p>
            </div>
            <hr />
            <div className="choosen-item-quantity">
                <div className="add-item-quantity">
                    <label>
                        <svg viewBox="0 0 116 116" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g id="add-button">
                                <path id="Vector" d="M57.6589 115.318C89.503 115.318 115.318 89.503 115.318 57.6589C115.318 25.8147 89.503 0 57.6589 0C25.8148 0 0 25.8147 0 57.6589C0 89.503 25.8148 115.318 57.6589 115.318Z" fill="#D6B7A0" />
                                <path id="Vector_2" d="M33.6346 53.8541C32.6255 53.8541 31.6577 54.255 30.9442 54.9685C30.2306 55.6821 29.8297 56.6499 29.8297 57.659C29.8297 58.6682 30.2306 59.636 30.9442 60.3495C31.6577 61.0631 32.6255 61.464 33.6346 61.464H53.8544V81.6832C53.8544 82.6923 54.2552 83.66 54.9688 84.3735C55.6823 85.087 56.65 85.4879 57.6591 85.4879C58.6681 85.4879 59.6358 85.087 60.3494 84.3735C61.0629 83.66 61.4637 82.6923 61.4637 81.6832V61.464H81.6835C82.6926 61.464 83.6604 61.0631 84.374 60.3495C85.0875 59.636 85.4884 58.6682 85.4884 57.659C85.4884 56.6499 85.0875 55.6821 84.374 54.9686C83.6604 54.255 82.6926 53.8541 81.6835 53.8541H61.4637V33.6344C61.4637 32.6253 61.0629 31.6576 60.3494 30.944C59.6358 30.2305 58.6681 29.8297 57.6591 29.8297C56.65 29.8297 55.6823 30.2305 54.9688 30.944C54.2552 31.6576 53.8544 32.6253 53.8544 33.6344V53.8541H33.6346Z" fill="white" />
                            </g>
                        </svg>

                        <Button style={{ display: "none" }} onClick={() => setQuantity(quantity => quantity + 1)}>up</Button>
                    </label>
                </div>
                <div className="amount-quantity">
                    <p>{chosenItem?.quantity}</p>
                </div>
                <div className="remove-item-quantity">
                    <label>
                        <svg viewBox="0 0 147 147" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g id=" remove-btn" filter="url(#filter0_d)">
                                <path id="Vector" d="M73.396 138.792C59.6708 138.792 46.2539 134.722 34.8418 127.097C23.4297 119.471 14.535 108.633 9.28256 95.9529C4.03013 83.2725 2.65579 69.3192 5.33341 55.8578C8.01102 42.3963 14.6203 30.0311 24.3255 20.3258C34.0306 10.6206 46.3957 4.01125 59.8572 1.33353C73.3187 -1.3442 87.2719 0.0299907 99.9524 5.28232C112.633 10.5346 123.471 19.4292 131.096 30.8412C138.722 42.2533 142.792 55.6702 142.792 69.3954C142.771 87.7941 135.453 105.433 122.444 118.443C109.434 131.453 91.7947 138.771 73.396 138.792ZM73.396 2.25485C60.1167 2.25485 47.1357 6.19261 36.0944 13.5702C25.0531 20.9478 16.4474 31.4338 11.3657 43.7023C6.28395 55.9708 4.95432 69.4706 7.54501 82.4948C10.1357 95.5189 16.5303 107.482 25.9203 116.872C35.3102 126.262 47.2736 132.656 60.2978 135.247C73.3219 137.838 86.8218 136.508 99.0902 131.426C111.359 126.344 121.845 117.739 129.222 106.697C136.6 95.6558 140.537 82.6747 140.537 69.3954C140.517 51.5948 133.437 34.529 120.85 21.942C108.263 9.35511 91.1967 2.27495 73.396 2.25485V2.25485Z" fill="#3F3D56" />
                                <path id="Vector_2" d="M117.508 77.2657H29.2845V61.5254H117.508L117.508 77.2657ZM31.5395 75.0108H115.253V63.7803H31.5395V75.0108Z" fill="#3F3D56" />
                            </g>
                            <defs>
                                <filter id="filter0_d" x="0" y="0" width="146.792" height="146.792" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                                    <feFlood flood-opacity="0" result="BackgroundImageFix" />
                                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                                    <feOffset dy="4" />
                                    <feGaussianBlur stdDeviation="2" />
                                    <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
                                    <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow" />
                                    <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape" />
                                </filter>
                            </defs>
                        </svg>

                        <Button style={{ display: "none" }} onClick={() => setQuantity(quantity => quantity - 1 > 0 ? quantity - 1 : 1)}>down</Button>
                    </label>
                </div>
                <div className="confirm-remove-product">
                    <div>
                        <label style={{ cursor: "pointer" }}>
                            <p>Thêm</p>
                            <Button
                                style={{ display: "none" }}
                                onClick={() => dispatch(productActions.updateProductFromCart(chosenItem.product._id, quantity))}
                            >Thêm</Button>
                        </label>
                    </div>
                    <div>
                        <label style={{ cursor: "pointer" }}>
                            <p>Xoá</p>
                            <Button
                                style={{ display: "none" }}
                                onClick={() => dispatch(productActions.removeProductFromCart(chosenItem.product._id, chosenItem?.quantity))}
                            >Remove</Button>
                        </label>
                    </div>
                </div>

            </div>
            <hr />


        </div>
    )
}

export default CartItems
