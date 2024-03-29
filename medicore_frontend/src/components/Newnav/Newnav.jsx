import React from 'react';
import { FaShoppingCart } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import logo from '../../Images/logo.png'

function NewNav() {
    const containerStyles = {
        // backgroundColor: 'coral',
    };

    const linkStyles = {
        color: 'black', // Change this to the desired font color for links
        textDecoration: 'none', // Optionally remove underline
    };

    // const currentUserData = localStorage.getItem('localData');
    // const id = JSON.parse(currentUserData).id;
    // const currentUser = JSON.parse(currentUserData);
    // console.log(id);

    return (
        <nav className="navbar navbar-expand-lg p-3 shadow-sm ml-auto" expand="lg" bg="white" sticky="top" style={containerStyles}>
            <div className="container">
                <Link className="navbar-brand" to="/">
                    <img src={logo} width="40" height="40" alt=""></img>
                </Link>
                <h3>Medicore</h3>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item">
                            <Link className="nav-link" style={linkStyles} to="/">
                                <h5>
                                    Home
                                </h5>
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" style={linkStyles} to="/register">
                                <h5>
                                    Signup
                                </h5>
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" style={linkStyles} to="/login">
                                <h5>
                                    Login
                                </h5>
                            </Link>
                        </li>
                        
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default NewNav;
