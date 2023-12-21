import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';


//Styles
const tableStyles = {
    backgroundColor: '#92a8d1',

};

const internalTable = {
    fontFamily: 'Helvetica',
    width: '100%',
}


//Functions
function AllAppointments() {
    const [appointments, setAppointments] = useState([]);

    useEffect(() => {
        async function getAppointments() {
            try {
                const response = await axios.get("http://localhost:8070/appointment/");
                setAppointments(response.data); // Update state with fetched patient data
                console.log(response.data)
            } catch (error) {
                alert(error.message);
            }
        }

        getAppointments();
    }, []);

    return (
        <div className='container mx-auto'>
            
            <div className="mt-3">
                <table className="table table-bordered table-hover">
                    <thead>
                        <tr>
                            <th scope="col">Id</th>
                            <th scope="col">Name</th>
                            <th scope="col">Date</th>
                            <th scope="col">Time</th>
                            <th scope="col">Reason</th>
                            <th scope="col">Info</th>
                            <th scope="col">Doctor</th>
                            <th scope="col">Insurance</th>
                            <th scope="col">Notes</th>
                            <th scope="col">Created At</th>
                            <th scope="col" colSpan={2} style={{ textAlign: "center" }}>Action</th>
                        </tr>
                    </thead>

                    <tbody>
                        {appointments.map((appointment, index) => (
                            <tr key={index}>
                                <td>{index + 1}</td>
                                <td>{appointment.name}</td>
                                <td>{appointment.date}</td>
                                <td>{appointment.time}</td>
                                <td>{appointment.reason}</td>
                                <td>{appointment.info}</td>
                                <td>{appointment.doctor}</td>
                                <td>{appointment.insurance}</td>
                                <td>{appointment.notes}</td>
                                <td>{appointment.createdAt}</td>
                                <td>
                                    <button className='btn btn-success'>UPDATE</button>
                                </td>
                                <td>
                                    <button className='btn btn-danger'>DELETE</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default AllAppointments;
