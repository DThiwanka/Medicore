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

function App() {
  return (
    <div className="app">
      <BrowserRouter>
        
        {window.location.pathname.startsWith('/admin') ? <AdminNavBar /> : <CusNavBar />}

        <Routes>
          <Route path="/admin/" element={<AdminHomePage />} />


          <Route path="/User" element={<PatientHomePage />} />

          <Route path="/" element={<Home />} />
          

          {/* Add more routes for the customer side as needed */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
