import React from 'react';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import { FaHome, FaUser, FaHospital, FaBook } from 'react-icons/fa';

function PatientNavigationBar() {
  return (
      <Navbar bg="primary" variant="dark" expand="lg" className="shadow-sm">
          <Navbar.Brand href="#home">Hospital Management System</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="ml-auto">
                  <Nav.Link href="#home"><FaHome className="mr-1" />Home</Nav.Link>
                  <NavDropdown title={<span><FaUser className="mr-1" />Account</span>} id="account-dropdown">
                      <NavDropdown.Item href="#profile">Profile</NavDropdown.Item>
                      <NavDropdown.Item href="#appointments">Appointments</NavDropdown.Item>
                      <NavDropdown.Divider />
                      <NavDropdown.Item href="#logout">Logout</NavDropdown.Item>
                  </NavDropdown>
                  <Nav.Link href="#hospitals"><FaHospital className="mr-1" />Hospitals</Nav.Link>
                  <Nav.Link href="#services"><FaBook className="mr-1" />Services</Nav.Link>
              </Nav>
          </Navbar.Collapse>
      </Navbar>
  )
}

export default PatientNavigationBar