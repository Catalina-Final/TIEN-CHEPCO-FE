import React from 'react'
import { Card, Button } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { productActions } from "../redux/actions";





const Product = ({ product, handleClick, handleBuyNow }) => {
    const [q, setQ] = React.useState(1)
    const dispatch = useDispatch()
    return (
        <Card >
            <Card.Body>
                <Card.Title onClick={() => handleClick(product._id)}>{product.name}</Card.Title>
                <Card.Text>
                    {product.description}
                </Card.Text>
                <Card.Text>
                    {product.price}$
                </Card.Text>
                <Card.Text>
                    {product.ratingsAverage}
                </Card.Text>
                <Card.Text>
                    {product.avalibility}
                </Card.Text>
                <Button variant="warning" onClick={() => handleBuyNow(product._id)} >Buy now</Button>

            </Card.Body>
        </Card>
    )
}

export default Product
