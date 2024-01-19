import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link, useParams } from 'react-router-dom';
import { Container, Row, Col, Tab, Nav, Button, Image } from 'react-bootstrap';

function Profile() {
  const [doctorData, setDoctorData] = useState('');
  const { id } = useParams();

  useEffect(() => {
    fetchData(id);
  }, [id]);

  const fetchData = async (id) => {
    try {
      const response = await axios.get(`http://localhost:8070/doctor/get/${id}`);
      setDoctorData(response.data.doctor);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  return (
    <div>
    
      {/* Main Section */}
      <section>
        <div className="rt-container">
          <div className="col-rt-12">
            <div className="Scriptcontent">
              {/* Student Profile */}
              <div className="student-profile py-4">
                <div className="container">
                  <div className="row">
                    <div className="col-lg-4">
                      <div className="card shadow-sm">
                        <div className="card-header bg-transparent text-center">
                          <h3>{ doctorData.name}</h3>
                        </div>
                        <div className="card-body">
                          <p className="mb-0">
                            <strong className="pr-1">Student ID:</strong>321000001
                          </p>
                          <p className="mb-0">
                            <strong className="pr-1">Class:</strong>4
                          </p>
                          <p className="mb-0">
                            <strong className="pr-1">Section:</strong>A
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-8">
                      <div className="card shadow-sm">
                        <div className="card-header bg-transparent border-0">
                          <h3 className="mb-0">
                            <i className="far fa-clone pr-1"></i>General Information
                          </h3>
                        </div>
                        <div className="card-body pt-0">
                          <table className="table table-bordered">
                            <tbody>
                              <tr>
                                <th width="30%">Roll</th>
                                <td width="2%">:</td>
                                <td>125</td>
                              </tr>
                              <tr>
                                <th width="30%">Academic Year</th>
                                <td width="2%">:</td>
                                <td>2020</td>
                              </tr>
                              <tr>
                                <th width="30%">Gender</th>
                                <td width="2%">:</td>
                                <td>Male</td>
                              </tr>
                              <tr>
                                <th width="30%">Religion</th>
                                <td width="2%">:</td>
                                <td>Group</td>
                              </tr>
                              <tr>
                                <th width="30%">Blood</th>
                                <td width="2%">:</td>
                                <td>B+</td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                      </div>
                      <div style={{ height: '26px' }}></div>
                      
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Analytics */}

    </div>
  );
}

export default Profile;
