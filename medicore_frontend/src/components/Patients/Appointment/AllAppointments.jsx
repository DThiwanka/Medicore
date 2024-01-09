import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Container } from 'react-bootstrap';


//Functions

function AllAppointments() {
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


    const onDeleteClick = async (userId, appointmentId) => {

        var result = window.confirm(`Are you sure to delete Appoitment ID ? :- ${appointmentId}`);

        if (result) {
            try {
                await axios.delete(`http://localhost:8070/patient/appointments/${userId}/${appointmentId}`);
                fetchData(userId); // Refresh data after successful deletion  
                alert('Appointment Deleted Successfully');
            } catch (err) {
                console.log('Error from onDeleteClick:', err);
            }
        } else {
            return;
        }

       
    };


    return (
        <>
            <Container>
                <table className="table table-bordered table-hover mt-4">
                    <thead>
                        <tr>
                            <th scope="col">Id</th>
                            <th scope="col">Order Id</th>
                            <th scope="col">Date</th>
                            <th scope="col">Time</th>
                            <th scope="col">Reason</th>
                            <th scope="col">Doctor</th>
                            <th scope="col">Notes</th>
                            <th scope="col">Status</th>
                            <th scope="col" colSpan={2} style={{ textAlign: "center" }}>Action</th>
                        </tr>
                    </thead>
                    
                    <tbody>
                        {userData?.appointments?.map((appointment, index) => (
                            <tr key={index}>
                                <td>{index + 1}</td>
                                <td>{appointment._id}</td>
                                <td>{appointment.date}</td>
                                <td>{appointment.time}</td>
                                <td>{appointment.reason}</td>
                                <td>{appointment.doctor}</td>
                                <td>{appointment.notes}</td>
                                <td><button className='btn btn-warning btn-block'>Pending</button></td>
                                <td>
                                    <button className='btn btn-success btn-block'>UPDATE</button>
                                </td>
                                <td>
                                    <button className='btn btn-danger btn-block' onClick={() => onDeleteClick(userData?._id,appointment._id)}>DELETE</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </Container>
        </>
    );
}

export default AllAppointments;
