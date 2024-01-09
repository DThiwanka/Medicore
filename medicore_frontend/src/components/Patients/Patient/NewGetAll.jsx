import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faEnvelope, faPhone, faMapMarkerAlt, faCalendarAlt, faClock, faUserMd, faNotesMedical } from '@fortawesome/free-solid-svg-icons';

const GetAll = () => {
    const [userData, setUserData] = useState(null);

    useEffect(() => {
        const currentUserData = localStorage.getItem('currentUser');
        if (currentUserData) {
            const { _id } = JSON.parse(currentUserData);
            fetchData(_id);
            console.log(currentUserData)
        }
    }, []);

    const fetchData = async (userId) => {
        try {
            const response = await axios.get(`http://localhost:8070/patient/get/${userId}`);
            setUserData(response.data.patient);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    return (
        <div className="container mt-4">
            <h1 className="mb-4">User Details</h1>
            {userData ? (
                <div className="row">
                    <div className="col-md-6">
                        <div className="card mb-4">
                            <div className="card-body">
                                <h5 className="card-title">
                                    <FontAwesomeIcon icon={faUser} /> Personal Information
                                </h5>
                                <p className="card-text">
                                    <FontAwesomeIcon icon={faUser} /> Name: {userData.name}
                                </p>
                                <p className="card-text">
                                    <FontAwesomeIcon icon={faEnvelope} /> Email: {userData.email}
                                </p>
                                <p className="card-text">
                                    <FontAwesomeIcon icon={faPhone} /> Contact Number: {userData.connumber}
                                </p>
                                <p className="card-text">
                                    <FontAwesomeIcon icon={faMapMarkerAlt} /> Address: {userData.address}
                                </p>
                                {/* Add more personal details as needed */}
                            </div>
                        </div>
                    </div>

                    <div className="col-md-12">
                        <table className="table">
                            <thead>
                                <tr>
                                    <th>Date</th>
                                    <th>Time</th>
                                    <th>Doctor</th>
                                    <th>Reason</th>
                                    {/* Add more table headers for additional appointment details */}
                                </tr>
                            </thead>
                            <tbody>
                                {userData.appointments.map((appointment) => (
                                    <tr key={appointment._id}>
                                        <td>{appointment.date}</td>
                                        <td>{appointment.time}</td>
                                        <td>{appointment.doctor}</td>
                                        <td>{appointment.reason}</td>
                                        {/* Add more table cells for additional appointment details */}
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>

                    
                </div>
            ) : (
                <p>Loading...</p>


            )}
        </div>
    );
};

export default GetAll;
