import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { Container } from 'react-bootstrap';


//Functions

function AllAppointments() {
    const [appointments, setAppointments] = useState([]);

    const userdetails = JSON.parse(localStorage.getItem('currentUser'));
    console.log(userdetails._id);
 
    useEffect(() => {
        const getAppointments = () => {
            try {
                let appointmentData = JSON.parse(localStorage.getItem('appointments'));
                if (appointmentData && Array.isArray(appointmentData)) {
                    setAppointments(appointmentData)
                    console.log("Data", appointmentData)
                }
            } catch (error) {
                alert(error.message);
            }

        }
        getAppointments();
       
    }, []);



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
                        {appointments.map((appointment, index) => (
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
                                    <button className='btn btn-danger btn-block'>DELETE</button>
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
