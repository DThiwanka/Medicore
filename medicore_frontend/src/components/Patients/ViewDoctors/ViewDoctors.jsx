import React, { useState, useEffect } from 'react';

function ViewDoctors() {
    const [doctors, setDoctors] = useState([]);

    useEffect(() => {
        fetch('http://localhost:8070/doctor/')
            .then(response => response.json())
            .then(data => {
                setDoctors(data);
                console.log(data);
                console.table(data);
            })
            .catch(error => {
                console.error('Error fetching data:', error);
            });
    }, []);

    return (
        <div className="container mt-4">
            <center>
            <h1 className="mb-4">Avilable Doctors</h1>
            </center>
            <table className="table table-bordered">
                <thead className="thead-dark">
                    <tr>
                        <th>ID</th>
                        <th>Code</th>
                        <th>Name</th>
                        <th>Phone Number</th>
                        <th>Specialization</th>
                    </tr>
                </thead>
                <tbody>
                    {doctors.map((doctor, index) => (
                        <tr key={index}>
                            <td>{index + 1}</td>
                            <td>{doctor.doccode}</td>
                            <td>{doctor.name}</td>
                            <td>{doctor.phoneNumber}</td>
                            <td>{doctor.specialization}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default ViewDoctors;
