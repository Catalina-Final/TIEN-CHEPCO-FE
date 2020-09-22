import React, { useState, useEffect } from "react";
import { useParams, useHistory, Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { productActions } from "../redux/actions/product.actions";

import { Card, Button } from "react-bootstrap";
import Moment from "react-moment";
import productAdminStyle from './productAdmin.css'
const ProductAdminView = ({ product, handleClick }) => {

    return (

        <div >
            <div style={{ marginTop: "10px" }}>
                <div className="tien-admin-product-top">
                    <h4>{product.name}</h4>
                    <Link to={`/admin/products/edit/${product._id}`}>
                        <Button className="tien-button-list">
                            Edit
                    </Button>
                    </Link>
                </div>
                <hr />
                <p>
                    Category:  {product.type}
                </p>
                <hr />
                <p>
                    {product.price} vnd
                </p>
                <hr />
                <p>
                    {product.ratingsAverage} stars
                </p>
                <hr />
                <p>
                    {product.inStock} in stock
                </p>
                <hr />
                <p>
                    {product.availability} available
                </p>
                <hr />
                <p>
                    Created from <Moment fromNow>{product.createdAt}</Moment>
                </p>
                <hr />

            </div>
        </div>
    )
}

export default ProductAdminView
