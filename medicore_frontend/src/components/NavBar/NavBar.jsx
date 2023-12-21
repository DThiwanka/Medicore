import React from 'react';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import { FaUserMd, FaHome } from 'react-icons/fa';
import { FaRegCalendarPlus } from "react-icons/fa6";
import { Link } from 'react-router-dom'; // Assuming you're using React Router for navigation

// Retrieve user information from localStorage
const user = JSON.parse(localStorage.getItem('currentUser'));
console.log(user);

function logout() {
    localStorage.clear();
    window.location.href = "/";
}

function NavBar() {
    const containerStyles = {
        backgroundColor: 'coral',
    };

    return (
        <Navbar expand="lg" bg="white" sticky="top" className="p-3 shadow-sm ml-auto">
            <Navbar.Brand href="/user/"><strong>Hospital Management System</strong></Navbar.Brand>
            <Navbar.Toggle aria-controls="navbarNavDropdown">
                <FaUserMd />
            </Navbar.Toggle>

            <Navbar.Collapse id="navbarNavDropdown">
                <Nav className="ml-auto">
                    
                    <Nav.Link as={Link} to="/user/appointment" className="mx-2 text-uppercase">
                        <FaRegCalendarPlus /> Appointment
                    </Nav.Link>

                    <Nav.Link as={Link} to="/patient-home" className="mx-2 text-uppercase">
                        <FaHome /> Home
                    </Nav.Link>
                    
                    <NavDropdown title={`Welcome, ${user.name}`} id="basic-nav-dropdown" align="end">
                        <NavDropdown.Item href="/user/profile">Profile</NavDropdown.Item>
                        <NavDropdown.Item href="#logout" onClick={logout}>Logout</NavDropdown.Item>
                    </NavDropdown>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
}

export default NavBar;
