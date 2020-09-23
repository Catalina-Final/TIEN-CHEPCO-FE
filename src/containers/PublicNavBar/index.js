import React, { useEffect, useState } from "react";
import { Navbar, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { authActions } from "../../redux/actions";
import { useDispatch } from "react-redux";
import NavbarLinks from "../PublicNavBar/NavbarLinks";
import './style.css'
import Menu from '../../images/menu.svg'
import ChepLogo from '../../images/chep-logo.png'
import Cart from '../../images/cart.svg'

const PublicNavbar = () => {
    const auth = useSelector(state => state.auth)
    const [productNum, setProductNum] = useState(0)
    const cart = useSelector((state) => state.product.cart);
    useEffect(() => {
        if (cart && cart._id) {
            setProductNum(cart.products.reduce((sum, item) => (sum + item.quantity), 0))
        } else {
            setProductNum(0);
        }
    }, [cart])
    return (
        <div>
            <Navbar className="tien-nav-bar">
                <Link to="/">
                    <Navbar.Brand >
                        <img src={ChepLogo} alt="chepLogo" style={{ height: "10vh", marginLeft: "15px" }} />
                    </Navbar.Brand>
                </Link>
                <NavbarLinks user={auth.user} />
            </Navbar>

        </div>
    )
}

export default PublicNavbar
