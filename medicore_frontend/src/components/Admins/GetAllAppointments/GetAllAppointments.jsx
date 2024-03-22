import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom';

const internalTable = {
    fontFamily: 'Helvetica',
    maxWidth: '80%',
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


function GetAllAppointments() {

    const [appointments, setAppointments] = useState([]);

    useEffect(() => {
        async function getAppointments() {
            try {
                const response = await axios.get("https://medicore.onrender.com/appointment/all");
                setAppointments(response.data);
                console.log(response.data)
            } catch (error) {
                alert(error.message);
            }
        }

        getAppointments();
    }, []);



  return (
      <div className='p-3'>
          <br />
          <br /><br />
          <center>
              <h1 className='mb-5'>Appointment Details</h1>
          </center>
          <br />
          <div className="mb-3">
              <table className="table table-bordered table-hover" style={internalTable}>
                  <thead style={tableHeaderStyle}>
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
                          <th scope="col" colSpan={2} style={actionCellStyle}>Action</th>
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
                              <td style={actionCellStyle}>
                                  {/* <button className='btn btn-success' onClick={OnUpdate}>UPDATE</button> */}
                                  <a href={`update/${appointment._id}`}>
                                      <button type="button" className="btn btn-outline-primary">Update</button>
                                  </a>
                              </td>
                              <td style={actionCellStyle}>
                                  <button className='btn btn-outline-danger'>DELETE</button>
                              </td>
                          </tr>
                      ))}
                  </tbody>
              </table>
          </div>
      </div>
  )
}

export default GetAllAppointments