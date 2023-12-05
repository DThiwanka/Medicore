import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// Navigation Bar
import AdminNavBar from './components/Admins/NavigationBar/AdminNavigationBar';
import CusNavBar from './components/Patients/PatientNavigationBar/PatientNavigationBar';

//User Pages
import AdminHomePage from './components/Admins/HomePage/AdminHomePage'
import PatientHomePage from './components/Patients/PatientHomePage/PatientHomePage';

//Landing Page
import Home from './components/Home/Home';

//Register Page
import Register from './components/Register/Register';

//Login Page
import Login from './components/Login/Login';


function App() {
  return (
    <div className="app">
      <BrowserRouter>
        
        {window.location.pathname.startsWith('/admin') ? <AdminNavBar /> : <CusNavBar />}

        <Routes>
          <Route path="/admin/" element={<AdminHomePage />} />


          <Route path="/User" element={<PatientHomePage />} />

          <Route path="/" element={<Home />} />
          
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          

          {/* Add more routes for the customer side as needed */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
