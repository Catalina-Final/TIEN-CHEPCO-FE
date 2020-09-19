import React from 'react'
import { Card, Button } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { productActions } from "../redux/actions";



const CartItems = ({ chosenItem }) => {

    const [quantity, setQuantity] = React.useState(1)
    const dispatch = useDispatch()
    return (
        <div>

            <Card>
                <Card.Title>{chosenItem?.product?.name}</Card.Title>
                <Card.Body>
                    <Button
                        onClick={() => setQuantity(quantity => quantity + 1)}
                    >up</Button>
                    <Card.Text>heheheh {quantity}</Card.Text>
                    <Card.Text>{chosenItem?.quantity}</Card.Text>
                    <Button onClick={() => setQuantity(quantity => quantity - 1 > 0 ? quantity - 1 : 1)}>down</Button>
                    <Card.Text>{chosenItem?.product?.price}$</Card.Text>
                    <Button
                        onClick={() => dispatch(productActions.updateProductFromCart(chosenItem.product._id, quantity))}
                    >Update</Button>

                    <Button
                        onClick={() => dispatch(productActions.removeProductFromCart(chosenItem.product._id, chosenItem?.quantity))}
                    >Remove</Button>
                </Card.Body>
            </Card>
        </div>
    )
}

export default CartItems
