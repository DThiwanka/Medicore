import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useAuthentication } from '../../Auth/AuthHelper';
import { Button, Container } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import Patient from './Patient';

const UpdatePatient = () => {
    const [userData, setUserData] = useState({
        id: localStorage.getItem('currentUser') ? JSON.parse(localStorage.getItem('currentUser'))._id: '',
        name: '',
        email: '',
        connumber: '',
        notes: '',
        address: '',
    });

    
    useEffect(() => { 
        const fetchUser = async () => {
            try {
                const response = await axios.get(`http://localhost:8070/patient/get/${userData.id}`);
                console.log(response.data);
                setUserData(response.data);
            } catch (error) {
                console.log(error);
            }
        };
        fetchUser();
    },
        //[Patient.id]
    );

    const handleChange = (e) => {
        setUserData({ ...userData, [e.target.name]: e.target.value });
    };
    
    const handleSubmit = async (e) => { 
        e.preventDefault();
        try {
            await axios.put(`http://localhost:8070/patient/update/${userData.id}`, userData);
            const data = {
                    
                    name: userData.name,
                    email: userData.email,
                    connumber: userData.connumber,
                    notes: userData.notes,
                    address: userData.address,
            };
            console.log(data);
        } catch (error) {
            console.log(error);
        }
    }

    // const onChange = (e) => {
    //     const { name, value } = e.target;
    //     setUserData((prevUserData) => ({
    //         ...prevUserData,
    //         [name]: value,
    //     }));
    // };

    // const onSubmit = (e) => {
    //     e.preventDefault();

    //     const data = {
    //         name: userData.name,
    //         email: userData.email,
    //         connumber: userData.connumber,
    //         notes: userData.notes,
    //         address: userData.address,
    //     };

    // function sendData(e) {
    //     e.preventDefault();

    //     const newPatient = {
    //         name,
    //         email,
    //         connumber,
    //         notes,
    //         address,
    //     }


    //     var result = window.confirm(`Are you sure to Update Your Profile?`);
    //     if (result) {
    //         axios.put(`http://localhost:8070/patient/update/${id}`, newPatient)
    //             .then((res) => {
    //                 console.log(res.data);
    //                 window.location.reload();
    //             })
    //             .catch((err) => {
    //                 console.log('Error in UpdateBookInfo:', err);
    //             });
    //     } else { 
    //         return;
    //     }
    

        
    // };

    const roundedDesign = {
        borderRadius: '5%', padding: '20px'
    }

    return (
        <div>

            <section>
                <h2 className='mt-4 text-center'>Update Profile</h2>
                <div className="container py-5">
                    <div className="row">
                        <div className="col-lg-4">
                            <div className="card mt-2" style={roundedDesign}>
                                <div className="card-body text-center">
                                    <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava3.webp" alt="avatar"
                                        className="rounded-circle img-fluid" style={{ width: "130px" }} />
                                    <h5 className="my-3">{}</h5>
                                    <p className="text-muted mb-1">{userData.connumber}</p>
                                    <p className="text-muted mb-4">{userData.id}</p>
                                    <div className="d-flex justify-content-center mb-2">
                                        <button type="button" className="btn btn-primary">Follow</button>
                                        <button type="button" className="btn btn-outline-primary ml-3">Message</button>
                                    </div>
                                </div>
                            </div>

                        </div>

                        

                        <div className="col-lg-8" >
                            <form onSubmit={handleSubmit}>
                                <div className="card mb-4 border-0">
                                    <div className="card-body">
                                        <div className="row">
                                            <div className="col-sm-3">
                                                <p className="mb-0">Full Name</p>
                                            </div>
                                            <div className="col-sm-9">
                                               
                                                <input type="text" className='form-control form-control-sm' name='name' value={userData.name} onChange={handleChange} />
                                            </div>
                                        </div>
                                        <hr />
                                        <div className="row">
                                            <div className="col-sm-3">
                                                <p className="mb-0">Email</p>
                                            </div>
                                            <div className="col-sm-9">
                                               
                                                <input type="text" className='form-control form-control-sm' name='email' value={userData.email} onChange={handleChange} />
                                            </div>
                                        </div>
                                        <hr />
                                        <div className="row">
                                            <div className="col-sm-3">
                                                <p className="mb-0">Mobile</p>
                                            </div>
                                            <div className="col-sm-9">
                                               
                                                <input type="text" className='form-control form-control-sm' name='connumber' value={userData.connumber} onChange={handleChange} />
                                            </div>
                                        </div>
                                        <hr />
                                        <div className="row">
                                            <div className="col-sm-3">
                                                <p className="mb-0">Notes</p>
                                            </div>
                                            <div className="col-sm-9">
                                                
                                                <input type="text" className='form-control form-control-sm' name='notes' value={userData.notes} onChange={handleChange} />
                                            </div>
                                        </div>
                                        <hr />
                                        <div className="row">
                                            <div className="col-sm-3">
                                                <p className="mb-0">Address</p>
                                            </div>
                                            <div className="col-sm-9">
                                                
                                                <input type="text" className='form-control form-control-sm' name='address' value={userData.address} onChange={handleChange} />
                                            </div>

                                        </div>
                                        <hr />
                                    </div>
                                </div>
                                <div className='d-flex justify-content-center'>
                                <Button className='mr-3 btn btn-success' type="submit">Submit</Button>
                                    <Button className='danger btn btn-danger' type="reset">Rest</Button>
                                </div>
                            </form>
                        </div>
                        
                    </div>
                </div>
            </section>
        </div>
    )
}

export default UpdatePatient