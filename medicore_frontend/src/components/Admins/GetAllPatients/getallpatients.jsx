import React, { useEffect, useState, useRef } from 'react';
import axios from 'axios';
import { Link, generatePath } from 'react-router-dom';
import { BsCalendar2CheckFill } from "react-icons/bs";


import { useReactToPrint } from 'react-to-print';
import { Button } from 'react-bootstrap';

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


//Functions
function GetAllpatients() {

  const componentPDF = useRef();

  const [patients, setPatients] = useState([]);

  useEffect(() => {
    async function getPatients() {
      try {
        const response = await axios.get("https://medicore.onrender.com/patient");
        setPatients(response.data); // Update state with fetched patient data
        console.log(response.data)
      } catch (error) {
        alert(error.message);
      }
    }

    getPatients();
  }, []);


  const onDeleteClick = async (userId) => {

    var result = window.confirm(`Are you sure to delete This Profile? :- ${userId}`);

    if (result) {
      try {
        await axios.delete(`https://medicore.onrender.com/patient/delete/${userId}`);
        //fetchData(userId); // Refresh data after successful deletion 
        alert('User Deleted Successfully');
        localStorage.clear();
        window.location.reload();
      } catch (err) {
        console.log('Error from onDeleteClick:', err);
      }
    } else {
      alert('User Deletion Cancelled');
      return;
    }


  };

  const OnViewApp = async (userId) => {
    window.location.href = `/admin/view/appointment/${userId}`;
  }

  const generatePDF = useReactToPrint({
    content: () => componentPDF.current,
    documentTitle: 'Patient Details',
    copyStyles: false,
    onAfterPrint: () => { 
      alert('PDF Generated Successfully');
    }
  })

  return (
    <div>

      <div>

        {/* <button style={{ borderRadius: "5px", background: "#b30059", padding: "0.5%" }}>
          <Link to="/ord/add" style={{ color: "white", textDecoration: "none" }}>Add New Order</Link>
        </button>&nbsp;&nbsp;&nbsp;&nbsp;
        <button style={{ borderRadius: "5px", background: "#b30059", padding: "0.5%" }}>
          <Link to="/ord/report" style={{ color: "white", textDecoration: "none" }}>Patient Details</Link>
        </button>&nbsp;&nbsp;&nbsp;&nbsp; */}

      </div>
      <br /><br />
      <center>
        {/* <h1 style={{ color: "#660033", fontWeight: "bolder", fontSize: "50px" }}>Patient Details</h1> */}
        <h1 className='mb-1'>Patient Details</h1>
      </center>
      <br />
      <div className="mb-1">
        <div ref={componentPDF} style={{width:'100%'}}>
        <table className="table table-bordered table-hover" style={internalTable}>
          <thead style={tableHeaderStyle}>
            <tr>
              <th scope="col">Id</th>
              <th scope="col">Name</th>
              <th scope="col">Email</th>

              <th scope="col">Gender</th>
              <th scope="col">BloodGroup</th>
              <th scope="col">Address</th>

              <th scope="col" colSpan={3} id='#act' style={actionCellStyle}>Action</th>
            </tr>
          </thead>

          <tbody>
            {patients.map((patient, index) => (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{patient.name}</td>
                <td>{patient.email}</td>
                <td>{patient.gender}</td>
                <td>{patient.bloodGroup}</td>
                <td>{patient.address}</td>
                <td style={actionCellStyle}>
                  <button className='btn btn-success'>UPDATE</button>
                </td>
                <td style={actionCellStyle}>
                  <button className='btn btn-danger' onClick={() => onDeleteClick(patient._id)}>DELETE</button>
                </td>
                <td style={actionCellStyle}>
                  <button className='btn btn-outline-secondary' onClick={() => OnViewApp(patient._id)}><BsCalendar2CheckFill /></button>
                </td>
              </tr>
            ))}
          </tbody>
          </table>
        </div>
        <div className='d-grid d-md-flex justify-content-md-end mb-3'>
          <Button className='btn btn-success' onClick={generatePDF}>
            PDF
          </Button>
        </div>
      </div>
    </div>
  );
}

export default GetAllpatients;
