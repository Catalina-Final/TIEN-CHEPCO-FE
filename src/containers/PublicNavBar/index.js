import React, { useEffect, useState } from "react";
import { Navbar, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { authActions } from "../../redux/actions";
import { useDispatch } from "react-redux";
import NavbarLinks from "../PublicNavBar/NavbarLinks";

const PublicNavbar = () => {
    const auth = useSelector(state => state.auth)

    return (
        <Navbar bg="light" expand="lg">
            <Navbar.Brand as={Link} to="/" className="mr-auto">
                ChepCo
        </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto"></Nav>
                <NavbarLinks user={auth.user} />

            </Navbar.Collapse>
        </Navbar>
    )
}

export default PublicNavbar
