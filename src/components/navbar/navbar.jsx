import React from "react";
import './navbar.css'
import { Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { FaArrowLeft } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const NavBar = () => {
    const navigate = useNavigate()
    return (
        <div className="navbar-becky">
            <Navbar className="nav-bootstrap-becky">
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">

                    <Nav.Link onClick={() => navigate(-1)}><FaArrowLeft /> Back</Nav.Link>
                    <Nav className="me-auto">
                        <Nav.Link href="/dashboard">Dashboard</Nav.Link>
                        <Nav.Link href="/" className="nav-profile-becky">B</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </div>
    )
}

export default NavBar