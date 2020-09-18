import React from 'react'
import { Card, Button } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { productActions } from "../redux/actions";


const Product = ({ product, handleClick }) => {
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

              
                <Card.Text>quantity {q}</Card.Text>
                
                <Card.Text>{product.price}$</Card.Text>
                <Button
                    onClick={() => {
                        dispatch(productActions.addProductToCart(product._id, q))
                        setQ(1)
                    }}
                >Add</Button>
                
            </Card.Body>
        </Card>
    )
}

export default Product
