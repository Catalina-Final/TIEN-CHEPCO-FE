import React, { useState, useEffect } from "react";
import { useParams, useHistory, Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import Parallax from 'react-rellax'
import { productActions } from "../../redux/actions/product.actions";
import "./DetailStyle.css"
import PropagateLoader from "react-spinners";
import { Button, Row } from "react-bootstrap"
import ChepItem from "../../images/chep-story.png"

const ProductDetailPage = () => {
    const params = useParams();
    const dispatch = useDispatch();
    var product = useSelector((state) => state.product.selectedProduct);

    useEffect(() => {
        if (params?.id) {
            dispatch(productActions.getSingleProduct(params.id));
        }
    }, [dispatch, params]);

    const handleBuyNow = (productId) => {
        dispatch(productActions.addProductToCart(productId))
    }

    if (!product) return (
        <div>
            <p>...</p>
        </div>
    )
    return (
        <div className="detail-page-style">

            <div className="detail-background">
                <svg viewBox="0 0 924 1048" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path id="bg" fill-rule="evenodd" clip-rule="evenodd" d="M6.10364 30.5765C0 42.5556 0 58.2371 0 89.6V958.4C0 989.763 0 1005.44 6.10364 1017.42C11.4725 1027.96 20.0395 1036.53 30.5765 1041.9C42.5556 1048 58.2371 1048 89.6 1048H583H645.4H693.037C720.014 1048 743.157 1028.77 748.092 1002.24L922.252 66.244C928.661 31.8029 902.229 0 867.197 0H689.656L689.493 1.6009C679.126 3.97259e-08 665.476 0 645.4 0H89.6C58.2371 0 42.5556 0 30.5765 6.10364C20.0395 11.4725 11.4725 20.0395 6.10364 30.5765Z" fill="#E8DBD2" />
                </svg>

            </div>

            <div className="detail-content">
                <Parallax speed={-3}>
                    <div className="detail-side">

                        <div className="round-item">

                        </div>

                        <div className="item-wrap">
                            <img src={ChepItem} alt="product-img" />
                        </div>


                    </div>
                </Parallax>
                <div className="detail-body">
                    <p>{product.description}</p>
                    <hr />
                    <h4>{product.name}</h4>
                    <p>{product.price} ₫</p>
                    <Button className="add-t-cart-detail-btn" variant="outline-info" onClick={() => handleBuyNow(product._id)} >+</Button>
                </div>

            </div>

        </div>
    )
}

export default ProductDetailPage
