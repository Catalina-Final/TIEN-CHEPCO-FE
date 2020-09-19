import React, { useEffect, useState } from "react";
import { Navbar, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { authActions } from "../../redux/actions";
import { useDispatch } from "react-redux";



const NavbarLinks = ({ user }) => {
    const auth = useSelector(state => state.auth)
    const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
    const loading = useSelector((state) => state.auth.loading);
    const cart = useSelector((state) => state.product.cart);
    const [productNum, setProductNum] = useState(0)
    const dispatch = useDispatch();
    const handleLogout = () => {
        dispatch(authActions.logout());
    };
    const adminLinks = (
        <Nav>
            <Nav.Link
                as={Link}
                to="/admin/profile"

            >
                Admin
      </Nav.Link>
            <Nav.Link as={Link} to="/admin/products">
                admin product view
      </Nav.Link>
            <Nav.Link as={Link} to="/admin/orders">
                admin order view
      </Nav.Link>

            <Nav.Link onClick={handleLogout}>
                Logout
      </Nav.Link>
        </Nav>
    );
    const userLinks = (
        <Nav>
            <Nav.Link as={Link} to="/about">
                About us
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
            <Nav.Link as={Link} to="/about">
                About us
      </Nav.Link>
        </Nav>
    );
    useEffect(() => {
        if (cart && cart._id) {
            setProductNum(cart.products.reduce((sum, item) => (sum + item.quantity), 0))
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