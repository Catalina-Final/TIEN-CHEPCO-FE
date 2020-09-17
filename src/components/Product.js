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
                <Button variant="warning" onClick={() => handleBuyNow(product)} >Buy now</Button>


                ============== <br />
                <Button
                    onClick={() => setQ(q + 1)}
                >up</Button>
                <Card.Text>{product.qty}</Card.Text>
                <Card.Text>heheh {q}</Card.Text>
                <Button>down</Button>
                <Card.Text>{product.price}$</Card.Text>
                <Button
                    onClick={() => {
                        dispatch(productActions.addProductToCart(product._id, q))
                        setQ(1)
                    }}
                >BUY</Button>
            </Card.Body>
        </Card>
    )
}

export default Product
