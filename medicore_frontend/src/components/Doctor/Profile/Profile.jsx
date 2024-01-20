import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link, useParams } from 'react-router-dom';


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
      <div class="container offset-auto mt-5">
        <div class="row gutters">
          <div class="col-xl-4 col-lg-4 col-md-12 col-sm-12 col-12">
            <div class="card h-100 border-0">
              <div class="card-body">
                <div class="account-settings">
                  <div class="user-profile text-center">
                    <div class="user-avatar">
                      <img src="https://bootdey.com/img/Content/avatar/avatar7.png" alt="Maxwell Admin" class="img-fluid rounded-circle mt-2" style={{ width: "50%", height: "50%" }} />
                    </div>
                    <h5 class="user-name mt-3">{doctorData.name}</h5>
                    <h6 class="user-email">{doctorData.email}</h6>
                  </div>
                  <div class="about mt-2 text-center">
                    <a href={doctorData.website}>{doctorData.website}</a>
                    <br />
                    <div class="about mt-2 text-center">
                      {doctorData._id}
                    </div>

                    <button class="btn btn-outline-info btn-block text-bold rounded mt-3">Edit Profile</button>

                  </div>

                  <div className='mt-4'>
                    <div class="form-group">
                      <label for="zIp">Zip Code</label>
                      <input type="text" class="form-control text-primary border-primary" id="zIp" placeholder="Zip Code" />
                    </div>

                    <div class="form-group">
                      <label for="zIp">Zip Code</label>
                      <input type="text" class="form-control text-primary border-primary" id="zIp" placeholder="Zip Code" />
                    </div>
                  </div>

                </div>
              </div>
            </div>
          </div>

          <div class="col-xl-8 col-lg-9 col-md-12 col-sm-12 col-12">
            <div class="card h-100 border-0">
              <div class="card-body">

                <div class="row gutters">
                  <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                    <h6 class="mb-2 text-primary">Your Personal Details</h6>
                  </div>
                  <div class="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                    <div class="form-group">
                      <label for="fullName">Full Name</label>
                      <input type="text" class="form-control text-primary border-primary" id="fullName" placeholder="Enter full name" value={doctorData.name} disabled />
                    </div>
                  </div>

                  <div class="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                    <div class="form-group">
                      <label for="eMail">Email</label>
                      <input type="email" class="form-control text-primary border-primary" id="eMail" placeholder="Enter email ID" value={doctorData.email} disabled />
                    </div>
                  </div>
                  <div class="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                    <div class="form-group">
                      <label for="phone">Phone</label>
                      <input type="text" class="form-control text-primary border-primary" id="phone" placeholder="Enter phone number" value={doctorData.phoneNumber} disabled />
                    </div>
                  </div>
                  <div class="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                    <div class="form-group">
                      <label for="website">Website URL</label>
                      <input type="url" class="form-control text-primary border-primary" id="website" placeholder="Website url" />
                    </div>
                  </div>
                </div>

                <div class="row gutters">
                  <div class="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                    <div class="form-group">
                      <label for="Street">Street</label>
                      <input type="name" class="form-control text-primary border-primary" id="Street" placeholder="Enter Street" />
                    </div>
                  </div>
                  <div class="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                    <div class="form-group">
                      <label for="ciTy">City</label>
                      <input type="name" class="form-control text-primary border-primary" id="ciTy" placeholder="Enter City" />
                    </div>
                  </div>
                  <div class="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                    <div class="form-group">
                      <label for="sTate">State</label>
                      <input type="text" class="form-control text-primary border-primary" id="sTate" placeholder="Enter State" />
                    </div>
                  </div>
                  <div class="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                    <div class="form-group">
                      <label for="zIp">Zip Code</label>
                      <input type="text" class="form-control text-primary border-primary" id="zIp" placeholder="Zip Code" />
                    </div>
                  </div>
                </div>

                <div class="row gutters">
                  <div class="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                    <div class="form-group">
                      <label for="Street">Street</label>
                      <input type="name" class="form-control text-primary border-primary" id="Street" placeholder="Enter Street" />
                    </div>
                  </div>
                  <div class="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                    <div class="form-group">
                      <label for="ciTy">City</label>
                      <input type="name" class="form-control text-primary border-primary" id="ciTy" placeholder="Enter City" />
                    </div>
                  </div>
                  <div class="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                    <div class="form-group">
                      <label for="sTate">State</label>
                      <input type="text" class="form-control text-primary border-primary" id="sTate" placeholder="Enter State" />
                    </div>
                  </div>
                  <div class="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                    <div class="form-group">
                      <label for="zIp">Zip Code</label>
                      <input type="text" class="form-control text-primary border-primary" id="zIp" placeholder="Zip Code" />
                    </div>
                  </div>
                </div>


              </div>
            </div>
          </div>
        </div>
      </div>
    </div>




  );
}

export default Profile;
