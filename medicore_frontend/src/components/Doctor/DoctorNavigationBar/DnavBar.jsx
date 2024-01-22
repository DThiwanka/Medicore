import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faCalendarAlt, faUser } from '@fortawesome/free-solid-svg-icons';

const navbarStyle = {
  backgroundColor: '#3498db', // Custom background color
  boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)', // Box shadow for a subtle lift
  padding: '15px 20px', // Adjust padding for better spacing
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center', // Center items vertically
};

const brandStyle = {
  color: '#fff', // Text color for the brand
  fontWeight: 'bold',
  textDecoration: 'none', // Remove underlines
};

const navItemsStyle = {
  display: 'flex',
  flexDirection: 'column', // Align items vertically
  alignItems: 'flex-end', // Align items to the end of the column
};

const linkStyle = {
  color: '#fff', // Text color for links
  marginBottom: '10px', // Adjust spacing between links
  textDecoration: 'none', // Remove underlines
  transition: 'color 0.3s ease', // Smooth color transition on hover
};

const welcomeStyle = {
  color: '#fff', // Text color for the welcome message
};

function DnavBar() {
  const currentUserData = localStorage.getItem('localData');
  const currentUser = JSON.parse(currentUserData);

  return (
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <a class="navbar-brand" href="#">Navbar w/ text</a>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarText">
        <ul class="navbar-nav mr-auto">
          <li class="nav-item active">
            <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Features</a> 
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Pricing</a>
          </li>
        </ul>
        <span class="navbar-text">
          Navbar text with an inline element
        </span>
      </div>
    </nav>
  );
}

export default DnavBar;
