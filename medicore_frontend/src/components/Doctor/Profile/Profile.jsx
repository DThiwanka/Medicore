import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link, useParams } from 'react-router-dom';


function Profile() {
  const [doctorData, setDoctorData] = useState('');
  // const { id } = useParams();
  const currentUserData = localStorage.getItem('localData');
  const id = JSON.parse(currentUserData)._id;

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

  function editpro() {
    window.location.href = `/doctor/enc/profile/update`;
  }

  return (
    <div>
      <div className="container offset-auto mt-3">
        <div className="row gutters">
          <div className="col-xl-4 col-lg-4 col-md-12 col-sm-12 col-12">
            <div className="card h-100 border-0">
              <div className="card-body">
                <div className="account-settings">
                  <div className="user-profile text-center">
                    <div className="user-avatar">
                      <img src="https://bootdey.com/img/Content/avatar/avatar7.png" alt="Maxwell Admin" className="img-fluid rounded-circle" style={{ width: "50%", height: "50%" }} />
                    </div>
                    <h5 className="user-name mt-3">{doctorData.name}</h5>
                    <h6 className="user-email">{doctorData.email}</h6>
                  </div>
                  <div className="about mt-2 text-center">
                    <a href={doctorData.website}>{doctorData.website}</a>
                    <br />
                    <div className="about mt-2 text-center">
                      {doctorData._id}
                    </div>
                    {doctorData.schedule}

                    {/* <button className="btn btn-outline-info btn-block text-bold rounded mt-3">Edit Profile</button> */}

                  </div>

                  <div classNameName='mt-4'>

                    <div className="form-group">
                      <label for="specialization">Specialization and Degree</label>
                      <input type="text" className="form-control form-control-sm text-primary border-primary border-bottom-0" id="specialization" placeholder="specialization" value={doctorData.specialization} disabled />
                      <input type="text" className="form-control form-control-sm text-primary border-primary border-top-0" id="specialization" placeholder="specialization" value={doctorData.degree} disabled />

                    </div>

                    <div className="form-group">
                      <label for="licenseNumber">License Number</label>
                      <input type="text" className="form-control form-control-sm text-primary border-primary" id="licenseNumber" placeholder="licenseNumber" value={doctorData.licenseNumber} disabled />
                    </div>

                    <div className="form-group">
                      <label for="department">Department</label>
                      <input type="text" className="form-control form-control-sm text-primary border-primary" id="department" placeholder="department" value={doctorData.department} disabled />
                    </div>

                    <div className="form-group">
                      <label for="workExperience">Work Experience</label>
                      <input type="text" className="form-control form-control-sm text-primary border-primary" id="workExperience" placeholder="workExperience" value={doctorData.workExperience} disabled />
                    </div>

                    <div className="form-group">
                      <label for="certifications">Certifications</label>
                      <input type="text" className="form-control form-control-sm text-primary border-primary" id="certifications" placeholder="workExperience" value={doctorData.certifications} disabled />
                    </div>



                  </div>
                  <button className="btn btn-outline-danger btn-block text-bold rounded mt-3">Delete Profile</button>

                </div>
              </div>
            </div>
          </div>

          <div className="col-xl-8 col-lg-9 col-md-12 col-sm-12 col-12">
            <div className="card h-100 border-0">
              <div className="card-body">

                <div className="row gutters">
                  <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                    <h6 className="mb-2 text-primary">Your Personal Details</h6>
                  </div>
                  <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                    <div className="form-group">
                      <label for="fullName">Full Name</label>
                      <input type="text" className="form-control form-control-sm text-primary border-primary" id="fullName" placeholder="Enter full name" value={doctorData.name} disabled />
                    </div>
                  </div>

                  <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                    <div className="form-group">
                      <label for="eMail">Email</label>
                      <input type="email" className="form-control form-control-sm text-primary border-primary" id="eMail" placeholder="Enter email ID" value={doctorData.email} disabled />
                    </div>
                  </div>
                  <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                    <div className="form-group">
                      <label for="phone">Phone</label>
                      <input type="text" className="form-control form-control-sm text-primary border-primary" id="phone" placeholder="Enter phone number" value={doctorData.phoneNumber} disabled />
                    </div>
                  </div>
                  <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                    <div className="form-group">
                      <label for="website">Website URL</label>
                      <input type="url" className="form-control form-control-sm text-primary border-primary" id="website" placeholder="Website url" value={doctorData.website} disabled />
                    </div>
                  </div>
                </div>

                <div className="row gutters">
                  <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                    <div className="form-group">
                      <label for="Gender">Gender</label>
                      <input type="name" className="form-control form-control-sm text-primary border-primary" id="Gender" placeholder="Enter Gender" value={doctorData.gender} disabled />
                    </div>
                  </div>
                  <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                    <div className="form-group">
                      <label for="specialization">Age</label>
                      <input type="Age" className="form-control form-control-sm text-primary border-primary" id="Age" placeholder="Enter Age" value={doctorData.age} disabled />
                    </div>
                  </div>
                  <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                    <div className="form-group">
                      <label for="docNotes">Doctor Notes</label>
                      <input type="text" className="form-control form-control-sm text-primary border-primary" id="docNotes" placeholder="Enter Notes" value={doctorData.docNotes} disabled />
                    </div>
                  </div>
                  <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                    <div className="form-group">
                      <label for="doccode">Doctor Code</label>
                      <input type="text" className="form-control form-control-sm text-primary border-primary" id="doccode" placeholder="doccode" value={doctorData.doccode} disabled />
                    </div>
                  </div>
                </div>

                <div className="row gutters">
                  <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                    <div className="form-group">
                      <label for="address">Address</label>
                      <input type="name" className="form-control form-control-sm text-primary border-primary" id="address" placeholder="Enter address" value={doctorData.address} disabled />
                    </div>
                  </div>
                  <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                    <div className="form-group">
                      <label for="graduationYear">Graduation Year</label>
                      <input type="name" className="form-control form-control-sm text-primary border-primary" id="graduationYear" placeholder="Enter Graduation Year" value={doctorData.graduationYear} disabled />
                    </div>
                  </div>
                  <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                    <div className="form-group">
                      <label for="awards">Awards</label>
                      <input type="text" className="form-control form-control-sm text-primary border-primary" id="awards" placeholder="Enter awards" value={doctorData.awards} disabled />
                    </div>
                  </div>
                  <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                    <div className="form-group">
                      <label for="History">History</label>
                      <input type="text" className="form-control form-control-sm text-primary border-primary" id="History" placeholder="History" value={doctorData.history} disabled />
                    </div>
                  </div>
                </div>

                <div className="row gutters">
                  <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                    <div className="form-group">
                      <label for="address">address</label>
                      <input type="name" className="form-control form-control-sm text-primary border-primary" id="address" placeholder="Enter address" value={doctorData.address} disabled />
                    </div>
                  </div>
                  <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                    <div className="form-group">
                      <label for="achievements">Achievements</label>
                      <input type="name" className="form-control form-control-sm text-primary border-primary" id="achievements" placeholder="Enter Achievements" value={doctorData.achievements} disabled />
                    </div>
                  </div>
                  <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                    <div className="form-group">
                      <label for="acceptedInsurances">Accepted Insurances</label>
                      <input type="text" className="form-control form-control-sm text-primary border-primary" id="acceptedInsurances" placeholder="Enter Accepted Insurances" value={doctorData.acceptedInsurances} disabled />
                    </div>
                  </div>

                  <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                    <div className="form-group">
                      <label for="professionalMemberships">Professional Memberships</label>
                      <input type="text" className="form-control form-control-sm text-primary border-primary" id="professionalMemberships" placeholder="Professional Memberships" value={doctorData.professionalMemberships} disabled />
                    </div>
                  </div>

                  <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                    <div className="form-group">
                      <label for="languagesSpoken">Languages Spoken</label>
                      <input type="text" className="form-control form-control-sm text-primary border-primary" id="languagesSpoken" placeholder="Languages Spoken" value={doctorData.languagesSpoken} disabled />
                    </div>
                  </div>


                  <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                    <div className="form-group">
                      <label for="medicalSchool">Medical School</label>
                      <input type="text" className="form-control form-control-sm text-primary border-primary" id="medicalSchool" placeholder="medicalSchool" value={doctorData.medicalSchool} disabled />
                    </div>
                  </div>


                </div>

                <button className="btn btn-outline-info btn-block text-bold rounded mt-4" onClick={editpro}>Edit Profile</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>




  );
}

export default Profile;
