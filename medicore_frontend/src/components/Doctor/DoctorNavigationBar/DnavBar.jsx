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
  const id = JSON.parse(currentUserData)._id;
  const name = JSON.parse(currentUserData).name;
  
  console.log(id,name);

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <a className="navbar-brand" href="#">Navbar w/ text</a>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarText">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item active">
            <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">Features</a> 
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">Pricing</a>
          </li>
        </ul>
        <span className="navbar-text">
          Welcome {name}
        </span>
      </div>
    </nav>
  );
}

export default DnavBar;
