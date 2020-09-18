import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { authActions } from "../../redux/actions";
import { useDispatch } from "react-redux";
const PuclicNavbar = () => {
    const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
    const loading = useSelector((state) => state.auth.loading);
    const cart = useSelector((state) => state.auth.cart);
    console.log(cart)
    const productNum = cart.length > 0 ? cart.reduce((sum, product) => (sum + product.qty), 0) : 0;

    const dispatch = useDispatch();
    const handleLogout = () => {
        dispatch(authActions.logout());
    };
    const authLinks = (
        <Nav>
            <Nav.Link as={Link} to="/admin/profile">
                Admin
      </Nav.Link>
            <Nav.Link as={Link} to="/admin/products">
                admin product view
      </Nav.Link>
            <Nav.Link as={Link} to="/admin/orders">
                admin order view
      </Nav.Link>
            <Nav.Link as={Link} to="/user/dashboard">
                user dashboard
      </Nav.Link>
            <Nav.Link as={Link} to="user/order">
                Cart ({productNum})
      </Nav.Link>
            <Nav.Link onClick={handleLogout}>
                Logout
      </Nav.Link>
        </Nav>
    );
    const publicLinks = (
        <Nav>
            <Nav.Link as={Link} to="/register">
                Register
      </Nav.Link>
            <Nav.Link as={Link} to="/login">
                Login
      </Nav.Link>
        </Nav>
    );



    return (
        <Navbar bg="light" expand="lg">
            <Navbar.Brand as={Link} to="/" className="mr-auto">
                ChepCo
        </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto"></Nav>
                {!loading && <>{isAuthenticated ? authLinks : publicLinks}</>}
            </Navbar.Collapse>
        </Navbar>
    )
}

export default PuclicNavbar
