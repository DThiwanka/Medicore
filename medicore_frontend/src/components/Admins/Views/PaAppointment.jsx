import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Container } from 'react-bootstrap';
import { Link, useParams } from 'react-router-dom';

function PaAppointment() {

  const [userData, setUserData] = useState(null);

  const { id } = useParams();
  useEffect(() => {
    fetchData(id);
  }, [id]);

 
  console.log(id);

  const fetchData = async (id) => {
      try {
        const response = await axios.get(`http://localhost:8070/patient/get/${id}`);
        setUserData(response.data.patient);
        
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };


    const onDeleteClick = async (id, appointmentId) => {

        var result = window.confirm(`Are you sure to delete Appoitment ID ? :- ${appointmentId}`);

        if (result) {
            try {
                await axios.delete(`http://localhost:8070/patient/appointments/${id}/${appointmentId}`);
                fetchData(id); // Refresh data after successful deletion  
                alert('Appointment Deleted Successfully');
            } catch (err) {
                console.log('Error from onDeleteClick:', err);
            }
        } else {
            return;
        }

       
    };

  const internalTable = {
    fontFamily: 'Helvetica',
    maxWidth: '70%',
    margin: '0 auto',
    backgroundColor: '#f5f5f5',
    border: '1px solid #ddd',
    borderRadius: '5px',
    padding: '6px',
  };

  const actionCellStyle = {
    textAlign: 'center',
  };

  const tableHeaderStyle = {
    background: '#92a8d1',
    color: '#fff',
  };


  return (
    <>
      <Container>
        <h4 className="mt-4 mb-4">Appointment Details of User ID {id}</h4>
        
        <table className="table table-bordered table-hover mt-4" style={internalTable}>
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
              <th scope="col" colSpan={2} style={actionCellStyle}>Action</th>
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
                <td style={actionCellStyle}>
                  <Link
                    to={`/user/updateappointment/${appointment._id}`}
                  >
                    <button className='btn btn-success btn-block' >UPDATE</button>
                  </Link>
                </td>
                <td style={actionCellStyle}>
                  <button className='btn btn-danger btn-block' onClick={() => onDeleteClick(userData?._id, appointment._id)}>DELETE</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </Container>
    </>
  )
}

export default PaAppointment