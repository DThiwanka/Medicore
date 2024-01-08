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

//Get ALL
import Getallpatients from './components/Admins/GetAllPatients/Getallpatients';
import Getalladmins from './components/Admins/GetAllAdmins/Getalladmins';
import Patient from './components/Patients/Patient/Patient';
import NavBar from './components/NavBar/NavBar';

import Newnav from './components/Newnav/Newnav';
import Appointment from './components/Patients/Appointment/Appointment';
import Unauth from './components/Unauth';
import UpdatePatient from './components/Patients/Patient/UpdatePatient';
import DnavBar from './components/Doctor/DoctorNavigationBar/DnavBar';
import NewGetAll from './components/Patients/Patient/NewGetAll';

//Doctor

//Test


function App() {
  return (
    <div className="app">
      <BrowserRouter>
        

        {
          window.location.pathname.startsWith('/admin') ? <AdminNavBar />
            : window.location.pathname.startsWith('/user') ? <NavBar />
              : window.location.pathname.startsWith('/doctor') ? <DnavBar/>
              : <Newnav/>
        }


        <Routes>
          
          <Route path='/unauthorized' exact element={<Unauth/>}/> 
          <Route path="/" exact element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />



          <Route path="/admin/" element={<AdminHomePage />} />
          <Route path="/admin/viewpatients/" element={<Getallpatients />} />
          <Route path="/admin/viewadmins/" element={<Getalladmins />} />

          

          <Route path="/User" element={<PatientHomePage />} />
          <Route path="/user/appointments" exact element={<Appointment />} />
          <Route path="/user/profile" element={<Patient />} />
          <Route path="/user/profile/update" element={<UpdatePatient />} />

          <Route path="/user/newgetall/" element={<NewGetAll />} />

          
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
