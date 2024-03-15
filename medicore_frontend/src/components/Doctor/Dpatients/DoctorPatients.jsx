import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Container } from 'react-bootstrap';

function DoctorPatients() {
  const [appointments, setAppointments] = useState([]);
  const docName = localStorage.getItem('localData') ? JSON.parse(localStorage.getItem('localData')).name : '';

  useEffect(() => {
    fetchAppointments(docName);
  }, [docName]);

  // const fetchAppointments = async (docName) => {
  //   try {
  //     const response = await axios.get(`http://localhost:8070/appointment/all`);
  //     const filteredAppointments = response.data.filter(appointments => appointments.doctor.name === docName);
  //     setAppointments(filteredAppointments);
  //     console.log(response)
  //     console.log(filteredAppointments)
  //   } catch (error) {
  //     console.error('Error fetching data:', error);
  //   }
  // };

  const fetchAppointments = async (docName) => {
    try {
      const response = await axios.get('http://localhost:8070/appointment/all');
      console.log('All Appointments:', response.data);
      const filteredAppointments = response.data.filter(appointment => {
        console.log('Doctor Name:', appointment.doctor.doctor);
        console.log('Desired Doctor Name:', docName);
        return appointment.doctor.name === docName;
      });
      console.log('Filtered Appointments:', filteredAppointments);
      setAppointments(filteredAppointments);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };
  

  return (
    <div>
      <h1>Assigned Patients for {docName}</h1>
      <Container>
        <table className="table table-bordered table-hover mt-4">
          <thead>
            <tr>
              <th scope="col">Id</th>
              <th scope="col">Appointment ID</th>
              <th scope="col">Patient ID</th>
              <th scope="col" colSpan={3} style={{ textAlign: "center" }}>Action</th>
            </tr>
          </thead>
          <tbody>
            {appointments.map((appointment, index) => (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{appointment._id}</td>
                <td>{appointment.patientID}</td>
                <td><button className='btn btn-warning btn-block'>Pending</button></td>
                <td><button className='btn btn-success btn-block'>UPDATE</button></td>
                <td><button className='btn btn-danger btn-block'>DELETE</button></td>
              </tr>
            ))}
          </tbody>
        </table>
      </Container>
    </div>
  );
}

export default DoctorPatients;
