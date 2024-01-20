import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link, useParams } from 'react-router-dom';
import { Container, Row, Col, Tab, Nav, Button, Image } from 'react-bootstrap';

function DoctorPatients() {

  const [doctorData, setDoctorData] = useState('');
  // const { id } = useParams();

  const docdata = localStorage.getItem('localData');
  const userID = JSON.parse(docdata)._id;

  useEffect(() => {
    fetchData(userID);
  }, [userID]);

  const fetchData = async (userID) => {
    try {
      const response = await axios.get(`http://localhost:8070/doctor/get/${userID}`);
      setDoctorData(response.data.doctor);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  return (
    <div>
      Assigned Patients
      <Container>
        <table className="table table-bordered table-hover mt-4">
          <thead>
            <tr>
              <th scope="col">Id</th>
              <th scope="col">Name</th>

              <th scope="col" colSpan={3} style={{ textAlign: "center" }}>Action</th>
            </tr>
          </thead>

          <tbody>
            {doctorData?.assignedPatients?.map((assignedPatient, index) => (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{assignedPatient.patientID}</td>
                <td><button className='btn btn-warning btn-block'>Pending</button></td>
                <td>

                  <button className='btn btn-success btn-block' >UPDATE</button>

                </td>
                <td>
                  <button className='btn btn-danger btn-block'>DELETE</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </Container>
    </div>
  )
}

export default DoctorPatients