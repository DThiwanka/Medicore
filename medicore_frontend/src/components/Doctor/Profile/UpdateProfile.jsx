import React, { useEffect, useState } from 'react'
import axios from 'axios';

function UpdateProfile() {


    const [doctorData, setDoctorData] = useState('');

    const currentUserData = localStorage.getItem('localData');
    
    
    const id = JSON.parse(currentUserData).id;
    const currentUser = JSON.parse(currentUserData);

    useEffect(() => {
        fetchData(id);
    }, [id]);

    const fetchData = async (id) => {
        try {
            const response = await axios.get(`https://medicore.onrender.com/doctor/get/${id}`);
            setDoctorData(response.data.doctor);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };
    

  return (
      <div>
          <h2>{ currentUser.address}</h2>
    </div>
  )
}

export default UpdateProfile