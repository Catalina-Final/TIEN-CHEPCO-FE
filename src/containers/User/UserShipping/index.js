import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { productActions } from "../../../redux/actions/product.actions";
import { orderActions } from "../../../redux/actions/order.actions";
import { useHistory, Link, Redirect } from "react-router-dom";

import {
    Form,
    Button,
    ButtonGroup,
} from "react-bootstrap";

const UserShipping = () => {
    const dispatch = useDispatch();
    const loading = useSelector((state) => state.product.loading);
    const products = useSelector((state) => state.product.cart);
    const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
    const history = useHistory();
    console.log("products", products)

    const [formData, setFormData] = useState({
        fullName: "",
        phone: "",
        address: "",
    });

    const handleChange = (e) =>
        setFormData({ ...formData, [e.target.name]: e.target.value });

    const handleSubmit = (e) => {
        e.preventDefault();
        const { fullName, phone, address } = formData;

        dispatch(orderActions.createOrder(fullName, phone, address));
        history.push("/user/dashboard");
    };


    return (
        <div>
            <Form onSubmit={handleSubmit}>
                <Form.Group>
                    <Form.Control
                        type="text"
                        required
                        placeholder="Fullname"
                        name="fullName"
                        value={formData.fullName}
                        onChange={handleChange}
                    />
                </Form.Group>
                <Form.Group>
                    <Form.Control
                        type="text"
                        required
                        placeholder="Phone Number"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                    />
                </Form.Group>
                <Form.Group>
                    <Form.Control
                        as="textarea"
                        rows="10"
                        placeholder="Address"
                        name="address"
                        value={formData.address}
                        onChange={handleChange}
                    />
                </Form.Group>
                {loading ? (
                    <Button
                        className="mr-3"
                        variant="primary"
                        type="button"
                        disabled
                    >
                        <span
                            className="spinner-border spinner-border-sm"
                            role="status"
                            aria-hidden="true"
                        ></span>
                  Submitting...
                    </Button>
                ) : (
                        // link to userdashboard, user can see the order s pending till admin approve

                        <Button className="mr-3" type="submit" variant="primary">
                            Submit
                        </Button>


                    )}
            </Form>
        </div>
    )
}

export default UserShipping
