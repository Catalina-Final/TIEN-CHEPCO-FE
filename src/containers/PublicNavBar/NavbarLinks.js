import React, { useEffect, useState } from "react";
import { Navbar, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { authActions } from "../../redux/actions";
import { useDispatch } from "react-redux";
import CartIcon from '../../images/cart.svg'
import Order from '../../images/user-dash.svg'
import './style.css'


const NavbarLinks = ({ user }) => {
    const auth = useSelector(state => state.auth)
    const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
    const loading = useSelector((state) => state.auth.loading);
    const cart = useSelector((state) => state.product.cart);
    console.log("==========", cart)
    const [productNum, setProductNum] = useState(0)
    const dispatch = useDispatch();
    const handleLogout = () => {
        dispatch(authActions.logout());
    };
    const adminLinks = (

        <div className="tien-nav-links">
            <Nav.Link as={Link} to="/admin/dashboard">Admin</Nav.Link>
            <Nav.Link as={Link} to="/admin/products">Product's List</Nav.Link>
            <Nav.Link as={Link} to="/admin/orders">Order's List</Nav.Link>
            <Nav.Link onClick={handleLogout}>Logout</Nav.Link>
        </div>

    );
    const userLinks = (

        <div className="tien-nav-links">
            <Nav.Link as={Link} to="/about">About us</Nav.Link>
            <Nav.Link as={Link} to="/user/dashboard"><img src={Order} alt="order icon" style={{ width: "2.5vw", marginTop: "0" }} /></Nav.Link>
            <Nav.Link as={Link} to="/user/order"><img src={CartIcon} alt="cart icon" style={{ width: "3vw" }} /> {productNum}</Nav.Link>
            <Nav.Link onClick={handleLogout}>Logout</Nav.Link>
        </div>

    );
    const publicLinks = (

        <div className="tien-nav-links">
            <Nav.Link as={Link} to="/about">About us</Nav.Link>
            <Nav.Link as={Link} to="/login">Login</Nav.Link>
            <Nav.Link as={Link} to="/register">Register</Nav.Link>
        </div>

    );
    useEffect(() => {
        if (cart && cart._id) {
            setProductNum(cart.products.reduce((sum, item) => (sum + item.quantity), 0))
        }
        if (cart === null) {
            setProductNum(0)
        }
    }, [cart])


    if (user && user.roles) {
        if (user.roles === "admin") {
            return adminLinks;
        } else {
            return userLinks;
        }
    } else {
        return publicLinks;
    }
}

export default NavbarLinks;