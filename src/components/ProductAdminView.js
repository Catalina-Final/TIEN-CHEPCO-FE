import React, { useState, useEffect } from "react";
import { useParams, useHistory, Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { productActions } from "../redux/actions/product.actions";

import { Card, Button } from "react-bootstrap";
import Moment from "react-moment";

const ProductAdminView = ({ product, handleClick }) => {

    console.log(product)
    return (
        // <Card onClick={() => handleClick(product._id)}>
        <Card>
            <Card.Text>
                adding by admin (createBy id)?!
            </Card.Text>
            <Card.Body>
                <Card.Title>{product.name}</Card.Title>
                <Card.Text>
                    Category:  {product.type}
                </Card.Text>

                <Card.Text>
                    {product.price}$
                </Card.Text>
                <Card.Text>
                    {product.ratingsAverage}
                </Card.Text>
                <Card.Text>
                    {product.inStock}
                </Card.Text>
                <Card.Text>
                    {product.availability}
                </Card.Text>
                <Card.Text>
                    <Moment fromNow>{product.createdAt}</Moment>
                </Card.Text>
                <Link to={`/admin/products/edit/${product._id}`}>
                    <Button>
                        Edit
                    </Button>
                </Link>
            </Card.Body>
        </Card>
    )
}

export default ProductAdminView
