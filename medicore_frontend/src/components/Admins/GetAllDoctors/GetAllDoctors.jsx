import React, { useEffect, useState } from 'react';
import axios from 'axios';

const tableStyles = {
    backgroundColor: '#ff6f00',

};


const internalTable = {
    FontFamily: 'Arial',
    width: '100%',
};


function GetAllDoctors() {

    const [Doctors, setdoctors] = useState([]);

    useEffect(() => {
        async function getDoctors() {
            try {
                const response = await axios.get("http://localhost:8070/doctor/");
                setdoctors(response.data);
                console.log(response.data);
            } catch (error) {
                alert(error.message);
            }
        }
        getDoctors();
    }, []);

    return (
        <div className='container mx-auto'>
            <br />
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
                <h1 className='mb-5'>Admin Details</h1>
            </center>
            <br />
            <div className="mb-3">
                <table className="table table-bordered table-hover" style={tableStyles}>
                    <thead>
                        <tr>
                            <th scope="col">Id</th>
                            <th scope="col">Doc Code</th>
                            <th scope="col">Name</th>
                            <th scope="col">Phone Number</th>
                            <th scope="col">License Number</th>
                            <th scope="col" colSpan={2} style={{ textAlign: "center" }}>Action</th>
                        </tr>
                    </thead>

                    <tbody>
                        {Doctors.map((doctor, index) => (
                            <tr key={index}>
                                <td>{index + 1}</td>
                                <td>{doctor.doccode}</td>
                                <td>{doctor.name}</td>
                                <td>{doctor.phoneNumber}</td>
                                <td>{doctor.licenseNumber}</td>
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

export default GetAllDoctors;
