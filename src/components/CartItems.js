import React from 'react'
import { Card, Button, Container } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { productActions } from "../redux/actions";



const CartItems = ({ chosenItem }) => {
    console.log("check items", chosenItem)
    const [q, setQ] = React.useState(1)
    const dispatch = useDispatch()
    return (
        <div>
            <Container>
                <Card>
                    <Card.Body>
                        <Card.Title>{chosenItem.name}</Card.Title>
                        <Card.Text>{chosenItem.price}$</Card.Text>
                        <Button onClick={() => setQ(q + 1)}>+</Button>
                        <Card.Text>quantity want to add or remove {q}</Card.Text>
                        <Button onClick={() => setQ(q - 1)}>-</Button>
                        <Card.Text>order {chosenItem.qty} items</Card.Text>
                        <hr></hr>
                        <Button
                            onClick={() => dispatch(productActions.addProductToCart(chosenItem._id, q))}
                        >add </Button>
                        <Button
                            onClick={() => dispatch(productActions.removeProductFromCart(chosenItem._id, q))}
                        >remove</Button>
                        <Button
                            onClick={() => dispatch(productActions.removeProductFromCart(chosenItem._id, chosenItem.qty))}
                        >delete product</Button>

                    </Card.Body>
                </Card>
            </Container>
        </div>
    )
}

export default CartItems
