import React from 'react'
import { Card, Button } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { productActions } from "../redux/actions";



const CartItems = ({ chosenItem }) => {
    console.log("check items", chosenItem)
    const [q, setQ] = React.useState(1)
    const dispatch = useDispatch()
    return (
        <div>

            <Card>
                <Card.Title>{chosenItem.name}</Card.Title>
                <Card.Text>{chosenItem.type.type}</Card.Text>
                <Button
                    onClick={() => setQ(q + 1)}
                >up</Button>
                <Card.Text>heheheh {q}</Card.Text>
                <Card.Text>{chosenItem.qty}</Card.Text>
                <Button>down</Button>
                <Card.Text>{chosenItem.price}$</Card.Text>
                <Button
                    onClick={() => dispatch(productActions.addProductToCart(chosenItem._id, q))}
                >BUY</Button>
            </Card>
        </div>
    )
}

export default CartItems
