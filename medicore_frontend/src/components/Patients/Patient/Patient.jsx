import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useAuthentication } from '../../Auth/AuthHelper';
import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';


function Patient() {
    const [userData, setUserData] = useState(null);

    const user = useAuthentication();

    useEffect(() => {
        const currentUserData = localStorage.getItem('currentUser');
        if (currentUserData) {
            const { _id } = JSON.parse(currentUserData);
            fetchData(_id);
            console.log(currentUserData)
        }
    }, []);

    const fetchData = async (userId) => {
        try {
            const response = await axios.get(`http://localhost:8070/patient/get/${userId}`);
            setUserData(response.data.patient);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };


    const roundedDesign = {
        borderRadius: '5%', padding: '20px'
    }


    if (!user) {
        return null;
    }

    // const userdetails = JSON.parse(localStorage.getItem('currentUser'));
    // //const appointments = JSON.parse(localStorage.getItem('appointment'));

    // console.log("userdetails :", userdetails);
    // //console.log("Appointments :", appointments);





    return (
        <div>
            <section>
                <h2 className='mt-4 text-center'>User Profile</h2>
                <div className="container py-5">
                    <div className="row">
                        <div className="col-lg-4">
                            <div className="card mt-2" style={roundedDesign}>
                                <div className="card-body text-center">
                                    <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava3.webp" alt="avatar"
                                        className="rounded-circle img-fluid" style={{ width: "130px" }} />
                                    <h5 className="my-3">{user.name}</h5>
                                    <p className="text-muted mb-1">{user.connumber}</p>
                                    <p className="text-muted mb-4">{user._id}</p>
                                    <div className="d-flex justify-content-center mb-2">
                                        <Link to='update'>
                                            <button type="button" className="btn btn-outline-primary">Update</button>
                                        </Link>
                                        <button type="button" className="btn btn-outline-danger ml-3">Delete</button>
                                    </div>
                                </div>
                            </div>

                        </div>
                        <div className="col-lg-8" >
                            <div className="card mb-4" style={roundedDesign}>
                                <div className="card-body">
                                    <div className="row">
                                        <div className="col-sm-3">
                                            <p className="mb-0">Full Name</p>
                                        </div>
                                        <div className="col-sm-9">
                                            <p className="text-muted mb-0">{user.name}</p>
                                        </div>
                                    </div>
                                    <hr />
                                    <div className="row">
                                        <div className="col-sm-3">
                                            <p className="mb-0">Email</p>
                                        </div>
                                        <div className="col-sm-9">
                                            <p className="text-muted mb-0">{user.email}</p>
                                        </div>
                                    </div>
                                    <hr />
                                    <div className="row">
                                        <div className="col-sm-3">
                                            <p className="mb-0">Mobile</p>
                                        </div>
                                        <div className="col-sm-9">
                                            <p className="text-muted mb-0">{user.connumber}</p>
                                        </div>
                                    </div>
                                    <hr />
                                    <div className="row">
                                        <div className="col-sm-3">
                                            <p className="mb-0">Notes</p>
                                        </div>
                                        <div className="col-sm-9">
                                            <p className="text-muted mb-0">{user.notes}</p>
                                        </div>
                                    </div>
                                    <hr />
                                    <div className="row">
                                        <div className="col-sm-3">
                                            <p className="mb-0">Address</p>
                                        </div>
                                        <div className="col-sm-9">
                                            <p className="text-muted mb-0">{user.address}</p>
                                        </div>

                                    </div>
                                    <hr />
                                    <div className="row">
                                        <div className="col-sm-3">
                                            <p className="mb-0">Account Created On</p>
                                        </div>
                                        <div className="col-sm-9">
                                            <p className="text-muted mb-0">{user.createdAt}</p>
                                        </div>

                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Patient