import React from "react";
import { NavLink } from "react-router-dom";
import { Container, Nav, Navbar } from "react-bootstrap";
import "./MenuBar.css";
import logo from "../..//images/logo/baller-logo-3.png";

const MenuBar = () => {
    const activeStyle = {
        fontWeight: "bold",
        color: "yellow",
        textDecoration: "underline",
    };
    return (
        <Navbar bg="transparent" variant="dark" expand="lg">
            <Container className='mt-4'>
                <Navbar.Brand className="fs-3" href="/home">
                    <img className="logo" src={logo} alt="" />
                </Navbar.Brand>

                <Navbar.Toggle aria-controls="navbarScroll" />

                <Navbar.Collapse id="navbarScroll">
                    <Nav className="ms-auto my-2 my-lg-0" navbarScroll>
                        <NavLink activeStyle={activeStyle} to="/home">
                            Home
                        </NavLink>
                        <NavLink activeStyle={activeStyle} to="/club">
                            Club
                        </NavLink>
                        <NavLink activeStyle={activeStyle} to="/coaches">
                            Coaches
                        </NavLink>
                        <NavLink activeStyle={activeStyle} to="/about">
                            About us
                        </NavLink>
                        <NavLink activeStyle={activeStyle} to="/contact">
                            Contact us
                        </NavLink>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default MenuBar;
