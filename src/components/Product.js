import React from 'react'
import { Card, Button } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { productActions } from "../redux/actions";
import './ProductStyle.css'
import HanhNhan from "./images/hanhnhan.png"



const Product = ({ product, handleClick, handleBuyNow }) => {
    // const [q, setQ] = React.useState(1)
    // const dispatch = useDispatch()
    return (
        <div className="tien-product-style">

            <div >
                <img
                    // variant="top"
                    src={
                        product?.images?.length
                            ? product.images[0]
                            : HanhNhan
                    }
                    className="tien-product-pic"
                    onClick={() => handleClick(product._id)}
                />
            </div>

            <div className="tien-product-info">
                <div className="tien-product-info-left">
                    <h5 style={{ fontWeight: "bold" }}>{product.name}</h5>
                    <p>
                        {product.description}
                    </p>
                    <p>
                        {product.price} ₫

                        </p>
                    <p>
                        {product.ratingsAverage}
                    </p>
                </div>
                <div className="tien-product-info-bnt"  >
                    <button className="tien-bnt-order" onClick={() => handleBuyNow(product._id)} >
                        <svg width="17" height="17" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g id="e-add">
                                <path id="Path" d="M11 1V21" stroke="white" stroke-width="2" stroke-linecap="square" />
                                <path id="Path_2" d="M21 11H1" stroke="white" stroke-width="2" stroke-linecap="square" />
                            </g>
                        </svg>
                    </button>
                </div>
            </div>

        </div>
    )
}

export default Product
