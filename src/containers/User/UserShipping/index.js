import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { productActions } from "../../../redux/actions/product.actions";
import { orderActions } from "../../../redux/actions/order.actions";
import { useHistory, Link, Redirect } from "react-router-dom";
import './ShippingStyle.css'
import ShippingBg from '../../../images/shipping-bg.svg'
import {
    Form,
    Button,
    ButtonGroup,
} from "react-bootstrap";

const UserShipping = () => {
    const dispatch = useDispatch();
    const loading = useSelector((state) => state.product.loading);
    const isOrderFinished = useSelector((state) => state.product.isOrderFinished);
    const cart = useSelector((state) => state.product.cart);
    const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
    const history = useHistory();
    console.log("cart", cart)


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
    };
    useEffect(() => {
        if (cart?.products.length < 1) {
            history.push("/")
        }
    }, [cart])
    useEffect(() => {
        if (!loading && isOrderFinished)
            history.push("/user/dashboard");
    }, [loading, isOrderFinished])

    return (
        <div className="shipping-info-style">
            <div className="shipping-info-body">
                <div className="shipping-info-sidebar">
                    <div className="shipping-form-wrap">
                        <Form onSubmit={handleSubmit}>
                            <Form.Group>
                                <Form.Control
                                    type="text"
                                    plaintext
                                    required
                                    placeholder="Fullname"
                                    name="fullName"
                                    value={formData.fullName}
                                    onChange={handleChange}
                                />
                                <hr />
                            </Form.Group>
                            <Form.Group>
                                <Form.Control
                                    type="number"
                                    id="replyNumber"
                                    min="0"
                                    data-bind="value:replyNumber"
                                    plaintext
                                    required
                                    placeholder="Phone Number"
                                    name="phone"
                                    value={formData.phone}
                                    onChange={handleChange}
                                />
                                <hr />
                            </Form.Group>
                            <Form.Group>
                                <Form.Control
                                    as="textarea"
                                    plaintext
                                    style={{ height: "20vh" }}
                                    placeholder="Address"
                                    name="address"
                                    value={formData.address}
                                    onChange={handleChange}
                                />
                                <hr />
                            </Form.Group>
                            <div className="stick-wrap-style">
                                <div>
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



                                            <Button type="submit" variant="outline-light" className="tien-stick-button" >
                                                <svg viewBox="0 0 524 397" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path id="stick-bnt" d="M516.834 47.7786L475.834 6.54857C473.824 4.4933 471.426 2.85647 468.78 1.73259C466.134 0.608705 463.292 0.0200263 460.417 0.000502123C457.543 -0.0190221 454.693 0.53101 452.032 1.61885C449.371 2.70669 446.951 4.3108 444.914 6.33858L187.454 261.619L78.5936 151.909C74.5516 147.809 69.0464 145.482 63.2892 145.441C57.5319 145.4 51.994 147.647 47.8936 151.689L6.4536 192.689C2.35834 196.779 0.0398168 202.318 0.000508062 208.105C-0.0388007 213.893 2.20428 219.463 6.24361 223.609L171.564 390.229C175.652 394.325 181.191 396.645 186.978 396.687C192.766 396.728 198.337 394.487 202.484 390.449L516.604 78.6886C518.659 76.68 520.296 74.2845 521.421 71.6402C522.545 68.9958 523.135 66.155 523.157 63.2815C523.178 60.408 522.63 57.5586 521.545 54.8978C520.46 52.2371 518.859 49.8175 516.834 47.7786Z" fill="#5E9194" />
                                                </svg>

                                            </Button>




                                        )}

                                </div>

                            </div>

                        </Form>
                    </div>

                </div>
                <div className="shipping-info-content">
                    <div>
                        <img src={ShippingBg} alt="shipping background" />
                    </div>
                </div>

            </div>

        </div>
    )
}

export default UserShipping
