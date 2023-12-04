import React from 'react';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import { FaHome, FaUser, FaUserMd, FaPlus, FaList } from 'react-icons/fa';

function AdminNavigationBar() {
  return (
      <Navbar bg="primary" variant="dark" expand="lg" className="shadow-sm">
          <Navbar.Brand href="#home" className="font-weight-bold text-light">Hospital Management System</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="ml-auto">
                  <Nav.Link href="#dashboard" className="text-light">
                      <FaHome className="mr-1" /> Dashboard
                  </Nav.Link>
                  <NavDropdown title={<span><FaUser className="mr-1" /> Patients</span>} id="patients-dropdown" className="text-light">
                      <NavDropdown.Item href="#add-patient"><FaPlus className="mr-1" /> Add Patient</NavDropdown.Item>
                      <NavDropdown.Item href="#view-patients"><FaList className="mr-1" /> View Patients</NavDropdown.Item>
                  </NavDropdown>
                  <NavDropdown title={<span><FaUserMd className="mr-1" /> Doctors</span>} id="doctors-dropdown" className="text-light">
                      <NavDropdown.Item href="#add-doctor"><FaPlus className="mr-1" /> Add Doctor</NavDropdown.Item>
                      <NavDropdown.Item href="#view-doctors"><FaList className="mr-1" /> View Doctors</NavDropdown.Item>
                  </NavDropdown>
              </Nav>
          </Navbar.Collapse>
      </Navbar>
  )
}

export default AdminNavigationBar