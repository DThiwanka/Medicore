import React, { useState, useEffect } from 'react';
import axios from 'axios';
// import { useAuthentication } from '../../Auth/AuthHelper';
import { Link, useParams } from 'react-router-dom';

function Profile() {

  const [doctorData, setDoctorData] = useState(null);

  // const doctor = useAuthentication();

  const currentDocData = localStorage.getItem('localData');
  const docId = JSON.parse(currentDocData)._id;

  const fetchData = async (docId) => {
    try {
      const data = await axios.get(`http://localhost:8070/doctor/get/${docId}`);
      setDoctorData(data);
      console.log(data)
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };


  const roundedDesign = {
    borderRadius: '5%', padding: '20px'
  }


  // if (!doctor) {
  //   return null;
  // }

  return (
    <div>
      {data.name}
    </div>
  )
}

export default Profile